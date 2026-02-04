---
sidebar_position: 8
title: Family & User Management
---

# Family & User Management

Invite family members and control access to your children’s records.

## Invite Family Members

1. Go to **Family Settings**
2. Click **Invite Family Member**
3. Choose access level and send

### Screenshot Placeholder: Invite
<!-- ![Invite](./screenshots/invite-family-member.png) -->
*Invite a family member*

## Roles

- **Family Member**: full access
- **Read-Only**: view only
- **Admin**: system management

## Access Control

Use **Family Settings** to change roles or remove members. Use child settings to restrict per‑child access when needed.

## Profile Settings

Update your username, email, password, and measurement units in **Profile**.

---

## Leaving a Family

If you need to leave a family you were invited to.

### Steps to Leave

1. Go to **Family Settings**
2. Click **Leave Family**
3. Confirm you want to leave
4. Your access will be immediately revoked

:::warning Cannot Undo
Leaving a family removes your access. You'll need to be re-invited to regain access.
:::

---

## Creating Multiple Families

Some users may need to manage multiple families (e.g., blended families, foster care).

### Multiple Family Support

Currently, Trajectory uses a single-family model per instance. To manage multiple separate families:

1. **Option 1:** All children in one family with access control
   - Add all children to the same family
   - Use per-child access control to limit visibility
   
2. **Option 2:** Separate Trajectory instances
   - Host multiple Trajectory instances
   - Each with its own family/user set
   - Requires separate infrastructure

:::info Future Feature
Multi-family support within a single instance is planned for a future release. See the [roadmap](../blog/2026-02-04-welcome.md).
:::

---

## Roles and Permissions Summary

### Family Member (Full Access)
- ✅ View all children (or assigned children)
- ✅ Add and edit visits, measurements, illnesses
- ✅ Upload documents
- ✅ Add and remove children
- ✅ Invite other family members
- ✅ Manage child access control

### Read-Only
- ✅ View all children (or assigned children)
- ✅ View visits, measurements, illnesses
- ✅ View and download documents
- ❌ Cannot add or edit data
- ❌ Cannot invite family members
- ❌ Cannot manage settings

### Admin (System Administrator)
- ✅ All Family Member permissions
- ✅ Manage all users in the system
- ✅ System configuration
- ✅ Backup and maintenance
- ✅ Access all families (if needed for support)

---

## Privacy and Security

Protect your family's health data.

### Best Practices

✅ **Invite only trusted family** - Be selective about who you invite

✅ **Use strong passwords** - Require all family members to use strong passwords

✅ **Review activity regularly** - Check the activity log periodically

✅ **Remove inactive users** - Remove family members who no longer need access

✅ **Enable 2FA if available** - Use two-factor authentication when your admin enables it (future feature)

✅ **Use per-child access** - Limit access to only relevant children when needed

---

## Troubleshooting Access Issues

### Invitation Email Not Received

1. Check spam/junk folder
2. Verify email address was entered correctly
3. Have the inviter resend the invitation
4. Contact your system administrator

### Cannot Accept Invitation

1. Ensure you're using the correct email address
2. Try logging out and back in
3. Clear browser cache and cookies
4. Contact the person who invited you

### Lost Access to Family

1. Check if your account is still active
2. Contact a family member to verify your status
3. You may have been removed - ask to be re-invited
4. Contact your system administrator

---

## Next Steps

- 🎯 **[Start Adding Data](./first-time-setup.md)** - Get family members entering health records
- 👶 **[Assign Children](./managing-children.md)** - Use access control for specific children
- 📋 **[Collaborate on Records](./recording-visits.md)** - Share responsibility for tracking visits
- 🔒 **[Review Security Settings](../security/auth-access.md)** - Understand security best practices

---

## Need Help?

- Check the [Troubleshooting Guide](../troubleshooting.md)
- Review the [FAQ](../faq.md)
- Open an issue on [GitHub](https://github.com/dodgerbluee/trajectory/issues)
