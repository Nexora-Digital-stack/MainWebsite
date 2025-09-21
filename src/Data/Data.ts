import { Instagram, Github, Search,MessageSquare, Target, Globe, Code,
    Lightbulb,
    Heart,
    Shield,
    BarChart3,
    TrendingUp, 
    Users, 
    Award, 
    Star,
    PenTool,
} from 'lucide-react';

export const mainServices = [
    {
        icon: Search,
        title: 'Search Engine Optimization (SEO)',
        description: 'Boost your organic visibility and drive quality traffic with our comprehensive SEO strategies.',
        features: [
        'Technical SEO audits and optimization',
        'Keyword research and strategy',
        'On-page and off-page optimization',
        'Local SEO for businesses',
        'SEO content creation',
        'Monthly reporting and analytics'
        ],
        pricing: 'Starting at ₹5,000/month',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        icon: MessageSquare,
        title: 'Social Media Marketing',
        description: 'Build brand awareness and engage your audience across all major social media platforms.',
        features: [
        'Social media strategy development',
        'Content creation and curation',
        'Community management',
        'Influencer partnerships',
        'Social media advertising',
        'Performance analytics'
        ],
        pricing: 'Starting at ₹7,000/month',
        color: 'from-green-500 to-teal-500'
    },
    {
        icon: Target,
        title: 'Ads Campaign',
        description: 'Boost your business visibility with data-driven advertising campaigns tailored to your goals.',
        features: [
        'Google Ads management',
        'Facebook & Instagram Ads',
        'LinkedIn Ads targeting',
        'YouTube video advertising',
        'Audience research and segmentation',
        'Performance tracking and optimization'
        ],
        pricing: 'Starting at ₹5,000/month',
        color: 'from-green-500 to-emerald-500'
    },
    {
        icon: Code,
        title: 'Web Development',
        description: 'Build fast, secure, and scalable websites tailored to your business needs.',
        features: [
        'Custom website design and development',
        'Responsive and mobile-friendly design',
        'E-commerce solutions',
        'API integration',
        'SEO-friendly development',
        'Website maintenance and support'
        ],
        pricing: 'Starting at ₹10,000/month',
        color: 'from-blue-500 to-indigo-500'
    }
];

export const additionalServices = [
    {
        icon: Globe,
        title: 'Website Design & Development',
        description: 'Create stunning, conversion-optimized websites that represent your brand.'
    },
    {
        icon: Target,
        title: 'Conversion Rate Optimization',
        description: 'Improve your website performance and increase conversion rates.'
    }
];

export const process = [
    {
        step: '01',
        title: 'Discovery & Strategy',
        description: 'We analyze your business, competitors, and target audience to develop a custom strategy.'
    },
    {
        step: '02',
        title: 'Implementation',
        description: 'Our expert team executes the strategy across all relevant digital channels.'
    },
    {
        step: '03',
        title: 'Optimization',
        description: 'We continuously monitor and optimize campaigns for maximum performance.'
    },
    {
        step: '04',
        title: 'Reporting',
        description: 'Receive detailed monthly reports showing progress and ROI metrics.'
    }
];

// footer data

export const socialLinks = [
    { name: 'Github', icon: Github, href: 'https://github.com/Nexora-Digital-stack' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/nexora__.digital?igsh=ZHJ4M2E0MDJ5NWF1' },
];

export const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
];

export const services = [
    { name: 'SEO Optimization', href: '/services#SearchEngineOptimization(SEO)' },
    { name: 'Social Media Marketing', href: '/services#SocialMediaMarketing' },
    { name: 'Add Campaigns', href: '/services#AdsCampaign'},
    { name: 'Web Development', href: '/services#WebDevelopment' },
];


// about page Data

export const values = [
    {
        icon: Target,
        title: 'Results-Driven',
        description: 'We focus on delivering measurable outcomes that directly impact your bottom line.'
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'We stay ahead of digital trends and use cutting-edge strategies to keep you competitive.'
    },
    {
        icon: Heart,
        title: 'Client-Centric',
        description: 'Your success is our success. We build long-term partnerships based on trust and results.'
    },
    {
        icon: Shield,
        title: 'Transparency',
        description: 'Clear communication, honest reporting, and full visibility into our processes and results.'
    }
];

export const team = [
    {
        name: 'Abhishek Bhati',
        role: 'CEO & Founder',
        bio: '10+ years in digital marketing, former Google strategist',
        specialties: ['Strategy', 'Leadership', 'Business Development']
    },
    {
        name: 'Udit Saxena',
        role: 'Head of SEO',
        bio: 'SEO expert with proven track record of ranking websites #1',
        specialties: ['Technical SEO', 'Content Strategy', 'Analytics']
    },
    {   
        name: 'Vansh Sharma',
        role: 'PPC Director',
        bio: 'Google Ads certified professional managing $1M+ in ad spend',
        specialties: ['Google Ads', 'Facebook Ads', 'Conversion Optimization']
    },
    {
        name: 'Dewesh Baghel',
        role: 'Social Media Manager',
        bio: 'Creative storyteller with expertise in viral content creation',
        specialties: ['Content Creation', 'Community Management', 'Influencer Marketing']
    }
];

export const milestones = [
    { year: '2025', event: 'Nexora Digital Founded', description: 'Started with a vision to democratize digital marketing' },
];

// Home Screen

export const homeStats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '1000+', label: 'Projects Completed', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '5+', label: 'Years Experience', icon: TrendingUp },
];

export const homeServices = [
{
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your search rankings and drive organic traffic with our proven SEO strategies.',
    color: 'from-blue-500 to-cyan-500'
},
{
    icon: BarChart3,
    title: 'PPC Advertising',
    description: 'Maximize ROI with targeted pay-per-click campaigns across all major platforms.',
    color: 'from-purple-500 to-pink-500'
},
{
    icon: MessageSquare,
    title: 'Social Media Marketing',
    description: 'Build engagement and grow your brand presence across all social platforms.',
    color: 'from-green-500 to-teal-500'
},
{
    icon: PenTool,
    title: 'Content Marketing',
    description: 'Create compelling content that resonates with your audience and drives conversions.',
    color: 'from-orange-500 to-red-500'
},
];

export const testimonials = [
{
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Nexora Digital transformed our online presence. Our traffic increased by 300% in just 6 months!',
    rating: 5
},
{
    name: 'Michael Chen',
    role: 'Marketing Director, GrowthCo',
    content: 'Professional, results-driven, and always available. The best digital marketing partner we\'ve had.',
    rating: 5
},
{
    name: 'Emily Rodriguez',
    role: 'Founder, Creative Studio',
    content: 'Their social media strategies doubled our engagement rates. Highly recommend their services!',
    rating: 5
},
];