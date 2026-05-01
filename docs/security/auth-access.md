---
sidebar_position: 2
---

# Auth & Access

## Authentication

**Password Security:**
- Passwords hashed with **bcrypt** (industry-standard hashing algorithm)
- Configurable salt rounds (default: 10)
- No password requirements enforced by default (you control your own policies)

**Session Management:**
- JWT-based authentication with access and refresh tokens
- Access tokens: Short-lived (15 minutes default)
- Refresh tokens: Longer-lived (7 days default)
- Tokens sent via `Authorization` header (Bearer scheme)
- No cookie-based sessions (eliminates traditional CSRF risks)

**Brute Force Protection:**
- Rate limiting on login endpoints
- Account lockout after failed attempts
- Rate limiting on password reset

## Authorization

**Family-Based Access Control:**
- All data scoped by family
- Users can only access data for families they belong to
- Children belong to a single family
- Family membership required to view any person's data

**Admin Controls:**
- First registered user has admin privileges
- Admins can manage families and users
- Admin-only endpoints protected by role checks
