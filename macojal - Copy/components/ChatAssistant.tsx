'use client';

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: number;
  from: 'user' | 'assistant';
  text: string;
};

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: 'assistant',
      text: 'Hi, I’m the Macojal AI assistant. Ask me anything about Web3, AI, or enterprise platforms.',
    },
  ]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages(prev => [
      ...prev,
      { id: prev.length + 1, from: 'user', text: trimmed },
      {
        id: prev.length + 2,
        from: 'assistant',
        text:
          'Thanks for sharing. A senior architect would typically clarify scope, success metrics, and constraints next. You can also use the contact page for a detailed strategy call.',
      },
    ]);
    setInput('');
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-primary text-white px-4 py-3 shadow-lg hover:bg-primary-light transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-sm font-semibold">Ask Macojal AI</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 z-40 w-full max-w-md"
          >
            <div className="rounded-2xl bg-white dark:bg-primary-light shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col h-96">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <p className="text-sm font-semibold text-primary dark:text-white">
                    Macojal AI Assistant
                  </p>
                  <p className="text-xs text-gray-500">
                    Enterprise-grade guidance. No spam.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-sm">
                {messages.map(msg => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.from === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`rounded-2xl px-3 py-2 max-w-[80%] ${
                        msg.from === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 dark:bg-primary-dark text-gray-900 dark:text-gray-100'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <form
                onSubmit={e => {
                  e.preventDefault();
                  handleSend();
                }}
                className="px-3 py-3 border-t border-gray-200 dark:border-gray-700 flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask about Web3, AI, or platforms..."
                  className="flex-1 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-primary-dark px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue"
                />
                <button
                  type="submit"
                  className="rounded-full bg-primary text-white p-2 hover:bg-primary-light transition-colors disabled:opacity-50"
                  disabled={!input.trim()}
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


