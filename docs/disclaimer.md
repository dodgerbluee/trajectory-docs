---
sidebar_position: 8
---

# Disclaimer & Requirements

This page contains important legal and technical information about using Trajectory.

## Important Boundaries

:::warning NOT MEDICAL ADVICE
Trajectory is a **record-keeping tool only**. It does not provide medical advice, diagnosis, or treatment. Always rely on qualified healthcare providers for medical decisions.
:::

### Key Limitations

- **Self-hosted only** - You install and run the app. There is no hosted service.
- **No telemetry** - The software does not collect or report usage data.
- **Your responsibility** - As the self-hosted operator, you are the data controller responsible for complying with applicable laws (COPPA, GDPR, etc.).

## Requirements

Before you begin, ensure you have:

- **Docker** and **Docker Compose** installed
- A server or machine to host the application
- Basic knowledge of Docker and command line
- (Recommended) A reverse proxy for HTTPS (Nginx, Caddy, Nginx Proxy Manager)

## Legal Considerations

As a self-hosted application operator, you are responsible for:

### Data Privacy Compliance

- **COPPA** (Children's Online Privacy Protection Act) - If applicable in your jurisdiction
- **GDPR** (General Data Protection Regulation) - If you have users in the EU
- **HIPAA** - Not applicable unless you are a covered entity
- Local data protection laws in your country/region

### User Responsibilities

- Securing your server and database
- Regular backups of your data
- Keeping the software updated with security patches
- Proper access controls and authentication
- Safe disposal of data when no longer needed

## Warranty Disclaimer

Trajectory is provided "as is" without warranty of any kind, either expressed or implied. The developers and contributors:

- Make no guarantees about the fitness for any particular purpose
- Are not liable for any damages arising from use of the software
- Do not provide medical, legal, or compliance advice

See the [LICENSE](https://github.com/dodgerbluee/trajectory/blob/main/LICENSE) file for complete terms.

## Support & Community

While we cannot provide legal or medical advice, we welcome:

- Bug reports and feature requests on GitHub Issues
- Community discussions and contributions
- Documentation improvements
- Code contributions via pull requests

For technical support, please use the GitHub repository's issue tracker.
