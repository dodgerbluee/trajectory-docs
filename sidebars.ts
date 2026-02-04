import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Main documentation sidebar
  tutorialSidebar: [
    'intro',
    'quick-start',
    'operations',
    'troubleshooting',
    'quick-reference',
    'support-the-project',
  ],
    userGuideSidebar: [
      'user-guide',
      'user-guide/first-time-setup',
      'user-guide/managing-children',
      'user-guide/recording-visits',
      'user-guide/tracking-growth',
      'user-guide/managing-illnesses',
      'user-guide/vaccinations-medical-events',
      'user-guide/documents-attachments',
      'user-guide/family-user-management',
    ],
  securitySidebar: [
    'security',
    'security/auth-access',
    'security/data-app',
    'security/deployment',
    'security/compliance',
    'security/operations',
  ],
  devSidebar: [
    'development',
    'dev/setup',
    'dev/backend',
    'dev/frontend',
    'dev/database',
    'dev/workflow',
    'architecture',
  ],
};

export default sidebars;
