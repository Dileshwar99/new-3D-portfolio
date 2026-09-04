import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { MagneticButton } from '../ui/MagneticButton';
import confetti from 'canvas-confetti';
import { Mail, Phone, Send, CheckCircle2, ArrowUpRight, MessageSquare, AlertCircle, Copy, Check, MapPin } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../ui/Icons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate high-performance asynchronous dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#6366f1', '#06b6d4', '#8b5cf6', '#10b981'],
        });
      } catch {
        // Fallback if canvas confetti is restricted
      }
    }, 800);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-indigo-500/10 via-cyan-500/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto">
        <SectionHeader
          badge="GET IN TOUCH"
          title="Let's Connect &"
          titleAccent="Collaborate"
          subtitle="Available for software engineering roles, frontend development, and data analytics internships."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Connect & Verified Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-2 mb-4">
              <h3 className="font-display font-bold text-2xl text-white">
                Get in touch directly
              </h3>
              <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                Open for software engineer / frontend internships, full-time opportunities, and data analytics roles.
              </p>
            </div>

            {/* Email Card with Copy button */}
            <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">Email Address</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-mono font-medium text-white hover:text-indigo-300 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white transition-all"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card with Copy button */}
            <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">Phone / WhatsApp</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-mono font-medium text-white hover:text-emerald-300 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white transition-all"
                title="Copy phone to clipboard"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-105 transition-transform">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold text-white">LinkedIn</div>
                    <div className="text-[11px] font-mono text-zinc-400">dileshwarkumar</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-105 transition-transform">
                    <GitHubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold text-white">GitHub</div>
                    <div className="text-[11px] font-mono text-zinc-400">Dileshwar99</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* University & Location indicator */}
            <div className="p-4 rounded-2xl bg-surface/50 border border-white/5 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <p className="text-xs font-mono text-zinc-300">
                Panjab University, Hoshiarpur, India • Open for remote & relocation
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 relative">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-display font-bold text-white">
                      Message Dispatched!
                    </h4>
                    <p className="text-sm text-zinc-400 font-sans max-w-sm">
                      Thank you for reaching out, {formData.name}. I'll review your note and get back to you promptly at {formData.email}.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="mt-4 px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-mono text-zinc-200 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="flex items-center gap-2 mb-2 pb-3 border-b border-white/10">
                      <MessageSquare className="w-4 h-4 text-indigo-400" />
                      <h4 className="font-display font-bold text-base text-white">
                        Send a Direct Message
                      </h4>
                    </div>

                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-zinc-300">
                        Your Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Recruiter / Collaborator"
                        className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors ${
                          errors.name ? 'border-rose-500/60' : 'border-white/10'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-zinc-300">
                        Your Email <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors ${
                          errors.email ? 'border-rose-500/60' : 'border-white/10'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message Input */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-zinc-300">
                        Message <span className="text-indigo-400">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about the role, project, or opportunity..."
                        className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none ${
                          errors.message ? 'border-rose-500/60' : 'border-white/10'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <MagneticButton
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className="w-full !py-3.5 text-sm font-mono shadow-[0_0_25px_rgba(99,102,241,0.4)]"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </span>
                      )}
                    </MagneticButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
