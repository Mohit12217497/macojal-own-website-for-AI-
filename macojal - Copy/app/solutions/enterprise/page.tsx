'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Globe, CheckCircle, ArrowRight, Users, Shield } from 'lucide-react';

export default function EnterprisePage() {
  const whatWeBuild = [
    'Large-scale web platforms',
    'Mobile applications',
    'Cloud-native systems',
    'Secure APIs & integrations',
    'Performance-optimized architectures',
  ];

  const idealFor = [
    'Enterprises',
    'Funded startups',
    'High-traffic platforms',
  ];

  const engagementModel = [
    'Discovery & planning',
    'Agile development',
    'Long-term support & retainers',
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
            <div className="text-accent-emerald mb-6">
              <Globe className="w-16 h-16" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Enterprise Web & App Engineering
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Enterprise-grade platforms built for scale, security, and reliability.
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
                    <CheckCircle className="text-accent-emerald flex-shrink-0 mt-1" />
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
                <Users className="text-accent-emerald w-8 h-8" />
                <h2 className="text-3xl font-bold text-primary">Ideal For</h2>
              </div>
              <ul className="space-y-4">
                {idealFor.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Shield className="text-accent-blue flex-shrink-0 mt-1" />
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
                    <div className="w-8 h-8 bg-accent-emerald text-white rounded-full flex items-center justify-center font-bold">
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
              className="bg-accent-emerald/10 p-8 rounded-xl text-center"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                Ready to build your enterprise platform?
              </h3>
              <Link
                href="/contact"
                className="bg-accent-emerald text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-emerald/90 transition-all inline-flex items-center group mt-4"
              >
                Start Your Project
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

