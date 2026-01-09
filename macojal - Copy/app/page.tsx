'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Zap, Shield, Target, Code, Bot, Globe, Rocket, Building2, TrendingUp } from 'lucide-react';

export default function Home() {
  const solutions = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web3 Product Development',
      description: 'From idea to on-chain launch — dApps, smart contracts, tokenized platforms, and blockchain infrastructure built for real-world adoption.',
      href: '/solutions/web3',
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI Automation Systems',
      description: 'We replace manual workflows with AI-powered automation — chatbots, agents, analytics, and internal tools that deliver measurable ROI.',
      href: '/solutions/ai-automation',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Enterprise Web & App Engineering',
      description: 'Mission-critical web and mobile platforms designed for performance, security, and long-term scalability.',
      href: '/solutions/enterprise',
    },
  ];

  const advantages = [
    { icon: <Rocket className="w-6 h-6" />, title: 'Startup Speed', desc: 'Rapid MVPs and fast iterations' },
    { icon: <Shield className="w-6 h-6" />, title: 'Enterprise Discipline', desc: 'Security, scalability, and process' },
    { icon: <Target className="w-6 h-6" />, title: 'Outcome-Driven', desc: 'Business impact over buzzwords' },
    { icon: <Zap className="w-6 h-6" />, title: 'Cross-Domain Expertise', desc: 'Web3 + AI + Cloud under one roof' },
  ];

  const fuseSteps = [
    { letter: 'F', title: 'Frame the Problem', desc: 'Business goals, user needs, and constraints' },
    { letter: 'U', title: 'Unify Architecture', desc: 'Web3, AI, cloud, and data systems designed together' },
    { letter: 'S', title: 'Ship Fast', desc: 'Agile sprints with continuous validation' },
    { letter: 'E', title: 'Expand & Scale', desc: 'Security hardening, optimization, and growth support' },
  ];

  const industries = [
    { name: 'Startups & Scaleups', icon: <Rocket className="w-6 h-6" /> },
    { name: 'FinTech', icon: <TrendingUp className="w-6 h-6" /> },
    { name: 'Gaming & Digital Assets', icon: <Zap className="w-6 h-6" /> },
    { name: 'Real Estate & Asset Platforms', icon: <Building2 className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-primary-dark dark:to-primary-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-accent-blue mb-4">
              Enterprise Systems. Web3. AI. Mission-Critical.
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-white mb-6 leading-tight">
              Build secure AI-driven and Web3-enabled platforms that actually scale.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Macojal partners with enterprises, governments, and hospitals to design, engineer,
              and operate mission-critical digital systems — with startup speed and enterprise discipline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-light transition-all inline-flex items-center justify-center group"
              >
                Talk to Our Team
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/ai"
                className="bg-white dark:bg-primary-light/40 text-primary dark:text-white border-2 border-primary/10 px-8 py-4 rounded-lg font-semibold text-lg hover:border-primary hover:bg-gray-50 dark:hover:bg-primary-light transition-all"
              >
                View AI & Web3 Capabilities
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-300">
              <div>
                <p className="font-semibold text-primary dark:text-white">40–60%</p>
                <p>Process automation</p>
              </div>
              <div>
                <p className="font-semibold text-primary dark:text-white">10x</p>
                <p>Scale-ready architectures</p>
              </div>
              <div>
                <p className="font-semibold text-primary dark:text-white">24/7</p>
                <p>Mission-critical monitoring</p>
              </div>
              <div>
                <p className="font-semibold text-primary dark:text-white">Enterprise</p>
                <p>Security-by-design</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 via-accent-teal/10 to-accent-emerald/10 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-primary-light/40 backdrop-blur-xl p-6 space-y-4 shadow-xl">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Macojal Control Plane
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="rounded-xl bg-gray-50 dark:bg-primary-dark p-4 space-y-2">
                  <p className="font-semibold text-primary dark:text-white">AI Automation</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Agents, workflows, and decision engines orchestrating your operations.
                  </p>
                </div>
                <div className="rounded-xl bg-gray-50 dark:bg-primary-dark p-4 space-y-2">
                  <p className="font-semibold text-primary dark:text-white">Web3 Infrastructure</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Smart contracts, tokenization, and secure wallets wired into your core stack.
                  </p>
                </div>
                <div className="rounded-xl bg-gray-50 dark:bg-primary-dark p-4 space-y-2">
                  <p className="font-semibold text-primary dark:text-white">Enterprise Platforms</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    High-availability web & mobile systems that scale with your users.
                  </p>
                </div>
                <div className="rounded-xl bg-gray-50 dark:bg-primary-dark p-4 space-y-2">
                  <p className="font-semibold text-primary dark:text-white">Observability</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Real-time analytics, alerts, and governance baked into every deployment.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-700 leading-relaxed"
          >
            We partner with startups and enterprises to design, engineer, and scale intelligent digital products that are secure, scalable, and future-ready.
          </motion.p>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary text-center mb-16"
          >
            What We Do
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="text-accent-blue mb-4 group-hover:scale-110 transition-transform">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                <Link
                  href={solution.href}
                  className="text-accent-blue font-semibold inline-flex items-center group-hover:gap-2 gap-1 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hybrid Advantage */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                Our Difference
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                The Hybrid Advantage
              </p>
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="text-accent-teal flex-shrink-0 mt-1">
                      {advantage.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">{advantage.title}</h3>
                      <p className="text-gray-600">{advantage.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent-blue/10 to-accent-teal/10 rounded-2xl p-12"
            >
              <div className="relative h-64 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-4 border-accent-blue rounded-full animate-pulse"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 border-4 border-accent-teal rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary">⚖️</div>
                </div>
              </div>
              <p className="text-center text-gray-700 mt-8 text-lg">
                The perfect balance between startup agility and enterprise reliability
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FUSE Framework */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary text-center mb-4"
          >
            Our Framework – FUSE™
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {fuseSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-accent-blue text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {step.letter}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary text-center mb-16"
          >
            Industries We Serve
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl hover:bg-accent-blue/5 transition-all cursor-pointer border-2 border-transparent hover:border-accent-blue/20"
              >
                <div className="text-accent-blue mb-4">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-primary">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Ready to build something meaningful?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
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

