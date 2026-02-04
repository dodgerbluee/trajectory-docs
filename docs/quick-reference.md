---
sidebar_position: 7
---

# Quick Reference

Essential commands and configurations for Trajectory.

## Quick Start Commands

### Production Deployment

```bash
# Initial setup
git clone https://github.com/dodgerbluee/trajectory.git
cd trajectory
cp .env.prod.example .env
# Edit .env with strong secrets
docker-compose -f docker-compose.prod.yml up -d
```

### Development

```bash
# Start all services
docker-compose up

# Backend only
cd backend && npm run dev

# Frontend only
cd frontend && npm run dev
```

### Backup

```bash
# Database backup
docker-compose -f docker-compose.prod.yml exec database \
  pg_dump -U trajectory_user trajectory > backup.sql

# Volume backup
docker run --rm \
  -v trajectory_uploads:/data \
  -v $(pwd):/backup \
  alpine tar czf /backup/uploads.tar.gz -C /data .
```

## Environment Variables

### Required (Production)

```bash
# Database
DB_USER=trajectory_user
DB_PASSWORD=strong_password_here
DB_NAME=trajectory

# JWT Authentication
JWT_SECRET=random_secret_32_chars_or_more
JWT_REFRESH_SECRET=different_random_secret_32_chars

# Application
NODE_ENV=production
IMAGE=ghcr.io/dodgerbluee/trajectory:latest
```

### Optional

```bash
# Backend
PORT=3001
UPLOAD_DIR=/app/uploads
AVATAR_DIR=/app/avatars
MAX_FILE_SIZE=10485760  # 10MB in bytes

# Database
DATABASE_URL=postgresql://user:pass@host:5432/dbname
```

## Docker Commands

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Restart specific service
docker-compose restart backend

# Rebuild images
docker-compose build --no-cache

# Remove volumes (⚠️ deletes data!)
docker-compose down -v

# Container stats
docker stats
```

## Database Commands

```bash
# Access PostgreSQL
docker-compose exec database psql -U trajectory_user -d trajectory

# Run SQL file
cat script.sql | docker-compose exec -T database \
  psql -U trajectory_user trajectory

# Backup database
docker-compose exec database pg_dump -U trajectory_user trajectory > backup.sql

# Restore database
cat backup.sql | docker-compose exec -T database \
  psql -U trajectory_user trajectory

# List tables
docker-compose exec database psql -U trajectory_user -d trajectory -c "\dt"

# Check migrations
docker-compose exec database psql -U trajectory_user -d trajectory \
  -c "SELECT * FROM migrations ORDER BY applied_at;"
```

## API Endpoints

### Authentication

```bash
# Register
POST /api/auth/register
Body: { email, password, name }

# Login
POST /api/auth/login
Body: { email, password }

# Refresh token
POST /api/auth/refresh
Body: { refreshToken }

# Logout
POST /api/auth/logout
Headers: Authorization: Bearer <token>
```

### Children

```bash
# List children
GET /api/children
Headers: Authorization: Bearer <token>

# Create child
POST /api/children
Headers: Authorization: Bearer <token>
Body: { name, dateOfBirth, sex, familyId }

# Get child
GET /api/children/:id
Headers: Authorization: Bearer <token>

# Update child
PUT /api/children/:id
Headers: Authorization: Bearer <token>
Body: { name, dateOfBirth, sex }

# Delete child
DELETE /api/children/:id
Headers: Authorization: Bearer <token>
```

### Measurements

```bash
# List measurements
GET /api/children/:childId/measurements
Headers: Authorization: Bearer <token>

# Create measurement
POST /api/children/:childId/measurements
Headers: Authorization: Bearer <token>
Body: { measuredAt, heightCm, weightKg, headCircumferenceCm }
```

### Visits

```bash
# List visits
GET /api/visits?childId=:childId
Headers: Authorization: Bearer <token>

# Create visit
POST /api/visits
Headers: Authorization: Bearer <token>
Body: { childId, date, type, notes }
```

## Common SQL Queries

```sql
-- Count users
SELECT COUNT(*) FROM users;

-- List families
SELECT * FROM families;

-- Children per family
SELECT f.name, COUNT(c.id) as child_count
FROM families f
LEFT JOIN children c ON f.id = c.family_id
GROUP BY f.id, f.name;

-- Recent visits
SELECT c.name, v.date, v.type, v.notes
FROM visits v
JOIN children c ON v.child_id = c.id
ORDER BY v.date DESC
LIMIT 10;

-- Growth measurements
SELECT c.name, m.measured_at, m.height_cm, m.weight_kg
FROM measurements m
JOIN children c ON m.child_id = c.id
WHERE c.id = :child_id
ORDER BY m.measured_at DESC;

-- Illness summary
SELECT c.name, i.start_date, i.diagnosis, i.symptoms
FROM illnesses i
JOIN children c ON i.child_id = c.id
WHERE i.end_date IS NULL;  -- Current illnesses
```

## Troubleshooting Commands

```bash
# Check container status
docker-compose ps

# View all logs
docker-compose logs

# View backend logs only
docker-compose logs backend

# Follow logs in real-time
docker-compose logs -f

# Check disk usage
docker system df

# Prune unused resources
docker system prune

# Check open ports
lsof -i :5017
lsof -i :5018

# Test backend API
curl http://localhost:5017/api/health

# Check database connection
docker-compose exec database psql -U trajectory_user -d trajectory -c "SELECT 1"
```

## Security Checklist

```bash
# Generate strong secrets
openssl rand -base64 32

# Check environment
cat .env | grep -v PASSWORD | grep -v SECRET

# Verify HTTPS (should return 301 redirect)
curl -I http://your-domain.com

# Check SSL certificate
openssl s_client -connect your-domain.com:443 -servername your-domain.com

# Test HSTS header
curl -I https://your-domain.com | grep -i strict
```

## Backup Script

```bash
#!/bin/bash
BACKUP_DIR="/path/to/backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

mkdir -p "$BACKUP_DIR"

# Database
docker-compose -f docker-compose.prod.yml exec -T database \
  pg_dump -U trajectory_user trajectory > "$BACKUP_DIR/db_$TIMESTAMP.sql"

# Uploads
docker run --rm \
  -v trajectory_uploads:/data \
  -v "$BACKUP_DIR":/backup \
  alpine tar czf "/backup/uploads_$TIMESTAMP.tar.gz" -C /data .

# Avatars
docker run --rm \
  -v trajectory_avatars:/data \
  -v "$BACKUP_DIR":/backup \
  alpine tar czf "/backup/avatars_$TIMESTAMP.tar.gz" -C /data .

# Cleanup old backups (30 days)
find "$BACKUP_DIR" -name "*.sql" -mtime +30 -delete
find "$BACKUP_DIR" -name "*.tar.gz" -mtime +30 -delete

echo "Backup completed: $TIMESTAMP"
```

## Port Reference

| Service | Port | Description |
|---------|------|-------------|
| Frontend | 5017 | React app served by backend |
| Backend | 5017 | Express API (internal port in container) |
| Database | 5018 | PostgreSQL (external access) |
| Database | 5432 | PostgreSQL (internal/container) |

## File Locations

| Path | Description |
|------|-------------|
| `/app/uploads` | File attachments |
| `/app/avatars` | Child avatars |
| `/var/lib/postgresql/data` | Database files |
| `backend/migrations/` | SQL migrations |
| `.env` | Environment configuration |

## Support Resources

- [GitHub Repository](https://github.com/dodgerbluee/trajectory)
- [GitHub Issues](https://github.com/dodgerbluee/trajectory/issues)
- [Security Policy](https://github.com/dodgerbluee/trajectory/blob/main/docs/SECURITY.md)
- [License](https://github.com/dodgerbluee/trajectory/blob/main/LICENSE)
