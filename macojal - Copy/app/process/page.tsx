'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Network, Rocket, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProcessPage() {
  const fuseSteps = [
    {
      letter: 'F',
      title: 'Frame the Problem',
      description: 'Business goals, user needs, and constraints',
      details: 'We start by understanding your business objectives, user requirements, and technical constraints. This phase includes stakeholder interviews, market research, and defining success metrics.',
      icon: <Target className="w-8 h-8" />,
    },
    {
      letter: 'U',
      title: 'Unify Architecture',
      description: 'Web3, AI, cloud, and data systems designed together',
      details: 'We design integrated architectures that bring together Web3, AI, and cloud technologies. Our approach ensures all systems work seamlessly together from day one.',
      icon: <Network className="w-8 h-8" />,
    },
    {
      letter: 'S',
      title: 'Ship Fast',
      description: 'Agile sprints with continuous validation',
      details: 'We deliver in rapid iterations using agile methodologies. Each sprint produces working software that we validate with stakeholders, ensuring we build the right thing.',
      icon: <Rocket className="w-8 h-8" />,
    },
    {
      letter: 'E',
      title: 'Expand & Scale',
      description: 'Security hardening, optimization, and growth support',
      details: 'Once launched, we focus on security hardening, performance optimization, and scaling infrastructure to support growth. We provide ongoing support and continuous improvement.',
      icon: <TrendingUp className="w-8 h-8" />,
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
              Our Framework – FUSE™
            </h1>
            <p className="text-xl text-gray-600">
              A proven methodology for building scalable digital products
            </p>
          </motion.div>

          <div className="space-y-12">
            {fuseSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 md:p-12 rounded-xl shadow-sm"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-accent-blue text-white rounded-full flex items-center justify-center text-4xl font-bold mb-4">
                      {step.letter}
                    </div>
                    <div className="text-accent-blue">{step.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-primary mb-3">{step.title}</h2>
                    <p className="text-xl text-gray-600 mb-4 font-medium">{step.description}</p>
                    <p className="text-gray-600 leading-relaxed">{step.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white p-8 rounded-xl shadow-sm"
          >
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">The FUSE™ Flow</h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {fuseSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="w-16 h-16 bg-accent-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {step.letter}
                  </div>
                  <p className="text-sm font-semibold text-primary text-center">{step.title}</p>
                  {index < fuseSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute right-0 text-gray-400" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-primary text-white p-12 rounded-xl text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to build with FUSE™?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's discuss how our framework can accelerate your project
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all inline-flex items-center group"
            >
              Schedule a Strategy Call
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

