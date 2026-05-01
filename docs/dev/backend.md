---
sidebar_position: 3
---

# Backend

## Setup

1. **Navigate to backend directory:**

```bash
cd backend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create environment file:**

```bash
cp .env.example .env
```

Edit `.env`:

```bash
DATABASE_URL=postgresql://trajectory_user:password@localhost:5432/trajectory
APP_PORT=5017
UPLOAD_DIR=./uploads
AVATAR_DIR=./avatars
NODE_ENV=development
JWT_SECRET=dev_secret
JWT_REFRESH_SECRET=dev_refresh_secret
```

4. **Start PostgreSQL:**

```bash
npm run db:start
# or from project root:
docker-compose up -d database
```

5. **Run migrations (if needed):**

Migrations run automatically on startup, but you can apply them manually:

```bash
npm run migrate
```

## Development Server

```bash
npm run dev
```

This starts the API server with hot reload using `tsx watch`. The server runs on `http://localhost:5017`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run compiled code from `dist/` |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests with Jest |
| `npm run test:watch` | Run tests in watch mode |
| `npm run db:start` | Start PostgreSQL container |
| `npm run db:reset` | Reset database (delete and recreate) |

## API Routes

The backend exposes these main routes:

| Route | Description |
|-------|-------------|
| `/api/auth/*` | Authentication (register, login, refresh) |
| `/api/people` | Children CRUD |
| `/api/visits` | Medical visits |
| `/api/illnesses` | Illness tracking |
| `/api/measurements` | Growth measurements |
| `/api/medical-events` | Medical events (vaccines, etc.) |
| `/api/users` | User management |
| `/api/families` | Family management |
| `/api/invites` | Family invitations |
| `/api/admin/*` | Admin operations |

See `backend/src/routers/` for detailed route definitions.

## Testing

Run tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Test coverage:

```bash
npm run test:coverage
```

See `backend/TESTING.md` for more details.
