# Frequently Asked Questions

## General Questions

### What is Trajectory?

Trajectory is a comprehensive family health tracking application designed to help you manage and monitor your family's health information in one secure place.

### Is Trajectory free to use?

Yes, Trajectory is free and open-source software. You can self-host it on your own infrastructure.

### What data does Trajectory store?

Trajectory stores all your family's health data locally on your server. You have complete control over your data.

## Getting Started

### How do I install Trajectory?

Please refer to the [Quick Start Guide](./quick-start.md) for detailed installation instructions.

### What are the system requirements?

- Docker and Docker Compose
- At least 1GB of RAM
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Can I use Trajectory on mobile devices?

Yes! Trajectory is responsive and works on mobile browsers. There is currently no native mobile app.

## Usage

### How do I add a family member?

See the [Managing Children](./user-guide/managing-children.md) guide for step-by-step instructions.

### Can I track multiple children?

Yes, Trajectory supports tracking unlimited family members.

### How do I backup my data?

Refer to the [Operations Guide](./operations.md) for backup and restore procedures.

### Can I export my data?

Currently, data export is done through database backups. Future versions may include CSV/PDF export features.

## Security & Privacy

### Is my data secure?

Yes. See our [Security Guide](./security.md) for details on security measures and best practices.

### Who can access my data?

Only users you create on your instance can access the data. When self-hosted, you have complete control.

### Is data encrypted?

Passwords are hashed using bcrypt. We recommend using HTTPS/SSL for data in transit. Database encryption can be configured separately.

## Technical Issues

### The application won't start

Check the [Troubleshooting Guide](./troubleshooting.md) for common startup issues.

### I forgot my password

Use the admin scripts in the backend to reset passwords. See [Operations Guide](./operations.md).

### How do I update Trajectory?

Pull the latest Docker images and restart your containers. See [Deployment Guide](./deployment.md).

## Support

### Where can I get help?

- Review this FAQ
- Check the [Troubleshooting Guide](./troubleshooting.md)
- Open an issue on [GitHub](https://github.com/dodgerbluee/trajectory/issues)

### How can I contribute?

We welcome contributions! Please check the [Development Guide](./development.md) to get started.

### I found a bug, what should I do?

Please open an issue on our [GitHub repository](https://github.com/dodgerbluee/trajectory/issues) with:
- Description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Your environment (browser, OS, Trajectory version)
