'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { m } from 'motion/react';
import { User, MapPin, Briefcase, Linkedin, FileText, Upload, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

export default function JoinTalentPool() {
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
            setFormData({ name: '', location: '', role: '', linkedin: '' });
            setCvFile(null);

        } catch (error) {
            console.error('Error submitting application:', error);
            setIsSubmitting(false);
            alert('Failed to submit application. Please try again.');
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setCvFile(e.target.files[0]);
        }
    };

    return (
        <main className="min-h-screen bg-white text-deep-twilight">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-frosted-blue/10 rounded-full blur-[100px] opacity-60 mix-blend-multiply" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-light-cyan/30 border border-french-blue/10 mb-8"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-french-blue" />
                            <span className="text-french-blue text-sm font-serif font-medium tracking-wide uppercase">Join Our Network</span>
                        </m.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium mb-8 tracking-tight text-deep-twilight">
                            Build Your <span className="italic text-french-blue">Future</span>
                        </h1>

                        <p className="text-xl text-gray-600 font-sans font-light max-w-2xl mx-auto leading-relaxed">
                            Connect with world-class startups and global companies. We help exceptional talent find exceptional opportunities.
                        </p>
                    </m.div>
                </div>
            </section>

            {/* Form Section */}
            <section className="pb-24">
                <div className="container mx-auto px-6">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-3xl mx-auto bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden p-8 md:p-12 relative"
                    >
                        {/* Decorative Gradient */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-light-cyan/10 to-transparent rounded-full blur-3xl -z-10" />

                        {!isSuccess ? (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Name */}
                                        <div>
                                            <label className="flex items-center gap-2 text-sm font-bold text-deep-twilight mb-2">
                                                <User className="w-4 h-4 text-french-blue" />
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-deep-twilight placeholder:text-gray-400 focus:outline-none focus:border-french-blue/50 focus:bg-white focus:ring-4 focus:ring-french-blue/5 transition-all"
                                            />
                                        </div>

                                        {/* Location */}
                                        <div>
                                            <label className="flex items-center gap-2 text-sm font-bold text-deep-twilight mb-2">
                                                <MapPin className="w-4 h-4 text-french-blue" />
                                                Location *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.location}
                                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                                placeholder="New York, USA"
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-deep-twilight placeholder:text-gray-400 focus:outline-none focus:border-french-blue/50 focus:bg-white focus:ring-4 focus:ring-french-blue/5 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Role */}
                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-bold text-deep-twilight mb-2">
                                            <Briefcase className="w-4 h-4 text-french-blue" />
                                            Role / Expertise *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.role}
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            placeholder="e.g. Senior Full Stack Developer"
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-deep-twilight placeholder:text-gray-400 focus:outline-none focus:border-french-blue/50 focus:bg-white focus:ring-4 focus:ring-french-blue/5 transition-all"
                                        />
                                    </div>

                                    {/* LinkedIn */}
                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-bold text-deep-twilight mb-2">
                                            <Linkedin className="w-4 h-4 text-french-blue" />
                                            LinkedIn Profile
                                            <span className="text-xs text-gray-400 font-normal">(Optional)</span>
                                        </label>
                                        <input
                                            type="url"
                                            value={formData.linkedin}
                                            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                            placeholder="https://linkedin.com/in/johndoe"
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-deep-twilight placeholder:text-gray-400 focus:outline-none focus:border-french-blue/50 focus:bg-white focus:ring-4 focus:ring-french-blue/5 transition-all"
                                        />
                                    </div>

                                    {/* CV Upload */}
                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-bold text-deep-twilight mb-2">
                                            <FileText className="w-4 h-4 text-french-blue" />
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
                                                className={`flex items-center justify-center gap-3 w-full px-8 py-8 rounded-2xl border-2 border-dashed cursor-pointer transition-all group ${cvFile
                                                        ? 'bg-french-blue/5 border-french-blue text-french-blue'
                                                        : 'bg-gray-50 border-gray-200 hover:border-french-blue/30 hover:bg-french-blue/5 text-gray-500 hover:text-french-blue'
                                                    }`}
                                            >
                                                <div className="flex flex-col items-center gap-2 text-center">
                                                    <Upload className={`w-8 h-8 transition-transform ${cvFile ? 'scale-110' : 'group-hover:scale-110'}`} />
                                                    <span className="text-sm font-medium">
                                                        {cvFile ? cvFile.name : 'Click to upload CV (PDF, DOC, DOCX)'}
                                                    </span>
                                                    {!cvFile && <span className="text-xs text-gray-400">Max file size 5MB</span>}
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 rounded-xl bg-deep-twilight text-white font-bold text-lg hover:bg-french-blue transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-deep-twilight/10 flex items-center justify-center gap-2 mt-8"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Submit Application
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-center text-gray-400">
                                    By submitting, you agree to our terms and privacy policy.
                                </p>
                            </form>
                        ) : (
                            // Success State
                            <m.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center py-20"
                            >
                                <m.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                    className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-50 text-green-500 mb-8"
                                >
                                    <CheckCircle className="w-12 h-12" />
                                </m.div>
                                <h3 className="text-3xl font-serif font-bold text-deep-twilight mb-4">Application Submitted!</h3>
                                <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                                    Use this time to relax. We&apos;ll review your profile and get back to you within 48 hours.
                                </p>
                                <button
                                    onClick={() => {
                                        setIsSuccess(false);
                                        setFormData({ name: '', location: '', role: '', linkedin: '' });
                                    }}
                                    className="text-french-blue font-bold hover:underline"
                                >
                                    Submit another application
                                </button>
                            </m.div>
                        )}
                    </m.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
