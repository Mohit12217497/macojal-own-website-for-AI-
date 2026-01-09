'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Rocket, TrendingUp, Zap, Building2, Code, Bot, Globe } from 'lucide-react';

export default function IndustriesPage() {
  const industries = [
    {
      name: 'Startups & Scaleups',
      icon: <Rocket className="w-8 h-8" />,
      problem: 'Need to move fast, validate ideas, and build MVPs that can scale without technical debt.',
      solution: 'We combine startup speed with enterprise-grade architecture, delivering production-ready MVPs in 60-90 days.',
      technologies: ['Web3', 'AI', 'Cloud'],
    },
    {
      name: 'FinTech',
      icon: <TrendingUp className="w-8 h-8" />,
      problem: 'Require secure, compliant platforms with real-time processing and regulatory adherence.',
      solution: 'Blockchain-based solutions, AI-powered fraud detection, and enterprise-grade security built for financial services.',
      technologies: ['Web3', 'AI', 'Enterprise'],
    },
    {
      name: 'Gaming & Digital Assets',
      icon: <Zap className="w-8 h-8" />,
      problem: 'Need engaging platforms that handle NFTs, tokens, and high-concurrency gaming experiences.',
      solution: 'Web3 gaming platforms, NFT marketplaces, and tokenized ecosystems with seamless user experiences.',
      technologies: ['Web3', 'AI', 'Mobile'],
    },
    {
      name: 'Real Estate & Asset Platforms',
      icon: <Building2 className="w-8 h-8" />,
      problem: 'Require platforms for tokenization, asset management, and transparent transactions.',
      solution: 'Blockchain-based asset tokenization, AI-powered property analytics, and scalable marketplace platforms.',
      technologies: ['Web3', 'AI', 'Enterprise'],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Solutions Built for High-Impact Industries
            </h1>
            <p className="text-xl text-gray-600">
              Industry-specific expertise delivering measurable business outcomes
            </p>
          </motion.div>

          <div className="space-y-12">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 md:p-12 rounded-xl shadow-sm"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="text-accent-blue mb-4">{industry.icon}</div>
                    <h2 className="text-3xl font-bold text-primary mb-4">{industry.name}</h2>
                    <div className="flex flex-wrap gap-2">
                      {industry.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">The Challenge</h3>
                      <p className="text-gray-600">{industry.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">How We Solve It</h3>
                      <p className="text-gray-600">{industry.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

