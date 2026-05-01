---
sidebar_position: 2
---

# Deployment

This guide covers production deployment, HTTPS setup, backups, updates, and rollback procedures for Trajectory.

## Production Setup

### Prerequisites

- Docker and Docker Compose installed
- A domain name (recommended)
- Reverse proxy for HTTPS (Nginx, Caddy, Nginx Proxy Manager, etc.)

### Environment Configuration

1. **Copy the production environment template:**

```bash
cp .env.prod.example .env
```

2. **Configure required variables in `.env`:**

```bash
# Database Configuration
DB_USER=trajectory_user
DB_PASSWORD=your_strong_password_here
DB_NAME=trajectory

# JWT Secrets (MUST be changed from defaults)
JWT_SECRET=your_jwt_secret_here
JWT_REFRESH_SECRET=your_jwt_refresh_secret_here

# Application Image
IMAGE=ghcr.io/dodgerbluee/trajectory:latest

# Node Environment
NODE_ENV=production
```

:::danger Security Warning
**NEVER use placeholder or example secrets in production.** The application will not start in production mode with default/placeholder secrets. Generate strong, unique secrets for each deployment.
:::

### Generate Strong Secrets

Use one of these methods to generate secure secrets:

```bash
# Using OpenSSL
openssl rand -base64 32

# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Using /dev/urandom
head -c 32 /dev/urandom | base64
```

### Start the Application

```bash
docker-compose -f docker-compose.prod.yml up -d
```

This starts three services:
- **database**: PostgreSQL database
- **backend**: Express API server
- **frontend**: React application (served via Nginx)

### Verify the Deployment

```bash
# Check running containers
docker-compose -f docker-compose.prod.yml ps

# View logs
docker-compose -f docker-compose.prod.yml logs -f

# Check backend health
docker-compose -f docker-compose.prod.yml logs backend
```

## HTTPS Setup

Trajectory **does not terminate TLS**. You must use a reverse proxy for HTTPS.

## Backup Strategy

### What to Back Up

Trajectory stores data in two places:

1. **PostgreSQL Database** - All structured data (people, visits, measurements, etc.)
2. **File Volumes** - Uploaded attachments and avatars

### Database Backup

**Manual backup:**

```bash
docker-compose -f docker-compose.prod.yml exec database \
  pg_dump -U trajectory_user trajectory > backup_$(date +%Y%m%d_%H%M%S).sql
```

**Automated backup script:**

Create `backup.sh`:

```bash
#!/bin/bash
BACKUP_DIR="/path/to/backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Backup database
docker-compose -f docker-compose.prod.yml exec -T database \
  pg_dump -U trajectory_user trajectory > "$BACKUP_DIR/db_$TIMESTAMP.sql"

# Keep only last 30 days
find "$BACKUP_DIR" -name "db_*.sql" -mtime +30 -delete

echo "Backup completed: $BACKUP_DIR/db_$TIMESTAMP.sql"
```

### Volume Backup

Back up Docker volumes for file uploads:

```bash
# Stop the application (optional, for consistency)
docker-compose -f docker-compose.prod.yml stop

# Backup volumes
docker run --rm \
  -v trajectory_uploads:/data \
  -v $(pwd):/backup \
  alpine tar czf /backup/uploads_$(date +%Y%m%d_%H%M%S).tar.gz -C /data .

docker run --rm \
  -v trajectory_avatars:/data \
  -v $(pwd):/backup \
  alpine tar czf /backup/avatars_$(date +%Y%m%d_%H%M%S).tar.gz -C /data .

# Restart the application
docker-compose -f docker-compose.prod.yml start
```

## Updates

### Update Process

1. **Back up your data** (database and volumes)

2. **Pull the latest image:**

```bash
docker-compose -f docker-compose.prod.yml pull
```

3. **Restart containers:**

```bash
docker-compose -f docker-compose.prod.yml up -d
```

4. **Verify the update:**

```bash
docker-compose -f docker-compose.prod.yml logs -f
```

### Version-Specific Updates

Always check the [VERSIONING.md](https://github.com/dodgerbluee/trajectory/blob/main/docs/VERSIONING.md) file for:
- Breaking changes
- Required migrations
- New environment variables
- Deprecation notices

## Rollback

If an update causes issues:

1. **Stop the containers:**

```bash
docker-compose -f docker-compose.prod.yml down
```

2. **Update `.env` to use the previous version:**

```bash
IMAGE=ghcr.io/dodgerbluee/trajectory:v0.1.3
```

3. **Restore from backup if needed:**

```bash
# Restore database
cat backup_20260204_020000.sql | docker-compose -f docker-compose.prod.yml exec -T database \
  psql -U trajectory_user trajectory
```

4. **Restart with the previous version:**

```bash
docker-compose -f docker-compose.prod.yml up -d
```

## Monitoring

### View Logs

```bash
# All services
docker-compose -f docker-compose.prod.yml logs -f

# Specific service
docker-compose -f docker-compose.prod.yml logs -f backend

# Last 100 lines
docker-compose -f docker-compose.prod.yml logs --tail=100
```

### Resource Usage

```bash
# Container stats
docker stats

# Disk usage
docker system df
```

## Using Portainer

[Portainer](https://www.portainer.io/) provides a web UI for Docker management.

1. **Install Portainer:**

```bash
docker volume create portainer_data
docker run -d -p 9000:9000 \
  --name portainer \
  --restart always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v portainer_data:/data \
  portainer/portainer-ce
```

2. **Access Portainer** at `http://your-server:9000`

3. **Manage Trajectory:**
   - View container status
   - Check logs
   - Update images
   - Manage volumes

## Troubleshooting

### Container Won't Start

Check logs for errors:

```bash
docker-compose -f docker-compose.prod.yml logs backend
```

Common issues:
- Missing or invalid environment variables
- Database connection failures
- Port conflicts

### Database Connection Errors

Verify database is running:

```bash
docker-compose -f docker-compose.prod.yml exec database psql -U trajectory_user -d trajectory -c "SELECT 1"
```

### Permission Issues

Ensure volume permissions are correct:

```bash
docker-compose -f docker-compose.prod.yml exec backend ls -la /app/uploads
```

## Best Practices

1. **Regular Backups** - Automate daily database and volume backups
2. **HTTPS Only** - Always use HTTPS in production
3. **Strong Secrets** - Use long, random secrets for JWT and database
4. **Monitor Logs** - Regularly check logs for errors or suspicious activity
5. **Test Updates** - Test updates in a staging environment when possible
6. **Document Changes** - Keep notes on configuration changes
7. **Security Updates** - Subscribe to repository updates for security patches
