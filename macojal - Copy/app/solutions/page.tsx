'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Bot, Globe, ArrowRight } from 'lucide-react';

export default function SolutionsPage() {
  const solutions = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web3 Product Development',
      description: 'From idea to on-chain launch — dApps, smart contracts, tokenized platforms, and blockchain infrastructure built for real-world adoption.',
      href: '/solutions/web3',
      iconColor: 'text-accent-blue',
      linkColor: 'text-accent-blue',
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: 'AI Automation Systems',
      description: 'We replace manual workflows with AI-powered automation — chatbots, agents, analytics, and internal tools that deliver measurable ROI.',
      href: '/solutions/ai-automation',
      iconColor: 'text-accent-teal',
      linkColor: 'text-accent-teal',
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Enterprise Web & App Engineering',
      description: 'Mission-critical web and mobile platforms designed for performance, security, and long-term scalability.',
      href: '/solutions/enterprise',
      iconColor: 'text-accent-emerald',
      linkColor: 'text-accent-emerald',
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
              Our Solutions
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive digital transformation services designed for scale and impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`${solution.iconColor} mb-6`}>
                  {solution.icon}
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">{solution.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                <Link
                  href={solution.href}
                  className={`${solution.linkColor} font-semibold inline-flex items-center hover:gap-2 gap-1 transition-all`}
                >
                  Explore Solution
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

