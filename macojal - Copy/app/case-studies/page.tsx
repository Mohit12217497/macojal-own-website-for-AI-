'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Rocket, Bot, Globe, Code, Filter } from 'lucide-react';

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState('all');

  const caseStudies = [
    {
      id: 1,
      type: 'startup',
      title: 'Web3 Marketplace MVP',
      client: 'FinTech Startup',
      industry: 'FinTech',
      challenge: 'Launch a tokenized marketplace in 90 days with enterprise-grade security.',
      solution: 'Built a complete Web3 platform with smart contracts, wallet integration, and scalable architecture.',
      outcome: 'MVP launched in 85 days, ready for 10K+ users, secured seed funding.',
      icon: <Code className="w-8 h-8" />,
    },
    {
      id: 2,
      type: 'ai-automation',
      title: 'AI-Powered Operations Automation',
      client: 'SME Services Company',
      industry: 'Services',
      challenge: 'Reduce manual processing time by 60% and improve decision-making speed.',
      solution: 'Deployed AI chatbots, workflow automation, and predictive analytics across operations.',
      outcome: '40% reduction in manual work, 3x faster decision-making, scalable operations.',
      icon: <Bot className="w-8 h-8" />,
    },
    {
      id: 3,
      type: 'enterprise',
      title: 'Enterprise Platform Modernization',
      client: 'Funded Startup',
      industry: 'SaaS',
      challenge: 'Scale platform to handle 10x traffic growth while maintaining security and performance.',
      solution: 'Rebuilt architecture with cloud-native systems, optimized APIs, and security hardening.',
      outcome: 'Platform handles 10x traffic, 99.9% uptime, ready for enterprise clients.',
      icon: <Globe className="w-8 h-8" />,
    },
    {
      id: 4,
      type: 'web3-ai',
      title: 'Web3 + AI Trading Platform',
      client: 'Gaming & Digital Assets',
      industry: 'Gaming',
      challenge: 'Combine blockchain transparency with AI-powered insights for trading decisions.',
      solution: 'Integrated smart contracts with AI analytics, fraud detection, and personalized recommendations.',
      outcome: 'Differentiated product, competitive advantage, ready for scale and compliance.',
      icon: <Rocket className="w-8 h-8" />,
    },
  ];

  const filters = [
    { id: 'all', label: 'All Cases' },
    { id: 'startup', label: 'Startup / MVP' },
    { id: 'ai-automation', label: 'AI Automation' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'web3-ai', label: 'Web3 + AI' },
  ];

  const filteredCases = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.type === filter);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600">
              Real projects delivering measurable business outcomes
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {filters.map((filterOption) => (
              <button
                key={filterOption.id}
                onClick={() => setFilter(filterOption.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  filter === filterOption.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all"
              >
                <div className="text-accent-blue mb-4">{caseStudy.icon}</div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {caseStudy.industry}
                  </span>
                  <span className="px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-full text-sm font-medium">
                    {caseStudy.type}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">{caseStudy.title}</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-primary mb-1">The Challenge</h3>
                    <p className="text-gray-600 text-sm">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Our Solution</h3>
                    <p className="text-gray-600 text-sm">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Outcome</h3>
                    <p className="text-gray-600 text-sm font-medium">{caseStudy.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No case studies found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

