export interface Solution {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  bestFor: string;
  cta: string;
  icon: string;
  steps?: { title: string; desc: string }[];
}

export const solutions: Solution[] = [
  {
    id: 'revenue-intelligence',
    name: 'Revenue Intelligence',
    price: '[Book Meeting for Pricing] per project',
    description: 'Build a focused market-entry and prospecting foundation before launching outreach.',
    features: [
      'ICP development and market-entry analysis',
      'Buyer persona mapping with decision-making roles',
      'Up to 300 verified contacts per target country',
      'Revenue opportunity report with priority recommendations'
    ],
    bestFor: 'Companies that need to define their target market, buyer personas, and prospecting strategy before investing in outreach.',
    cta: 'Start Revenue Intelligence',
    icon: 'target',
    steps: [
      { title: 'Discover', desc: 'We analyze your business goals, market, product, and sales cycle.' },
      { title: 'Identify', desc: 'We define target industries, company criteria, and decision-making roles.' },
      { title: 'Deliver', desc: 'You receive a complete ICP, buyer personas, verified contacts, and a revenue opportunity report.' }
    ]
  },
  {
    id: 'pipeline-builder',
    name: 'Pipeline Builder',
    price: 'USD x,xxx per month',
    description: 'Turn approved buyer personas and target accounts into qualified sales conversations.',
    features: [
      'HubSpot CRM setup and configuration',
      'AI-assisted prospecting and personalization',
      'Human SDR follow-up via email and phone',
      'Weekly reporting and activity dashboard'
    ],
    bestFor: 'Companies with defined target markets that need consistent, professional outreach and qualified meetings.',
    cta: 'Build My Pipeline',
    icon: 'pipeline',
    steps: [
      { title: 'Setup', desc: 'We configure HubSpot CRM with your contacts, workflows, and tracking.' },
      { title: 'Engage', desc: 'AI-assisted personalization and human SDR outreach across agreed channels.' },
      { title: 'Qualify', desc: 'Prospects are classified by interest, need, timing, and meeting potential.' },
      { title: 'Report', desc: 'Weekly reports on activity, conversations, meetings, and next actions.' }
    ]
  },
  {
    id: 'revenue-engine',
    name: 'Revenue Engine',
    price: 'USD x,xxx per month',
    description: 'Build and manage an integrated system connecting prospecting, HubSpot, SDR activity, pipeline management, and revenue reporting.',
    features: [
      'Everything in Pipeline Builder',
      'Workflow automation and process design',
      'Pipeline design and management',
      'Revenue forecasting and performance insights'
    ],
    bestFor: 'Companies ready to build a complete, measurable revenue system with pipeline visibility and forecasting.',
    cta: 'Build My Revenue Engine',
    icon: 'engine',
    steps: [
      { title: 'Build', desc: 'We create the full revenue system — CRM, workflows, pipeline stages, and reporting.' },
      { title: 'Operate', desc: 'Our team manages prospecting, SDR outreach, qualification, and pipeline tracking.' },
      { title: 'Optimize', desc: 'Continuous improvement based on conversion data, pipeline movement, and feedback.' },
      { title: 'Report', desc: 'Executive-level reporting on pipeline health, forecasts, and revenue progress.' }
    ]
  },
  {
    id: 'ai-sales-transformation',
    name: 'AI Sales Transformation',
    price: '[Book Meeting for Pricing] per project',
    description: 'Transform manual sales activities into AI-assisted, measurable, and scalable workflows.',
    features: [
      'AI readiness assessment and roadmap',
      'HubSpot AI setup and configuration',
      'AI sales playbook development',
      'Sales team training and onboarding'
    ],
    bestFor: 'Companies wanting to modernize their sales process with AI tools, automation, and data-driven decision making.',
    cta: 'Transform My Sales Team',
    icon: 'ai',
    steps: [
      { title: 'Assess', desc: 'We evaluate your current sales process, tools, and AI readiness.' },
      { title: 'Design', desc: 'We create an AI transformation roadmap and playbook tailored to your team.' },
      { title: 'Implement', desc: 'We configure AI tools, workflows, and automation in HubSpot.' },
      { title: 'Train', desc: 'Your team is trained on AI-assisted selling practices and tools.' }
    ]
  },
  {
    id: 'fractional-revenue-office',
    name: 'Fractional Revenue Office',
    price: 'USD x,xxx–xx,xxx per month',
    description: 'Add experienced revenue leadership, RevOps support, SDR management, and executive reporting.',
    features: [
      'Revenue strategy and planning',
      'SDR team management and coaching',
      'Quarterly growth planning and review',
      'Executive reporting and board-ready insights'
    ],
    bestFor: 'Companies that need senior revenue leadership and strategic guidance without a full-time executive hire.',
    cta: 'Talk to a Revenue Advisor',
    icon: 'office',
    steps: [
      { title: 'Strategize', desc: 'We develop a revenue growth strategy aligned with your business objectives.' },
      { title: 'Lead', desc: 'Our fractional leaders manage SDR teams, processes, and pipeline.' },
      { title: 'Scale', desc: 'Quarterly planning and optimization to drive sustainable growth.' },
      { title: 'Report', desc: 'Board-ready reporting on revenue performance, pipeline, and forecasts.' }
    ]
  }
];

export interface Industry {
  id: string;
  name: string;
  description: string;
  personas: string[];
  icon: string;
}

export const industries: Industry[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Connect with plant leadership, operations teams, procurement decision-makers, supply-chain leaders, and general management.',
    personas: ['Plant Director', 'Operations Manager', 'Procurement Head', 'Supply Chain Manager', 'General Manager'],
    icon: 'manufacturing'
  },
  {
    id: 'saas-technology',
    name: 'SaaS and Technology',
    description: 'Reach founders and leaders responsible for growth, sales, operations, technology, and revenue.',
    personas: ['CEO or Founder', 'COO or CTO', 'Head of Sales', 'Head of Marketing', 'RevOps or Head of Growth'],
    icon: 'saas'
  },
  {
    id: 'banking-finance',
    name: 'Banking and Financial Services',
    description: 'Identify senior stakeholders involved in digital transformation, technology, risk, procurement, and strategic partnerships.',
    personas: ['IT Director', 'Digital Banking Head', 'Risk Director', 'Procurement Head', 'Partnership Director'],
    icon: 'banking'
  },
  {
    id: 'bpo-services',
    name: 'BPO and Business Services',
    description: 'Reach leadership responsible for operations, human resources, shared services, customer experience, and client delivery.',
    personas: ['COO', 'HR Director', 'Shared Services Head', 'Customer Experience Head', 'Client Delivery Head'],
    icon: 'bpo'
  },
  {
    id: 'professional-services',
    name: 'Professional Services and Consulting',
    description: 'Connect with partners and commercial leaders responsible for business development, client acquisition, and strategic growth.',
    personas: ['Managing Partner', 'Director', 'Business Development Head', 'Engagement Manager', 'Client Partner'],
    icon: 'consulting'
  }
];

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  output: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Discover',
    description: 'We begin with your business goals, market, product, sales cycle, ideal customer profile, and current revenue challenges.',
    output: 'Revenue discovery brief'
  },
  {
    number: 2,
    title: 'Identify',
    description: 'We define target industries, company criteria, decision-making roles, buyer pain points, and priority territories.',
    output: 'Approved ICP and buyer persona'
  },
  {
    number: 3,
    title: 'Research',
    description: 'Our team uses HubSpot-supported prospecting workflows to identify relevant target accounts and contacts.',
    output: 'Proposed prospect list'
  },
  {
    number: 4,
    title: 'Validate',
    description: 'You review the target list, provide feedback, and approve the accounts and buyer personas before execution.',
    output: 'Approved campaign database'
  },
  {
    number: 5,
    title: 'Build the System',
    description: 'Contacts are structured in HubSpot with lifecycle stages, lead statuses, properties, tags, scoring criteria, and follow-up workflows.',
    output: 'Campaign-ready CRM'
  },
  {
    number: 6,
    title: 'Engage',
    description: 'AI-assisted personalization and human SDR outreach are used across the agreed channels.',
    output: 'Active sales conversations'
  },
  {
    number: 7,
    title: 'Qualify',
    description: 'Prospects are classified according to contact validity, interest, need, timing, and meeting potential.',
    output: 'Qualified leads and meeting opportunities'
  },
  {
    number: 8,
    title: 'Grow',
    description: 'We monitor meetings, opportunities, pipeline movement, conversion performance, and recommended next actions.',
    output: 'A measurable and continuously improving revenue pipeline'
  }
];

export interface Country {
  name: string;
  flagAccent: string;
  personas: string[];
}

export const countries: Country[] = [
  {
    name: 'Indonesia',
    flagAccent: 'flag-accent-indonesia',
    personas: ['President Director', 'Operations Director', 'IT Director', 'Procurement Head', 'Business Development Manager']
  },
  {
    name: 'Malaysia',
    flagAccent: 'flag-accent-malaysia',
    personas: ['Managing Director', 'Head of Operations', 'CTO', 'Supply Chain Director', 'Sales Director']
  },
  {
    name: 'Singapore',
    flagAccent: 'flag-accent-singapore',
    personas: ['CEO', 'VP of Sales', 'Head of Digital', 'Procurement Director', 'Partnership Lead']
  },
  {
    name: 'Australia',
    flagAccent: 'flag-accent-australia',
    personas: ['General Manager', 'Head of Growth', 'COO', 'IT Manager', 'Commercial Director']
  },
  {
    name: 'Europe',
    flagAccent: 'flag-accent-europe',
    personas: ['Country Manager', 'Head of Sales', 'Procurement Lead', 'Operations Head', 'Digital Transformation Lead']
  },
  {
    name: 'United States',
    flagAccent: 'flag-accent-usa',
    personas: ['VP of Sales', 'Director of Operations', 'Head of Revenue', 'CIO', 'Business Development VP']
  },
  {
    name: 'Middle East',
    flagAccent: 'flag-accent-middle-east',
    personas: ['Country Director', 'Operations Head', 'IT Director', 'Procurement Manager', 'Partnership Director']
  }
];

export const whyMyelektra = [
  {
    title: 'AI and Human Expertise',
    description: 'Technology improves speed and insight. Human judgment protects relevance, communication quality, and professional relationships.',
    icon: 'brain'
  },
  {
    title: 'HubSpot-Centered Execution',
    description: 'Prospecting, qualification, follow-up, lead status, pipeline activities, and reporting are organized around a structured CRM system.',
    icon: 'hubspot'
  },
  {
    title: 'Quality Before Quantity',
    description: 'We focus on buyer-persona fit and useful business conversations—not mass contact collection.',
    icon: 'quality'
  },
  {
    title: 'Transparent Reporting',
    description: 'Clients receive clear visibility into campaign activity, lead categories, engagement, meetings, and next actions.',
    icon: 'report'
  },
  {
    title: 'Regional Market Understanding',
    description: 'Based in Jakarta, Myelektra supports B2B growth across Indonesia, Southeast Asia, Australia, and selected global markets.',
    icon: 'globe'
  },
  {
    title: 'Revenue-Focused Strategy',
    description: 'Every service is designed to improve the path from target account to conversation, meeting, opportunity, and revenue.',
    icon: 'revenue'
  }
];

export const academyTopics = [
  'Building an Ideal Customer Profile (ICP)',
  'Buyer Persona Development for B2B',
  'AI-Assisted Prospecting Workflows',
  'HubSpot CRM Setup and Best Practices',
  'Email Outreach That Gets Replies',
  'SDR Fundamentals: From Call to Qualification',
  'Pipeline Management and Forecasting',
  'Revenue Operations (RevOps) Essentials',
  'Using AI for Sales Enablement',
  'Building a Repeatable Revenue System'
];

export const disclaimer = 'Meetings and revenue outcomes are not guaranteed. Results depend on market conditions, offer relevance, buyer readiness, domain reputation, and the client\'s sales process.';
