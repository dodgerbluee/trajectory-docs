---
sidebar_position: 3
title: Security Overview
sidebar_label: Overview
---

# Security

Trajectory implements multiple security measures to protect your family's health data. This section is split into focused topics to make it easier to find the right guidance.

## What Trajectory Does NOT Do

For transparency, Trajectory does not currently provide:

- ❌ Encryption at rest (depends on your infrastructure)
- ❌ Two-factor authentication (planned)
- ❌ Audit logging (planned)
- ❌ Automated security scanning
- ❌ Built-in WAF (Web Application Firewall)
- ❌ Rate limiting on all endpoints (only auth endpoints)

Consider implementing these at the infrastructure level if needed for your security requirements.

## Reporting Vulnerabilities

If you discover a security vulnerability:

1. **Do NOT open a public issue**
2. **Contact maintainers privately** (see [SECURITY.md](https://github.com/dodgerbluee/trajectory/blob/main/docs/SECURITY.md))
3. **Provide details:**
	- Description of the vulnerability
	- Steps to reproduce
	- Potential impact
	- Suggested fix (if any)

## Security Checklist

Use this checklist for production deployments:

- [ ] Strong, unique `JWT_SECRET` and `JWT_REFRESH_SECRET`
- [ ] Strong `DB_PASSWORD`
- [ ] `NODE_ENV=production` set
- [ ] HTTPS enabled via reverse proxy
- [ ] HSTS header configured
- [ ] Security headers configured (X-Frame-Options, etc.)
- [ ] Firewall configured to only expose necessary ports
- [ ] Database not exposed externally
- [ ] Regular automated backups configured
- [ ] Backup restoration tested
- [ ] Monitoring and logging in place
- [ ] Server and Docker kept up to date
- [ ] Access restricted to authorized users only
