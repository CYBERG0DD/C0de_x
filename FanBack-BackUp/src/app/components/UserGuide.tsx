import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Sparkles, Send, Lock, Fingerprint, Search,
    ExternalLink, RefreshCw, Hash, Sun, Zap,
    Inbox, ShieldAlert, Cpu, Layers, Languages,
    ArrowLeft, Tag
} from 'lucide-react';
import { cn } from "../../lib/utils";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function UserGuidePage({ theme = 'dark' }: { theme?: 'light' | 'dark' }) {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // GSAP Context ensures animations are cleaned up when the component unmounts
        const ctx = gsap.context(() => {
            // 1. Header Entrance Animation
            gsap.fromTo('.guide-header',
                { opacity: 0, y: -30 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
            );

            // 2. Scroll-triggered animations for each section
            const sections = gsap.utils.toArray('.guide-section');

            sections.forEach((section: any, i) => {
                gsap.fromTo(section,
                    { opacity: 0, x: -30 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 85%', // Triggers when the top of the section hits 85% down the viewport
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert(); // Cleanup on unmount
    }, []);

    return (
        <div ref={containerRef} className={cn(
            "min-h-screen p-6 md:p-12 lg:p-20 overflow-x-hidden transition-colors duration-500",
            theme === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-[#0a0a0a] text-white'
        )}>

            {/* Background ambient glow effect */}
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">

                <button
                    onClick={() => navigate('/dashboard')}
                    className="guide-header group flex items-center gap-2 text-sm font-bold opacity-60 hover:opacity-100 transition-opacity mb-12"
                >
                    <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:-translate-x-1 transition-transform">
                        <ArrowLeft size={16} />
                    </div>
                    Back to Dashboard
                </button>

                {/* ── HEADER SECTION ── */}
                <div className="guide-header mb-24 border-b border-white/10 pb-12">
                    <div className="flex items-center gap-6 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.2)]">
                            <Zap size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-2">
                                FanBack <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Mastery</span>
                            </h1>
                        </div>
                    </div>
                    <p className="text-xl font-medium opacity-60 max-w-2xl">
                        Complete operational guide. Master your community infrastructure in minutes.
                    </p>
                </div>

                {/* ── TIMELINE LAYOUT (Replaces Grid) ── */}
                <div className="relative pl-8 md:pl-0 space-y-24">

                    {/* Vertical Timeline Line (Hidden on small screens, centers on desktop) */}
                    <div className="absolute left-[15px] md:left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-white/10 to-transparent" />

                    {/* Feature 1: The Prioritized Inbox */}
                    <section className="guide-section relative md:pl-32">
                        {/* Timeline Node */}
                        <div className="absolute left-[-21px] md:left-9 top-2 w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)] z-10" />

                        <div className="flex items-center gap-4 mb-4">
                            <Inbox size={28} className="text-orange-500" />
                            <h4 className="text-2xl font-bold">The Prioritized Inbox</h4>
                        </div>
                        <p className="text-base font-medium opacity-70 leading-relaxed mb-6 max-w-2xl">
                            FanBack extracts only your comments from linked platforms and organizes them. We filter out the noise so you only see the data that matters most to your community growth.
                        </p>
                        <div className="flex gap-4 text-sm font-medium">
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400">Anti-Spam</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400">Signal-to-Noise Ratio</span>
                        </div>
                    </section>

                    {/* Feature: AI Comment Classification */}
                    <section className="guide-section relative md:pl-32">
                        {/* Timeline Node - Emerald/Teal vibe */}
                        <div className="absolute left-[-21px] md:left-9 top-2 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)] z-10" />

                        <div className="flex items-center gap-4 mb-4">
                            <Tag size={28} className="text-emerald-500" />
                            <h4 className="text-2xl font-bold">AI Comment Classification</h4>
                        </div>
                        <p className="text-base font-medium opacity-70 leading-relaxed mb-6 max-w-2xl">
                            Every incoming comment is instantly analyzed by Gemini AI. FanBack automatically assigns tactical tags like <span className="text-emerald-400">Questions</span>, <span className="text-blue-400">Feedback</span>, or <span className="text-red-400">Spam</span>, allowing you to instantly filter your dashboard and focus on high-value fan interactions.
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm font-medium">
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                Automatic Tagging
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                Zero-Latency Sorting
                            </div>
                        </div>
                    </section>

                    {/* Feature: Reliability & Fail-Safes */}
                    <section className="guide-section relative md:pl-32">
                        <div className="absolute left-[-21px] md:left-9 top-2 w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.6)] z-10" />

                        <div className="flex items-center gap-4 mb-4">
                            <ShieldAlert size={28} className="text-amber-500" />
                            <h4 className="text-2xl font-bold">Data Integrity & Fail-Safes</h4>
                        </div>
                        <p className="text-base font-medium opacity-70 leading-relaxed mb-6 max-w-2xl">
                            FanBack prioritizes your data safety. If an AI classification ever fails due to a network hiccup or Google servers temporarily unavailabel, the comment is still saved securely. Simply look for the <span className="text-amber-500">All</span> filter tab and you will see all your unsorted comments. After a few minutes click the <span className="text-amber-500">Classify</span> button for a manual AI re-classify and the comments will be re-analyzed and put in their respective filte tab.
                        </p>
                    </section>

                    {/* Feature 2: AI Smart Replies */}
                    <section className="guide-section relative md:pl-32">
                        <div className="absolute left-[-21px] md:left-9 top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.6)] z-10" />

                        <div className="flex items-center gap-4 mb-4">
                            <Cpu size={28} className="text-primary" />
                            <h4 className="text-2xl font-bold">AI Smart Replies</h4>
                        </div>
                        <p className="text-base font-medium opacity-70 leading-relaxed mb-6 max-w-2xl">
                            Our AI analyzes comment tone and drafts personalized responses instantly. Never type identical replies again.
                        </p>

                        {/* Subtle List instead of a box */}
                        <ul className="space-y-4 text-sm max-w-xl">
                            <li className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary"><Sparkles size={16} /></div>
                                <span className="opacity-80">Click the Sparkle to generate a draft.</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">✏️</div>
                                <span className="opacity-80">Click the text box to manually override.</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500"><Send size={16} className="rotate-45" /></div>
                                <span className="opacity-80">Hit Send to execute the post.</span>
                            </li>
                        </ul>
                    </section>

                    {/* Feature: Real-time Translation */}
                    <section className="guide-section relative md:pl-32">
                        {/* Timeline Node - Purple for a new vibe */}
                        <div className="absolute left-[-21px] md:left-9 top-2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)] z-10" />

                        <div className="flex items-center gap-4 mb-4">
                            <Languages size={28} className="text-purple-500" />
                            <h4 className="text-2xl font-bold">Global Communication</h4>
                        </div>
                        <p className="text-base font-medium opacity-70 leading-relaxed mb-6 max-w-2xl">
                            Break language barriers instantly. FanBack detects foreign comments and provides one-tap AI translation, ensuring your brand resonates with every fan, regardless of their location.
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm font-medium">
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                Context-Aware
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                Original Preservation
                            </div>
                        </div>
                    </section>

                    {/* Feature 3: Mass Reply & Security */}
                    <section className="guide-section relative md:pl-32">
                        <div className="absolute left-[-21px] md:left-9 top-2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] z-10" />

                        <div className="flex items-center gap-4 mb-4">
                            <Layers size={28} className="text-blue-500" />
                            <h4 className="text-2xl font-bold">Mass Reply & Security Protocol</h4>
                        </div>
                        <p className="text-base font-medium opacity-70 leading-relaxed mb-8 max-w-2xl">
                            Mass reply to your fans at once without sounding like a robot. Highlight comments to trigger the Mass Reply bar and click the sparkle button for AI generations that sounds just like you.
                        </p>

                        {/* Security Callout styled like a system alert, not a grid card */}
                        <div className="border-l-2 border-primary pl-6 py-2 max-w-2xl">
                            <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs mb-3">
                                <ShieldAlert size={16} /> Safety Protocol Active
                            </div>
                            <p className="text-sm font-medium opacity-80 leading-relaxed">
                                FanBack utilizes a <strong>Smart Delay protocol</strong>. Instead of instantly dumping replies and triggering platform API bans, we stagger deployments at random 2-5 second intervals, mimicking organic human input.
                            </p>
                        </div>
                    </section>

                    {/* Feature 4: Navigation HUD */}
                    <section className="guide-section relative md:pl-32">
                        <div className="absolute left-[-21px] md:left-9 top-2 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)] z-10" />

                        <div className="flex items-center gap-4 mb-6">
                            <Fingerprint size={28} className="text-indigo-500" />
                            <h4 className="text-2xl font-bold">Interface Navigation</h4>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 max-w-3xl">
                            <div>
                                <h5 className="font-bold flex items-center gap-2 mb-2"><Search size={16} className="text-primary" /> Stealth HUD</h5>
                                <p className="text-sm opacity-70">Long-press any filter tab to summon tactical descriptions.</p>
                            </div>
                            <div>
                                <h5 className="font-bold flex items-center gap-2 mb-2"><ExternalLink size={16} className="text-primary" /> Direct Access</h5>
                                <p className="text-sm opacity-70">Click the play button to watch source material inside the dashboard.</p>
                            </div>
                            <div>
                                <h5 className="font-bold flex items-center gap-2 mb-2"><RefreshCw size={16} className="text-primary" /> Batch Syncing</h5>
                                <p className="text-sm opacity-70">Data is pulled in blocks of 50 to optimize load times.</p>
                            </div>
                            <div>
                                <h5 className="font-bold flex items-center gap-2 mb-2"><Hash size={16} className="text-primary" /> Data Precision</h5>
                                <p className="text-sm opacity-70">Toggle Full Stats to bypass rounded numbers and view exact counts.</p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="guide-section mt-32 pb-20 text-center opacity-50 text-sm font-medium">
                    End of Documentation.
                </div>
            </div>
        </div>
    );
}