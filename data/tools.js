/**
 * List of sample AI tools displayed on fastspeed.ai. Each entry contains
 * metadata used to render cards on the leaderboard including category,
 * short summary, pros/cons lists, a rating between 1–5 and a placeholder
 * affiliate link. When extending this array to include real tools, keep
 * the structure consistent so that the UI can render the information
 * consistently without modifications.
 */
const tools = [
  {
    id: 'jasper',
    name: 'Jasper',
    category: 'AI Writer',
    summary: 'AI copywriting assistant that generates high‑quality marketing copy in seconds.',
    pros: [
      'Produces engaging marketing text quickly',
      'Supports multiple tones and languages',
      'Easy‑to‑use interface for beginners'
    ],
    cons: [
      'Requires a subscription for full access',
      'Generated content still needs human editing'
    ],
    rating: 4.7,
    affiliateLink: '#affiliate-jasper'
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    category: 'AI Writer',
    summary: 'AI writing tool designed to help craft blog posts, social media captions and more.',
    pros: [
      'Great for brainstorming content ideas',
      'Offers various templates for different use cases',
      'Free tier available for small projects'
    ],
    cons: [
      'Output sometimes lacks specificity',
      'Limited customization compared to competitors'
    ],
    rating: 4.3,
    affiliateLink: '#affiliate-copyai'
  },
  {
    id: 'replit',
    name: 'Replit',
    category: 'AI Coder',
    summary: 'Collaborative browser‑based IDE with AI code generation and completion features.',
    pros: [
      'Instantly runs code in over 50 languages',
      'AI assistant helps complete functions and debug',
      'Great for pair programming and teaching'
    ],
    cons: [
      'Performance can lag on larger projects',
      'Advanced features require a paid plan'
    ],
    rating: 4.5,
    affiliateLink: '#affiliate-replit'
  },
  {
    id: 'claude',
    name: 'Claude',
    category: 'AI Chatbot',
    summary: 'Conversational AI assistant designed for safe, helpful and precise answers.',
    pros: [
      'Friendly conversational tone',
      'Handles long context windows well',
      'Focused on safety and reducing harmful output'
    ],
    cons: [
      'Limited availability in some regions',
      'Responses can sometimes be too cautious'
    ],
    rating: 4.4,
    affiliateLink: '#affiliate-claude'
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    category: 'AI Chatbot',
    summary: 'Research assistant chatbot that cites sources and answers factual questions.',
    pros: [
      'Provides source citations with each answer',
      'Great for quick research and fact checking',
      'Simple and clean user interface'
    ],
    cons: [
      'Occasional inaccuracies in complex topics',
      'Limited customization of responses'
    ],
    rating: 4.2,
    affiliateLink: '#affiliate-perplexity'
  },
  {
    id: 'runway',
    name: 'Runway',
    category: 'AI Productivity Tool',
    summary: 'Suite of creative AI tools for video editing, image generation and more.',
    pros: [
      'Innovative tools for filmmakers and designers',
      'Browser‑based with collaborative features',
      'Regularly adds new AI models and features'
    ],
    cons: [
      'Processing time can be slow for large files',
      'Paid subscription required for HD exports'
    ],
    rating: 4.1,
    affiliateLink: '#affiliate-runway'
  },
  {
    id: 'openai-api',
    name: 'OpenAI API',
    category: 'AI API',
    summary: 'Industry‑leading API providing access to GPT models for chat, completion and more.',
    pros: [
      'State‑of‑the‑art language models',
      'Flexible integration for developers',
      'Extensive documentation and community'
    ],
    cons: [
      'Usage can get expensive at scale',
      'Rate limits require careful planning'
    ],
    rating: 4.6,
    affiliateLink: '#affiliate-openai'
  }
];

export default tools;