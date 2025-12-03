'use client';

import { m, AnimatePresence } from 'motion/react';
import { X, Upload, MapPin, Briefcase, User, Linkedin, FileText, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface TalentRegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TalentRegistrationModal = ({ isOpen, onClose }: TalentRegistrationModalProps) => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        role: '',
        linkedin: '',
    });
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset after showing success
        setTimeout(() => {
            setIsSuccess(false);
            onClose();
            setFormData({ name: '', location: '', role: '', linkedin: '' });
            setCvFile(null);
        }, 2000);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setCvFile(e.target.files[0]);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 overflow-y-auto"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

                    {/* Centered container */}
                    <div className="min-h-screen flex items-center justify-center p-4">
                        {/* Modal Content */}
                        <m.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl border border-cyan-400/10 shadow-2xl shadow-cyan-400/10 overflow-hidden"
                        >
                        {/* Animated gradient border effect */}
                        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                            <m.div
                                className="absolute inset-0 opacity-30"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.5), transparent)',
                                }}
                                animate={{
                                    x: ['-200%', '200%'],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            />
                        </div>

                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                        >
                            <X className="w-5 h-5 text-zinc-400" />
                        </button>

                        {/* Header */}
                        <div className="relative p-8 pb-6 border-b border-white/10">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/15">
                                    <Sparkles className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black text-white tracking-tight font-[var(--font-space-grotesk)]">
                                        Join Our <span className="text-cyan-400">Talent Pool</span>
                                    </h2>
                                    <p className="text-sm text-zinc-400 mt-1">
                                        Connect with top companies worldwide
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="relative p-8">
                            {!isSuccess ? (
                                <div className="space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-medium text-zinc-300 mb-2">
                                            <User className="w-4 h-4 text-cyan-400" />
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                                        />
                                    </div>

                                    {/* Location */}
                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-medium text-zinc-300 mb-2">
                                            <MapPin className="w-4 h-4 text-cyan-400" />
                                            Location *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.location}
                                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                            placeholder="New York, USA"
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                                        />
                                    </div>

                                    {/* Role */}
                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-medium text-zinc-300 mb-2">
                                            <Briefcase className="w-4 h-4 text-cyan-400" />
                                            Role / Expertise *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.role}
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            placeholder="Senior Full Stack Developer"
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                                        />
                                    </div>

                                    {/* LinkedIn */}
                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-medium text-zinc-300 mb-2">
                                            <Linkedin className="w-4 h-4 text-cyan-400" />
                                            LinkedIn Profile
                                            <span className="text-xs text-zinc-600">(Optional)</span>
                                        </label>
                                        <input
                                            type="url"
                                            value={formData.linkedin}
                                            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                            placeholder="https://linkedin.com/in/johndoe"
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                                        />
                                    </div>

                                    {/* CV Upload */}
                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-medium text-zinc-300 mb-2">
                                            <FileText className="w-4 h-4 text-cyan-400" />
                                            Upload CV *
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="file"
                                                required
                                                accept=".pdf,.doc,.docx"
                                                onChange={handleFileChange}
                                                className="hidden"
                                                id="cv-upload"
                                            />
                                            <label
                                                htmlFor="cv-upload"
                                                className="flex items-center justify-center gap-3 w-full px-4 py-4 rounded-xl bg-white/5 border-2 border-dashed border-white/20 hover:border-cyan-400/50 hover:bg-white/10 text-zinc-400 hover:text-cyan-400 cursor-pointer transition-all group"
                                            >
                                                <Upload className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                                <span className="text-sm font-medium">
                                                    {cvFile ? cvFile.name : 'Click to upload CV (PDF, DOC, DOCX)'}
                                                </span>
                                            </label>
                                        </div>
                                        {cvFile && (
                                            <p className="text-xs text-cyan-400 mt-2 flex items-center gap-1">
                                                <FileText className="w-3 h-3" />
                                                {cvFile.name} ({(cvFile.size / 1024).toFixed(0)} KB)
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-zinc-950 font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-400/20"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Submitting...
                                            </span>
                                        ) : (
                                            'Submit Application'
                                        )}
                                    </button>

                                    <p className="text-xs text-center text-zinc-500">
                                        By submitting, you agree to our terms and privacy policy
                                    </p>
                                </div>
                            ) : (
                                // Success State
                                <m.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-center py-12"
                                >
                                    <m.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/15 mb-6"
                                    >
                                        <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </m.div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
                                    <p className="text-zinc-400">We&apos;ll review your profile and get back to you soon.</p>
                                </m.div>
                            )}
                        </form>
                    </m.div>
                    </div>
                </m.div>
            )}
        </AnimatePresence>
    );
};

export default TalentRegistrationModal;
