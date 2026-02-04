---
sidebar_position: 4
---

# Frontend

## Setup

1. **Navigate to frontend directory:**

```bash
cd frontend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create environment file (optional):**

```bash
# .env.local
VITE_API_URL=http://localhost:5017
```

By default, Vite proxy forwards `/api` requests to `http://localhost:5017`.

## Development Server

```bash
npm run dev
```

Opens at `http://localhost:5017` with hot reload.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
frontend/src/
├── app/              # Main app components
├── features/         # Feature modules (children, visits, etc.)
├── shared/           # Shared components and utilities
├── contexts/         # React contexts (Auth, Config, etc.)
├── test/             # Test utilities
├── App.tsx           # Root component
└── main.tsx          # Entry point
```

## Key Technologies

- **React 18** - UI framework
- **React Router** - Navigation
- **Recharts** - Growth charts and visualizations
- **Tailwind CSS** - Styling (via custom CSS)
- **Vite** - Build tool and dev server

## API Integration

The frontend uses `fetch` API with context-based authentication:

```typescript
// Example API call
const response = await fetch('/api/children', {
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
});
```

See `frontend/src/contexts/AuthContext.tsx` for authentication handling.
