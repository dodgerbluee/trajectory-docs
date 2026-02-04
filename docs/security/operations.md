---
sidebar_position: 6
---

# Operations

## Token Management

### Access Tokens

- **Short-lived** (15 minutes)
- Sent in Authorization header
- Contains user ID, family IDs, role
- Cannot be revoked (rely on short expiration)

### Refresh Tokens

- **Longer-lived** (7 days)
- Used to obtain new access tokens
- Stored in database (can be revoked)
- Rotated on each use

### Best Practices for Clients

1. **Store tokens securely:**
   - In-memory storage (most secure, but lost on refresh)
   - localStorage (persistent, but vulnerable to XSS)
   - Consider using httpOnly cookies with proper configuration

2. **Handle token expiration:**
   - Implement automatic refresh
   - Redirect to login when refresh fails

3. **Never expose tokens:**
   - Don't log tokens
   - Don't include in URLs
   - Don't send over non-HTTPS connections

## Security Updates

### Staying Informed

1. **Watch the repository** for security announcements
2. **Subscribe to releases** on GitHub
3. **Check CHANGELOG** before updating
4. **Test updates** in a staging environment

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Docker Security Best Practices](https://docs.docker.com/engine/security/)
- [PostgreSQL Security](https://www.postgresql.org/docs/current/security.html)
- [JWT Best Practices](https://tools.ietf.org/html/rfc8725)
