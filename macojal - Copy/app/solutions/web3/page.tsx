'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, CheckCircle, ArrowRight, Users, Rocket } from 'lucide-react';

export default function Web3Page() {
  const whatWeBuild = [
    'Decentralized applications (dApps)',
    'Smart contracts & audits',
    'Tokenization platforms',
    'Wallet & payment integrations',
    'NFT & digital asset marketplaces',
  ];

  const idealFor = [
    'Founders launching Web3 startups',
    'Enterprises exploring blockchain use-cases',
  ];

  const engagementModel = [
    'Discovery & architecture',
    'MVP build (60–90 days)',
    'Launch & scaling support',
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="text-accent-blue mb-6">
              <Code className="w-16 h-16" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Web3 Product Development
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We help startups and enterprises build production-ready Web3 products — not experiments.
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* What We Build */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">What We Build</h2>
              <ul className="space-y-4">
                {whatWeBuild.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-accent-blue flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Ideal For */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Users className="text-accent-blue w-8 h-8" />
                <h2 className="text-3xl font-bold text-primary">Ideal For</h2>
              </div>
              <ul className="space-y-4">
                {idealFor.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Rocket className="text-accent-teal flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Engagement Model */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Engagement Model</h2>
              <div className="space-y-4">
                {engagementModel.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-accent-blue text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-accent-blue/10 p-8 rounded-xl text-center"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                Ready to build your Web3 product?
              </h3>
              <Link
                href="/contact"
                className="bg-accent-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-blue/90 transition-all inline-flex items-center group mt-4"
              >
                Talk to a Web3 Expert
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

