---
sidebar_position: 2
title: Operations
sidebar_label: Operations
---

# Operations

This guide covers the essentials for running Trajectory in production: backups, updates, rollback, and monitoring.

## Backups

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

## Best Practices

1. **Regular backups** - Automate daily database and volume backups
2. **HTTPS only** - Always use HTTPS in production
3. **Strong secrets** - Use long, random secrets for JWT and database
4. **Monitor logs** - Regularly check logs for errors or suspicious activity
5. **Test updates** - Test updates in a staging environment when possible
6. **Document changes** - Keep notes on configuration changes
7. **Security updates** - Subscribe to repository updates for security patches
