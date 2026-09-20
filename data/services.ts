import type { Service } from './types';

export const services: Service[] = [
  {
    slug: 'seo',
    title: 'SEO',
    icon: 'search',
    short: 'Search visibility for the questions prospective learners are already asking.',
    highlight: 'Technical foundations, programme content and local discovery.',
    description:
      'Education search is intent-heavy. Families, students and professionals look for programmes, fees, campuses and outcomes. Our SEO work maps those questions to pages, then strengthens the technical and content foundations that help the right people find them.',
    problem:
      'Many education websites are hard to crawl, bury programme information, or publish content that does not match how people actually search. Local visibility for campuses is often overlooked.',
    solution:
      'We audit the site, research audience queries and build a content and technical plan that makes programmes, campuses and decision pages easier to find—without ranking guarantees.',
    deliverables: [
      'Technical SEO audit and recommended fixes',
      'Keyword and content strategy for programmes and campuses',
      'On-page structure for high-intent pages',
      'Local SEO for physical locations where relevant',
      'Measurement setup and monthly review notes',
    ],
    benefits: [
      'Clearer presence for relevant, high-intent searches',
      'Programme pages that are easier to discover',
      'A more useful content system for admissions teams',
      'A plan that can be maintained over time',
    ],
    process: [
      { step: 'Audit', detail: 'Review crawlability, analytics, page templates and content gaps.' },
      { step: 'Map', detail: 'Connect audience queries to existing and needed pages.' },
      { step: 'Implement', detail: 'Prioritise technical fixes and rewrite high-value pages.' },
      { step: 'Review', detail: 'Track visibility, refine content and expand where it is useful.' },
    ],
    faqs: [
      {
        question: 'How long does SEO take to show movement?',
        answer:
          'Visibility usually changes over weeks to months, depending on competition, current site quality and publishing cadence. We start with practical fixes while longer-term content work continues.',
      },
      {
        question: 'Do you guarantee rankings?',
        answer:
          'No. Rankings are influenced by many factors outside any agency’s control. We focus on relevance, technical quality and useful content rather than ranking promises.',
      },
    ],
    cta: 'Discuss search visibility',
  },
  {
    slug: 'social-advertising',
    title: 'Social Media Marketing & Advertising',
    icon: 'social',
    short: 'Channel strategy, useful content and paid social for education audiences.',
    highlight: 'Presence that supports real decisions, not empty activity.',
    description:
      'Social channels are where many prospective learners first encounter an institution. We plan channel roles, content systems and paid campaigns that support awareness, consideration and enquiry—without chasing vanity metrics.',
    problem:
      'Education brands often post without a plan, run ads without audience mapping, or create content that gets attention but does not help anyone take a useful next step.',
    solution:
      'We define who each channel is for, what it should say, and how paid and organic work together. Creative and media are then built around those roles.',
    deliverables: [
      'Channel strategy and content pillars',
      'Content calendars and campaign concepts',
      'Paid social planning and optimisation',
      'Creative direction for ads and organic posts',
    ],
    benefits: [
      'A more consistent presence across chosen platforms',
      'Campaigns tied to audience segments and offers',
      'Clearer connection between social activity and enquiries',
      'Reusable creative systems for the team',
    ],
    process: [
      { step: 'Listen', detail: 'Review current presence, audiences and competitor activity.' },
      { step: 'Plan', detail: 'Set channel roles, content pillars and campaign architecture.' },
      { step: 'Create', detail: 'Produce content, set up campaigns and prepare measurement.' },
      { step: 'Optimise', detail: 'Review performance and refine targeting, creative and cadence.' },
    ],
    faqs: [
      {
        question: 'Which platforms do you work with?',
        answer:
          'We typically work with Instagram, Facebook, LinkedIn, YouTube and X, choosing channels based on where the audience actually spends time.',
      },
      {
        question: 'Do you create content or only strategy?',
        answer:
          'Both are available. Some organisations need a plan and templates; others need ongoing creative and advertising support.',
      },
    ],
    cta: 'Plan social and paid presence',
  },
  {
    slug: 'google-ads',
    title: 'Google Ads / PPC',
    icon: 'ads',
    short: 'Paid search, display and video campaigns built around education intent.',
    highlight: 'Budget aimed at relevant searches and usable landing pages.',
    description:
      'Paid search can reach people at the moment they compare programmes. We structure campaigns around those queries, write ads that match intent, and send traffic to pages that can actually convert interest into an enquiry.',
    problem:
      'Education PPC often spends on broad keywords, mixes unrelated programmes in one ad group, or sends traffic to a slow homepage with competing calls to action.',
    solution:
      'We build tightly structured campaigns, pair ads with focused landing pages, and set up conversion tracking so spend can be reviewed honestly. We do not promise a fixed cost per lead or ROI.',
    deliverables: [
      'Search campaign architecture and copy',
      'Display and video campaign planning where useful',
      'Landing page alignment notes',
      'Conversion tracking and reporting',
    ],
    benefits: [
      'Spend directed toward more relevant queries',
      'Ads that match programme and campus intent',
      'Transparent reporting on what is being tested',
      'A process for cutting waste over time',
    ],
    process: [
      { step: 'Research', detail: 'Identify high-intent queries and map them to pages.' },
      { step: 'Build', detail: 'Set up campaigns, tracking and initial creative.' },
      { step: 'Launch', detail: 'Start with a controlled budget and collect real data.' },
      { step: 'Refine', detail: 'Pause waste, strengthen proven themes and iterate.' },
    ],
    faqs: [
      {
        question: 'What budget do we need?',
        answer:
          'Budgets vary by market and competition. We recommend a test period long enough to collect useful data, then adjust based on actual performance.',
      },
      {
        question: 'Who owns the ad account?',
        answer:
          'Campaigns should run in your Google Ads account so you keep ownership of data, billing and history.',
      },
    ],
    cta: 'Review paid search',
  },
  {
    slug: 'web-design',
    title: 'Website Design & Development',
    icon: 'web',
    short: 'Fast, credible education websites designed around the decision journey.',
    highlight: 'Trust, programme clarity and a usable enquiry path.',
    description:
      'An education website has to earn confidence, explain complex offers and work well on a phone. We design information architecture, visual systems and front-end builds that make programmes, campuses and next steps easy to find.',
    problem:
      'Many education sites look contemporary but hide programme information, fail accessibility checks, or treat mobile as an afterthought. Enquiry forms are often buried or confusing.',
    solution:
      'We map the journey from first visit to enquiry, then design and build a site that presents programmes clearly, loads quickly and remains maintainable for the team.',
    deliverables: [
      'Information architecture and UX',
      'Visual design for institutional sites',
      'Responsive front-end development',
      'Accessibility and performance reviews',
    ],
    benefits: [
      'A digital front door that feels considered',
      'Programme information that is easier to scan',
      'A mobile experience designed with intent',
      'A codebase that can grow with the organisation',
    ],
    process: [
      { step: 'Discover', detail: 'Understand audiences, audit the current site and map journeys.' },
      { step: 'Design', detail: 'Define structure, wireframes and visual language.' },
      { step: 'Build', detail: 'Develop, test and refine performance and accessibility.' },
      { step: 'Launch', detail: 'Deploy, verify tracking and hand over documentation.' },
    ],
    faqs: [
      {
        question: 'What technology do you use?',
        answer:
          'We choose based on editorial needs, performance and maintenance. Many education sites benefit from a modern Next.js front end with a CMS the team can actually use.',
      },
      {
        question: 'Can you rebuild an existing website?',
        answer:
          'Yes. We keep what still works, replace what creates friction, and plan redirects so existing search visibility is not thrown away.',
      },
    ],
    cta: 'Plan a website project',
  },
  {
    slug: 'video',
    title: 'Video Ad Production',
    icon: 'video',
    short: 'Short-form and campaign video made for how people actually watch.',
    highlight: 'Purpose, platform cuts and a plan for use.',
    description:
      'Video can explain a campus, a faculty or a course quickly—if it is written for attention and cut for the platform. We produce short promotional and campaign films with a clear job and a distribution plan.',
    problem:
      'Education video is often too long, too generic, or produced without a plan for where it will run. Budget goes into a single film that is hard to reuse.',
    solution:
      'We brief around a single purpose, write for the platform, and deliver cuts that can live in ads, landing pages and organic posts.',
    deliverables: [
      'Concepts and scripts',
      'Production or edit from existing footage',
      'Motion graphics where needed',
      'Platform-specific cuts',
    ],
    benefits: [
      'Films designed for specific decision stages',
      'Formats that match the destination platform',
      'A library of reusable cuts',
      'Creative tied to campaign goals',
    ],
    process: [
      { step: 'Brief', detail: 'Define audience, objective and where the film will run.' },
      { step: 'Concept', detail: 'Write scripts and visual direction.' },
      { step: 'Produce', detail: 'Shoot, animate or edit for clarity.' },
      { step: 'Deliver', detail: 'Export platform cuts and usage notes.' },
    ],
    faqs: [
      {
        question: 'Do you handle filming?',
        answer:
          'We can manage production or edit existing footage, depending on the brief and location.',
      },
      {
        question: 'What lengths do you produce?',
        answer:
          'Length follows the platform and job—from very short ad cuts to slightly longer explainer pieces. We do not default to a single duration.',
      },
    ],
    cta: 'Brief a video',
  },
  {
    slug: 'creative',
    title: 'Creative Designing',
    icon: 'creative',
    short: 'Campaign visual systems that make every message easier to recognise.',
    highlight: 'One language across ads, social and campus communications.',
    description:
      'Education brands become easier to trust when they look like the same organisation everywhere. We build campaign creative, templates and asset libraries that keep admissions, events and paid media visually connected.',
    problem:
      'Social posts, ads, print and web pages often look unrelated. The brand becomes harder to recognise, and teams spend time reinventing layouts.',
    solution:
      'We define a visual system—type, colour, layout and templates—then produce the first campaign set so the team can continue without starting over.',
    deliverables: [
      'Campaign visual systems',
      'Social and display templates',
      'Digital banners and key visuals',
      'Asset libraries and usage notes',
    ],
    benefits: [
      'A more recognisable presence across channels',
      'Faster production of day-to-day materials',
      'Templates the internal team can use',
      'Creative that supports, rather than fights, the website',
    ],
    process: [
      { step: 'Audit', detail: 'Review existing materials and where they diverge.' },
      { step: 'Define', detail: 'Set visual rules that can scale across formats.' },
      { step: 'Create', detail: 'Produce core assets and templates.' },
      { step: 'Handover', detail: 'Deliver files and a short usage guide.' },
    ],
    faqs: [
      {
        question: 'Can you work with an existing brand?',
        answer:
          'Yes. We can extend a current identity or define a campaign language that sits beside it.',
      },
      {
        question: 'Do you supply templates?',
        answer:
          'Yes. Editable templates are part of most creative systems so the team can keep producing consistently.',
      },
    ],
    cta: 'Build a creative system',
  },
  {
    slug: 'automation',
    title: 'Lead Automation & Nurturing',
    icon: 'automation',
    short: 'Capture, organise and follow up enquiries with clearer workflows.',
    highlight: 'Fewer lost forms, faster responses, more useful sequences.',
    description:
      'Education enquiries arrive from websites, ads, WhatsApp and events. We map that journey, then design forms, routing and follow-up sequences so interest is acknowledged promptly and handed to the right person.',
    problem:
      'Leads sit in inboxes, responses vary by staff member, and there is little visibility after the first form fill. Generic automation can also feel impersonal.',
    solution:
      'We design practical workflows—capture, routing, reminders and nurture—matched to how the admissions or counselling team actually works. We do not claim guaranteed enrolment numbers.',
    deliverables: [
      'Lead capture and form strategy',
      'Follow-up email or message flows',
      'Nurture sequence design',
      'CRM integration planning',
    ],
    benefits: [
      'Faster acknowledgement of enquiries',
      'Fewer leads lost between channels',
      'Follow-up that matches the decision stage',
      'A clearer view of the pipeline',
    ],
    process: [
      { step: 'Map', detail: 'Document sources, hand-offs and drop-off points.' },
      { step: 'Design', detail: 'Define triggers, owners and message sequences.' },
      { step: 'Build', detail: 'Set up forms, automation and CRM connections.' },
      { step: 'Refine', detail: 'Review response times and conversion between stages.' },
    ],
    faqs: [
      {
        question: 'Which CRM tools do you work with?',
        answer:
          'We plan around the tools the team already uses where possible, including common platforms such as HubSpot, Zoho and Salesforce. The choice should fit operations, not the other way around.',
      },
      {
        question: 'Is this only email?',
        answer:
          'No. Workflows may include email, WhatsApp, SMS or internal notifications, depending on the audience and what the team can maintain.',
      },
    ],
    cta: 'Improve enquiry follow-up',
  },
  {
    slug: 'landing-pages',
    title: 'Landing Page Design',
    icon: 'landing',
    short: 'Focused campaign pages with one job: help the visitor take the next step.',
    highlight: 'Speed, hierarchy and a single clear action.',
    description:
      'Campaign traffic should not land on a cluttered homepage. We design landing pages that match the ad or search query, load quickly and make the next step obvious—apply, enquire, download or book a visit.',
    problem:
      'Paid traffic often arrives on slow, generic pages with competing messages. Bounce rates rise and the campaign cannot be judged fairly.',
    solution:
      'We write and design a page around one offer, one audience and one action, then set up tracking so the campaign can be improved.',
    deliverables: [
      'Campaign landing page design and build',
      'Mobile-first layouts and form design',
      'Copy aligned to the traffic source',
      'Analytics-ready event setup',
    ],
    benefits: [
      'A clearer path from click to enquiry',
      'Pages that load quickly on mobile',
      'Easier testing of offers and copy',
      'Less wasted campaign traffic',
    ],
    process: [
      { step: 'Brief', detail: 'Confirm audience, offer and desired action.' },
      { step: 'Design', detail: 'Compose hierarchy, copy and form.' },
      { step: 'Build', detail: 'Develop a fast, accessible page with tracking.' },
      { step: 'Improve', detail: 'Review behaviour and refine the page over time.' },
    ],
    faqs: [
      {
        question: 'Can pages be campaign-specific?',
        answer:
          'Yes. Each page should match a specific campaign, programme or campus rather than a generic template.',
      },
      {
        question: 'Can forms connect to our CRM?',
        answer:
          'Yes, when the CRM and permissions are available. Until a provider is connected, we design the form so it is ready to integrate.',
      },
    ],
    cta: 'Design a campaign page',
  },
  {
    slug: 'pr',
    title: 'PR & Digital Brand Visibility',
    icon: 'pr',
    short: 'Thoughtful communication that makes an education brand easier to trust.',
    highlight: 'Authority, coverage and a more coherent public presence.',
    description:
      'Families look for signals of credibility beyond a paid ad. We help education organisations plan digital PR, thought-leadership content and campaign communications that support reputation—without promising placements or search-result removal.',
    problem:
      'Institutions may be hard to find in trusted publications, or their public story is inconsistent across the website, news and social channels.',
    solution:
      'We assess current visibility, define the stories worth telling, and support outreach and content that can be maintained honestly.',
    deliverables: [
      'Digital PR and visibility plan',
      'Authority content outlines',
      'Campaign communications support',
      'Reputation monitoring notes',
    ],
    benefits: [
      'A more coherent public narrative',
      'Content that can support search and sales conversations',
      'Preparedness for campaign announcements',
      'A realistic view of reputation work',
    ],
    process: [
      { step: 'Assess', detail: 'Review current coverage, search snippets and competitor presence.' },
      { step: 'Plan', detail: 'Choose themes, audiences and outreach priorities.' },
      { step: 'Execute', detail: 'Produce materials and support placement conversations.' },
      { step: 'Review', detail: 'Track coverage and refine the next cycle.' },
    ],
    faqs: [
      {
        question: 'How is this different from SEO?',
        answer:
          'SEO focuses on the structure and content of your own properties. PR and visibility work on reputation and presence in the wider conversation. They can reinforce each other, but they are not the same job.',
      },
      {
        question: 'Can you remove negative search results?',
        answer:
          'No agency can guarantee that. We can help build accurate, useful public content. Outcomes depend on many factors outside our control.',
      },
    ],
    cta: 'Discuss brand visibility',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
