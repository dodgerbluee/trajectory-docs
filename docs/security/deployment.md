---
sidebar_position: 4
---

# Deployment Security

## Environment Variables

Store secrets securely:

```bash
# NEVER commit these to version control
JWT_SECRET=your_secret_here
JWT_REFRESH_SECRET=your_refresh_secret_here
DB_PASSWORD=your_db_password_here
```

**Secret Generation:**

```bash
# Generate strong random secrets
openssl rand -base64 32
```

:::danger Production Secrets
The application **will not start** in production mode with placeholder or example secrets. You must set strong, unique secrets before deploying.
:::

## HTTPS Configuration

Always use HTTPS in production:

1. **Use a reverse proxy** (Nginx, Caddy, Nginx Proxy Manager)
2. **Enable SSL/TLS** with valid certificates (Let's Encrypt recommended)
3. **Force HTTPS** redirect from HTTP
4. **Enable HSTS** (HTTP Strict Transport Security)
