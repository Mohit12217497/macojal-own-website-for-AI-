'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Brain, Bot, ScanLine, MessageSquare, Workflow, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const capabilities = [
  {
    icon: <Brain className="w-10 h-10 text-accent-blue" />,
    title: 'Generative AI',
    desc: 'Domain-tuned models for content, summarization, code, and decision support.',
  },
  {
    icon: <ScanLine className="w-10 h-10 text-accent-teal" />,
    title: 'Computer Vision',
    desc: 'Detection, OCR, document intelligence, quality inspection, and safety.',
  },
  {
    icon: <Bot className="w-10 h-10 text-accent-emerald" />,
    title: 'AI Automation (Agents)',
    desc: 'Multi-step agents orchestrating tools, APIs, and workflows with guardrails.',
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-accent-blue" />,
    title: 'Chatbots & Voice AI',
    desc: 'Secure, on-brand assistants integrated with your data and systems.',
  },
  {
    icon: <Workflow className="w-10 h-10 text-accent-teal" />,
    title: 'Workflow Automation',
    desc: 'Process mapping, automation design, and measurable ROI dashboards.',
  },
  {
    icon: <Layers className="w-10 h-10 text-accent-emerald" />,
    title: 'Multi-Modal Intelligence',
    desc: 'Text + images + documents analyzed together for richer decisions.',
  },
];

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-primary-dark dark:to-primary-dark">
      <Navbar />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent-blue mb-3">
              AI & Technology Capabilities
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
              AI that is production-ready, secure, and ROI-driven.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We design and deploy AI systems for enterprises, governments, and mission-critical operations—combining strategy, architecture, and execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, idx) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white dark:bg-primary-light/40 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm"
              >
                <div className="mb-4">{capability.icon}</div>
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {capability.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-primary-light/40 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-primary dark:text-white mb-4">Architecture-first</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Data pipelines, vector stores, RAG, governance, and security baked into every solution. We align AI with your compliance and risk posture.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200 text-sm">
                <li>• Guardrails, auditability, and human-in-the-loop</li>
                <li>• Model + infra choices for cost and latency targets</li>
                <li>• Observability: drift, quality, safety monitoring</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-primary-light/40 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-primary dark:text-white mb-4">Outcomes, not demos</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Every engagement maps to measurable ROI: automation %, resolution time, throughput, and CSAT improvements.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200 text-sm">
                <li>• 40–60% process automation targets</li>
                <li>• Playbooks for pilots → production → scale</li>
                <li>• Integration with your CRMs, ERPs, data lakes</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-colors"
            >
              Book an AI Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

