---
sidebar_position: 6
---

# Workflow

## Full Stack Development

### Run Everything

From the project root:

```bash
docker-compose up
```

This starts:
- PostgreSQL database (port 5018 external, 5432 internal)
- Backend API (port 5017)
- Frontend (served by backend on port 5017)

Access the app at `http://localhost:5017`.

### Root Scripts

| Command | Description |
|---------|-------------|
| `npm run install:all` | Install deps for backend, frontend, docs |
| `npm run build` | Build backend and frontend |
| `npm run lint` | Lint backend and frontend |

## Code Style

### Linting

Both backend and frontend use ESLint:

```bash
# Backend
cd backend && npm run lint

# Frontend
cd frontend && npm run lint

# Both (from root)
npm run lint
```

### TypeScript

- **Strict mode enabled**
- Type definitions in `types/` directories
- Avoid `any` when possible

### Formatting

Consider using Prettier (not currently configured):

```bash
npm install --save-dev prettier
```

## Contributing

### Workflow

1. **Fork the repository**
2. **Create a feature branch:**

```bash
git checkout -b feature/my-feature
```

3. **Make your changes**
4. **Test thoroughly:**

```bash
npm test          # Backend tests
npm run lint      # Linting
```

5. **Commit with clear messages:**

```bash
git commit -m "Add: Feature description"
```

6. **Push to your fork:**

```bash
git push origin feature/my-feature
```

7. **Open a Pull Request**

### Commit Message Format

Use conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Test additions or changes
- `chore:` Maintenance tasks

### Pull Request Guidelines

- Clear description of changes
- Reference related issues
- Include tests for new features
- Update documentation as needed
- Ensure CI passes

## Debugging

### Backend Debugging

**VS Code Launch Configuration:**

```json
{
  "type": "node",
  "request": "launch",
  "name": "Debug Backend",
  "runtimeExecutable": "npm",
  "runtimeArgs": ["run", "dev"],
  "cwd": "${workspaceFolder}/backend",
  "console": "integratedTerminal"
}
```

**Logs:**

```bash
# View backend logs
docker-compose logs -f backend

# View database logs
docker-compose logs -f database
```

### Frontend Debugging

- Use **React DevTools** browser extension
- Use browser developer tools
- Check network tab for API calls
- Check console for errors

## Common Tasks

### Reset Database

```bash
cd backend
npm run db:reset
```

### Rebuild Docker Images

```bash
docker-compose build --no-cache
```

### Clean Node Modules

```bash
# Backend
cd backend && rm -rf node_modules && npm install

# Frontend
cd frontend && rm -rf node_modules && npm install
```

### View Database

```bash
docker-compose exec database psql -U trajectory_user -d trajectory
```

Useful queries:

```sql
-- List all people
SELECT * FROM people;

-- Count visits
SELECT COUNT(*) FROM visits;

-- View migrations
SELECT * FROM migrations;
```

## Resources

- [Backend README](https://github.com/dodgerbluee/trajectory/blob/main/backend/README.md)
- [Frontend Docs](https://github.com/dodgerbluee/trajectory/tree/main/frontend/docs)
- [Testing Guide](https://github.com/dodgerbluee/trajectory/blob/main/backend/TESTING.md)
- [Project Structure](https://github.com/dodgerbluee/trajectory/blob/main/backend/src/STRUCTURE.md)
