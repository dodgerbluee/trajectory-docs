---
sidebar_position: 3
---

# Data & App Security

## Data Protection

**At Rest:**
- Database encryption depends on your PostgreSQL configuration
- File uploads stored in Docker volumes (encryption depends on host filesystem)
- No built-in encryption at rest (relies on your infrastructure security)

**In Transit:**
- API uses HTTPS when behind a reverse proxy (required for production)
- Application does not terminate TLS directly
- Must configure reverse proxy for SSL/TLS

**In Logs:**
- Production mode (`NODE_ENV=production`) does not log request bodies
- Sensitive data (passwords, tokens) not logged
- Error messages sanitized in production

## Application Security

### CSRF Protection

Trajectory uses **JWT tokens in Authorization headers**, not cookies:
- State-changing APIs require JWT in `Authorization: Bearer <token>` header
- No cookie-based sessions, so traditional CSRF doesn't apply
- CORS should be configured appropriately for your domain

### XSS Prevention

**Frontend (React):**
- React escapes text by default
- Avoid `dangerouslySetInnerHTML` for user content
- Sanitize any HTML if needed with a library like DOMPurify

**Backend:**
- Input validation on all endpoints
- Output encoding for any dynamic content
- Content Security Policy headers recommended

### SQL Injection Prevention

- All database queries use **parameterized queries**
- No string concatenation for SQL
- ORM/query builder patterns used throughout

### File Upload Security

**Restrictions:**
- File size limits enforced
- File type validation (MIME type checking)
- Uploaded files stored outside web root
- No direct execution of uploaded files

**Configuration:**
```javascript
// Example file upload limits
{
  maxFileSize: 10 * 1024 * 1024, // 10MB
  allowedMimeTypes: ['image/jpeg', 'image/png', 'application/pdf']
}
```

