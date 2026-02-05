---
sidebar_position: 1
title: First Time Setup
---

# First Time Setup

Welcome to Trajectory! This guide will help you register your instance admin account and get started tracking your family's health data.

## Before You Start

When you first deploy Trajectory, a **registration code** is generated and displayed in the server logs. This code is required to create the first user account and claim instance admin status.

:::info Instance Admin
The first user who registers becomes the **instance admin** and can manage other users, family memberships, and instance-wide settings. After the first user is created, the registration code is invalidated for security.
:::

---

## Step 1: Find Your Registration Code

When your Trajectory instance starts, check your server logs for the registration code:

```
🔐 FIRST USER REGISTRATION CODE
⚠️  [Your-Code-Here]
⚠️  This code is required to create the first user account.
⚠️  The code will be invalidated after the first user is created.
```

**Docker:** Run `docker compose logs` to view logs and find the code.

**Kubernetes/Manual:** Check your application logs for the code.

---

## Step 2: Create Your Admin Account

1. Go to your Trajectory URL (for example, `https://trajectory.yourdomain.com`)
2. Click **Sign Up**
3. Fill in your details:
   - **Email:** Your email address
   - **Username:** Your login username
   - **Password:** Create a strong password
4. **Paste your registration code** in the "Registration Code" field
5. Click **Create Account**

:::tip Strong Passwords
Use a strong, unique password for your admin account. This account has full access to your instance and all user data.
:::

You are now the **instance admin** and can manage your instance!

---

## Step 3: Add Your First Child

Now that you have your admin account, let's add your first child's profile.

1. Click **Add Child**
2. Enter the basics:
   - **Name:** Child's full name
   - **Date of Birth:** Their birthday
   - **Sex:** As recorded in medical records
3. Click **Save**

### Screenshot Placeholder: Add Child
<!-- ![Add Child](./screenshots/add-child-form.png) -->
*Add a child profile to start tracking their health data*

---

## Step 4: Configure Your Preferences

Before you start tracking, customize your settings:

1. Go to **Settings** (usually in the top menu or profile dropdown)
2. **Measurement Units:** Choose your preferred units (metric or imperial)
3. **Timezone:** Set your timezone for dates and times
4. **Other Preferences:** Customize as needed

---

## Start Tracking

Your child's dashboard shows recent visits, growth trends, and quick actions. You're all set!

---

## Next Steps

Now that you're set up, you're ready to start tracking health data:

- 📈 **[Add Your First Measurement](./tracking-growth.md#adding-measurements)** - Record height and weight
- 🏥 **[Record a Doctor's Visit](./recording-visits.md#wellness-checkups)** - Track a recent appointment
- 💉 **[Add Vaccination Records](./vaccinations-medical-events.md#adding-vaccinations)** - Keep immunizations up to date
- 📎 **[Upload Documents](./documents-attachments.md#uploading-files)** - Add medical records or test results
- 👥 **[Family User Management](./family-user-management.md)** - Invite other caregivers

## Admin Tasks

As an instance admin, you can:

- **Manage Users:** View all users and their activity
- **Manage Families:** Control family memberships
- **System Settings:** Configure instance-wide preferences
- **Backups:** Set up data backups and maintenance

See the [Operations Guide](../operations.md) for admin tasks.

---

## Need Help?

- Check the [Troubleshooting Guide](../troubleshooting.md)
- Review the [FAQ](../faq.md)
- Open an issue on [GitHub](https://github.com/dodgerbluee/trajectory/issues)
