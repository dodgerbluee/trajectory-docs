---
sidebar_position: 2
---

# Quick Start

Get Trajectory up and running in minutes using Docker Compose.

## Prerequisites

Before you begin, ensure you have:

- **Docker** and **Docker Compose** installed
- A server or machine to host the application
- Basic knowledge of Docker and command line
- (Recommended) A reverse proxy for HTTPS (Nginx, Caddy, Nginx Proxy Manager)

## Installation Steps

### 1. Download Configuration Files

Download the production Docker Compose file and environment template:

- [`example/docker-compose.prod.yml`](https://github.com/dodgerbluee/trajectory/blob/main/example/docker-compose.prod.yml)
- [`example/.env.prod.example`](https://github.com/dodgerbluee/trajectory/blob/main/example/.env.prod.example)

```bash
# Create a directory for Trajectory
mkdir trajectory && cd trajectory

# Download docker-compose.prod.yml
curl -O https://raw.githubusercontent.com/dodgerbluee/trajectory/main/example/docker-compose.prod.yml

# Download .env.prod.example
curl -O https://raw.githubusercontent.com/dodgerbluee/trajectory/main/example/.env.prod.example
```

Before starting, update the local volume paths in `docker-compose.prod.yml` to match your host filesystem. These paths should exist and be writable on your server. The first block is for the `trajectory` app container, and the second block is for the `trajectory-db` database container:

```yaml
services:
	trajectory:
		volumes:
			- /docker/trajectory/uploads_data:/app/uploads
			- /docker/trajectory/avatars_data:/app/avatars
	trajectory-db:
		volumes:
			- /docker/trajectory/data:/var/lib/postgresql/data
```

### 2. Configure Environment

Copy the environment template:

```bash
cp .env.prod.example .env
```

Edit `.env` and set the following **required** values:

```bash
# Strong database password
DB_PASSWORD=your_secure_password_here

# JWT secrets (generate strong random strings)
JWT_SECRET=your_jwt_secret_here
JWT_REFRESH_SECRET=your_jwt_refresh_secret_here

# Your app image (e.g., from GitHub Container Registry)
IMAGE=ghcr.io/dodgerbluee/trajectory:latest
```

:::danger Security Warning
**NEVER use placeholder or example secrets in production.** The application will not start in production mode with default/placeholder secrets. Generate strong, unique secrets for each deployment.
:::

### 3. Start the Application

```bash
docker-compose -f docker-compose.prod.yml up -d
```

This will start:
- PostgreSQL database
- Backend API server
- Frontend web application

### 4. Access the Application

1. Put the app behind HTTPS using a reverse proxy (see [Security → Deployment](./security/deployment.md))
2. Open your browser to your domain
3. Register the first user (this becomes the admin)
4. Start adding children and tracking health data!

### 5. Stop the Application

When needed, you can stop Trajectory with:

```bash
docker-compose -f docker-compose.prod.yml down
```

## Next Steps

Now that you have Trajectory running:

- 📖 Read the [Operations Guide](./operations.md) for production backups and updates
- 🔐 Review the [Security](./security.md) guide for best practices
- 🛠️ Check out the [Development](./development.md) guide if you want to contribute

## Getting Help

- Check the [Troubleshooting](./troubleshooting.md) guide for common issues
- Review existing [GitHub Issues](https://github.com/dodgerbluee/trajectory/issues)
- Open a new issue if you encounter a bug
