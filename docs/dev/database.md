---
sidebar_position: 5
---

# Database

## Connection

- PostgreSQL 15
- Default credentials: `trajectory_user` / `password`
- Database name: `trajectory`

**Schema:**
- Located in `backend/migrations/schema.sql`
- Migrations in `backend/migrations/`

## Seed Data

Generate mock data for development:

```bash
npm run seed
```

Seed mock data using Docker Compose:

```bash
docker compose exec app node dist/scripts/seed-mock-data.js --username admin --password secret
```

This creates:
- Sample families
- Children with measurements
- Medical visits and illnesses
- Test attachments

## Database Migrations

### Creating a Migration

1. **Create SQL file** in `backend/migrations/`:

```bash
touch backend/migrations/$(date +%Y%m%d-%H%M%S)-description.sql
```

2. **Write migration:**

```sql
-- Migration: Add new column
ALTER TABLE people ADD COLUMN IF NOT EXISTS new_field VARCHAR(255);
```

3. **Test migration:**

```bash
npm run db:reset  # Recreates DB with all migrations
npm run dev       # Verify app works
```

### Migration Best Practices

- Use `IF EXISTS` / `IF NOT EXISTS` for idempotency
- Test migrations on a copy of production data
- Keep migrations small and focused
- Document breaking changes
