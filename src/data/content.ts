export const STATS = [
  { value: '24/7', label: 'Market Monitoring' },
  { value: '1s', label: 'Execution Resolution' },
  { value: '3', label: 'Subscription Tiers' },
  { value: '100%', label: 'Algorithmic Execution' },
];

export const TIERS = [
  {
    name: 'Pulse',
    icon: '🔹',
    price: 'Entry Tier',
    target: 'Individual retail traders scaling up',
    featured: false,
    features: [
      'Live signal access',
      'Performance dashboard',
      'Second-resolution timing',
      'Email alerts',
      'Community access',
    ],
  },
  {
    name: 'Core',
    icon: '🔸',
    price: 'Professional Tier',
    target: 'Active traders managing $10K–$100K',
    featured: true,
    features: [
      'Full automation suite',
      'Portfolio integration',
      'Priority alerts',
      'Risk management module',
      'API access',
      'Monthly strategy reviews',
    ],
  },
  {
    name: 'Prime',
    icon: '🔺',
    price: 'Institutional Tier',
    target: 'Professional traders & fund operators',
    featured: false,
    features: [
      'Custom strategy configuration',
      'Direct strategy access',
      'Dedicated support line',
      'White-glove onboarding',
      'Full infrastructure access',
      'Real-time P&L reporting',
    ],
  },
];

export const HOW_IT_WORKS = [
  {
    title: 'Subscribe',
    description: 'Select your tier based on capital size and trading goals. No lock-in — upgrade or downgrade at any time.',
  },
  {
    title: 'Onboard',
    description: 'Connect your exchange account via API or receive a direct signal feed. Setup takes minutes, not days.',
  },
  {
    title: 'Execute',
    description: 'The system monitors markets at the second level 24/7. Positions are entered, sized, and managed automatically.',
  },
  {
    title: 'Scale',
    description: 'Review your live performance data, adjust your tier as capital grows, and compound disciplined returns.',
  },
];
