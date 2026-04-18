'use client';

import { m, AnimatePresence } from 'motion/react';
import { X, Upload, MapPin, Briefcase, User, Linkedin, FileText, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

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
    const modalContentRef = useRef<HTMLDivElement>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            const scrollY = window.scrollY;
            const body = document.body;

            // Lock scroll position
            body.style.position = 'fixed';
            body.style.top = `-${scrollY}px`;
            body.style.width = '100%';
            body.style.overflow = 'hidden';

            return () => {
                // Restore scroll position
                body.style.position = '';
                body.style.top = '';
                body.style.width = '';
                body.style.overflow = '';
                window.scrollTo(0, scrollY);
            };
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Create FormData for file upload
            const submitData = new FormData();
            submitData.append('name', formData.name);
            submitData.append('location', formData.location);
            submitData.append('role', formData.role);
            submitData.append('linkedin', formData.linkedin);

            if (cvFile) {
                submitData.append('cv', cvFile);
            }

            // Send to API
            const response = await fetch('/api/talent/register', {
                method: 'POST',
                body: submitData,
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to submit application');
            }

            setIsSubmitting(false);
            setIsSuccess(true);

            // Reset after showing success
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
                setFormData({ name: '', location: '', role: '', linkedin: '' });
                setCvFile(null);
            }, 2000);
        } catch (error) {
            console.error('Error submitting application:', error);
            setIsSubmitting(false);
            // You could add an error state here to show to the user
            alert('Failed to submit application. Please try again.');
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setCvFile(e.target.files[0]);
        }
    };

    // Redirect all wheel events to modal content for better UX
    const handleWheel = (e: React.WheelEvent) => {
        if (modalContentRef.current) {
            modalContentRef.current.scrollTop += e.deltaY;
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    data-lenis-prevent
                    className="fixed inset-0 z-50"
                    onClick={onClose}
                    onWheel={handleWheel}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

                    {/* Centered container */}
                    <div
                        ref={modalContentRef}
                        data-lenis-prevent
                        className="relative h-full overflow-y-auto flex items-center justify-center p-4"
                    >
                        <m.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-2xl bg-zinc-950 rounded-2xl border border-white/10 shadow-2xl overflow-hidden my-8"
                        >

                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                            >
                                <X className="w-5 h-5 text-zinc-400" />
                            </button>

                            {/* Header */}
                            <div className="relative p-6 md:p-8 pb-6 border-b border-white/10">
                                <div className="flex items-center gap-4 mb-1">
                                    <div className="p-2.5 rounded-xl border border-white/10 bg-white/5">
                                        <Sparkles className="w-5 h-5 text-zinc-300" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold text-white tracking-tight">
                                            Join Our Talent Pool
                                        </h2>
                                        <p className="text-sm text-zinc-400 mt-1">
                                            Connect with top companies worldwide.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="relative p-6 md:p-8">
                                {!isSuccess ? (
                                    <div className="space-y-5">
                                        {/* Name */}
                                        <div>
                                            <label className="flex items-center gap-2 text-sm font-medium text-zinc-300 mb-2">
                                                <User className="w-4 h-4 text-zinc-500" />
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="e.g. Alex Chen"
                                                className="w-full px-4 py-2.5 rounded-lg bg-zinc-900/50 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all text-sm"
                                            />
                                        </div>

                                        {/* Location */}
                                        <div>
                                            <label className="flex items-center gap-2 text-sm font-medium text-zinc-300 mb-2">
                                                <MapPin className="w-4 h-4 text-zinc-500" />
                                                Location
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.location}
                                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                                placeholder="e.g. San Francisco, US or Remote"
                                                className="w-full px-4 py-2.5 rounded-lg bg-zinc-900/50 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all text-sm"
                                            />
                                        </div>

                                        {/* Role */}
                                        <div>
                                            <label className="flex items-center gap-2 text-sm font-medium text-zinc-300 mb-2">
                                                <Briefcase className="w-4 h-4 text-zinc-500" />
                                                Role / Expertise
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.role}
                                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                                placeholder="e.g. Senior Machine Learning Engineer"
                                                className="w-full px-4 py-2.5 rounded-lg bg-zinc-900/50 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all text-sm"
                                            />
                                        </div>

                                        {/* LinkedIn */}
                                        <div>
                                            <label className="flex items-center gap-2 text-sm font-medium text-zinc-300 mb-2">
                                                <Linkedin className="w-4 h-4 text-zinc-500" />
                                                LinkedIn Profile
                                                <span className="text-xs text-zinc-500 ml-auto font-normal">Optional</span>
                                            </label>
                                            <input
                                                type="url"
                                                value={formData.linkedin}
                                                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                                placeholder="e.g. https://linkedin.com/in/username"
                                                className="w-full px-4 py-2.5 rounded-lg bg-zinc-900/50 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all text-sm"
                                            />
                                        </div>

                                        {/* CV Upload */}
                                        <div>
                                            <label className="flex items-center gap-2 text-sm font-medium text-zinc-300 mb-2">
                                                <FileText className="w-4 h-4 text-zinc-500" />
                                                Upload Resume
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
                                                    className={`flex items-center justify-center gap-3 w-full px-4 py-3 rounded-lg border border-dashed transition-all cursor-pointer group text-sm ${cvFile
                                                            ? 'bg-white/5 border-white/30 text-white'
                                                            : 'bg-zinc-900/50 border-white/10 hover:border-white/30 text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                                                        }`}
                                                >
                                                    <Upload className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                                                    <span className="font-medium">
                                                        {cvFile ? cvFile.name : 'Upload PDF or DOCX file'}
                                                    </span>
                                                </label>
                                            </div>
                                            {cvFile && (
                                                <p className="text-xs text-zinc-400 mt-2 flex items-center justify-between">
                                                    <span>Selected Document:</span>
                                                    <span>{(cvFile.size / 1024).toFixed(0)} KB</span>
                                                </p>
                                            )}
                                        </div>

                                        {/* Submit Button */}
                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full py-3 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                        </svg>
                                                        Processing...
                                                    </>
                                                ) : (
                                                    'Submit Application'
                                                )}
                                            </button>
                                        </div>

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
                                            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-6"
                                        >
                                            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
