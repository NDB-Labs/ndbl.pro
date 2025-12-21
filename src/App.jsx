import React, { useState, useEffect, useRef } from 'react';
import {
    Shield,
    Cpu,
    Code2,
    Globe,
    Layers,
    Lock,
    Zap,
    Smartphone,
    Database,
    Bot,
    ExternalLink,
    Github,
    CheckCircle2,
    Terminal,
    Server,
    Cloud,
    Monitor,
    Video,
    ChevronRight,
    Twitter,
    Linkedin,
    Mail,
    User,
    Star,
    Activity,
    History,
    Box,
    Trophy,
    Rocket,
    Gavel,
    Briefcase,
    ArrowRight
} from 'lucide-react';

/**
 * Helper component for animated counting effect
 */
const Counter = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    const match = value.match(/(\d+\.?\d*)(.*)/);
    const target = match ? parseFloat(match[1]) : 0;
    const suffix = match ? match[2] : '';

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, target, duration]);

    return (
        <span ref={elementRef}>
      {Number.isInteger(target) ? Math.floor(count) : count.toFixed(1)}
            {suffix}
    </span>
    );
};

const App = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const heroRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        const handleMouseMove = (e) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                setMousePos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const competencies = [
        {
            title: "Blockchain Development",
            description: "Full-cycle TVM & EVM development. High-performance smart contracts and infrastructure.",
            details: ["TON, Everscale, Venom (TVM)", "Solidity: Ethereum, BSC, Polygon", "TRON (TVM/EVM compatibility)", "L1 Blockchains from scratch"],
            icon: <Layers className="w-6 h-6 text-emerald-400" />
        },
        {
            title: "Full-Stack & High-Load",
            description: "Architecture for projects with millions of users and real-time processing.",
            details: ["High-load Backend architecture", "Scalable Frontend systems", "Microservices (Node.js)", "Real-time data streaming"],
            icon: <Zap className="w-6 h-6 text-emerald-400" />
        },
        {
            title: "Cross-Platform Solutions",
            description: "Non-native high-performance applications for all major OS platforms.",
            details: ["Mobile: iOS & Android (Cordova, Capacitor)", "Desktop: Win, Mac, Linux (Electron)", "Framework7 / UI Prototyping"],
            icon: <Smartphone className="w-6 h-6 text-emerald-400" />
        },
        {
            title: "AI & ML Engineering",
            description: "Integrating intelligence into your business processes and products.",
            details: ["AI/ML Agents development", "LLM Fine-tuning", "Advanced Prompt Engineering"],
            icon: <Bot className="w-6 h-6 text-emerald-400" />
        },
        {
            title: "Enterprise & Virtualization",
            description: "Complex software and platforms built with full virtualization focus.",
            details: ["Custom CRM/ERP systems", "VMware & VirtualBox infrastructure", "Legacy systems modernization"],
            icon: <Monitor className="w-6 h-6 text-emerald-400" />
        },
        {
            title: "Cybersecurity",
            description: "Proactive protection and vulnerability assessment for digital assets.",
            details: ["Blue Teaming & Defense", "Attack Vector Analysis", "Security Audits & Pentesting"],
            icon: <Shield className="w-6 h-6 text-emerald-400" />
        }
    ];

    const stats = [
        { label: "Proprietary Protocols", value: "4+" },
        { label: "Lines of R&D Code", value: "1.2M+" },
        { label: "Audited Contracts", value: "250+" },
        { label: "Networks Supported", value: "12+" }
    ];

    const achievements = [
        {
            label: "Startups Launched",
            value: "15+",
            icon: <Rocket className="w-5 h-5" />,
            desc: "Helping visionaries build business from absolute zero to scale."
        },
        {
            label: "Open Source Projects",
            value: "10+",
            icon: <Code2 className="w-5 h-5" />,
            desc: "Contributing to the global ecosystem with resilient protocols."
        },
        {
            label: "Hackathon Awards",
            value: "6",
            icon: <Trophy className="w-5 h-5" />,
            desc: "Top rankings in global Hackathons, Competitions, and CTF events."
        },
        {
            label: "Legal Expertise",
            value: "Pro",
            icon: <Gavel className="w-5 h-5" />,
            desc: "In-depth understanding of legal aspects in software & blockchain."
        }
    ];

    const lifecycle = [
        { step: "01", name: "Deep Analysis", desc: "Attack vector modeling and architecture planning." },
        { step: "02", name: "Prototyping", desc: "Low-level implementation in sandbox environments." },
        { step: "03", name: "Virtualization", desc: "Full-stack stress testing on VMware/VBox clusters." },
        { step: "04", name: "Deployment", desc: "Mainnet launch with continuous proactive monitoring." }
    ];

    const stack = [
        "JavaScript", "TypeScript", "Node.js", "Bun", "Deno", "Electron",
        "Solidity", "Ethereum", "TON", "Tron", "PostgreSQL", "MySQL",
        "C++", "React", "Svelte", "VMware", "VirtualBox", "Everscale", "Redis",
        "ESP32/ESP8266", "Arduino", "Atmel AVR", "Raspberry Pi"
    ];

    const team = [
        {
            name: "Andrei Nedobylskiy",
            role: "Founder & CTO",
            photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andrei",
            socials: { github: "https://github.com/nedobylskiy", twitter: "#", linkedin: "#" }
        },
        {
            name: "Vladislav Blagov",
            role: "Senior Frontend Dev",
            photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vladislav",
            socials: { github: "#", twitter: "#", linkedin: "#" }
        },
        {
            name: "Dmitry K.",
            role: "Middle Frontend Dev",
            photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry",
            socials: { github: "#", twitter: "#", linkedin: "#" }
        },
        {
            name: "Saveliy Chashin",
            role: "Security & QA Lead",
            photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Saveliy",
            socials: { github: "#", twitter: "#", linkedin: "#" }
        }
    ];

    const portfolio = [
        {
            name: "Translay.today",
            type: "Web Service",
            desc: "Advanced online translation engine.",
            link: "https://translay.today"
        },
        {
            name: "TriPylon Wallet",
            type: "Hardware/Software",
            desc: "Secure multi-currency wallet ecosystem.",
            link: "https://tripylon.io"
        },
        {
            name: "Monker.app",
            type: "AI Testing Service",
            desc: "Agentic AI automated testing system for functionality of websites, applications, and APIs.",
            link: "https://monker.app"
        },
        {
            name: "IZZZIO",
            type: "Blockchain Platform",
            desc: "Decentralized L1 ecosystem and high-performance framework.",
            link: "https://github.com/nedobylskiy/izzzio"
        },
        {
            name: "PolyID",
            type: "Digital Identity",
            desc: "Decentralized identification system built for privacy and scale.",
            link: "https://github.com/PolyID"
        },
        {
            name: "StarWave Protocol",
            type: "Protocol",
            desc: "Secure communication layer for distributed networks.",
            link: "https://github.com/starwave-protocol"
        },
        {
            name: "@tgconferencebot",
            type: "P2P Video Service",
            desc: "High-performance P2P video conferencing service in Telegram, operational even in restricted regions like Dubai and China.",
            link: "https://t.me/tgconferencebot"
        },
        {
            name: "Nemo Password Manager",
            type: "Security App",
            desc: "Self-hosted secure password manager for high-privacy environments.",
            link: "https://github.com/nedobylskiy/nemo-password-manager"
        }
    ];

    const partners = [
        "10101.art", "Carbajo Partners", "SVOI.dev", "Translay.today",
        "TriPylon.io", "Block-Chain.com", "Holder City", "Ergaki Resort"
    ];

    return (
        <div className="min-h-screen bg-[#081030] text-slate-200 font-sans selection:bg-emerald-500/30 scroll-smooth overflow-x-hidden">

            {/* Background Orbs & Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-blue-800/10 rounded-full blur-[100px]"></div>
            </div>

            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#081030]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-900/20 font-bold text-white transition-transform group-hover:scale-110">N</div>
                        <span className="text-xl font-bold tracking-tight text-white uppercase tracking-wider">NDB-Labs</span>
                    </div>
                    <div className="hidden md:flex space-x-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
                        <a href="#portfolio" className="hover:text-emerald-400 transition-colors">Portfolio</a>
                        <a href="#impact" className="hover:text-emerald-400 transition-colors">Impact</a>
                        <a href="#team" className="hover:text-emerald-400 transition-colors">Team</a>
                        <a href="#process" className="hover:text-emerald-400 transition-colors">Process</a>
                        <a href="#about" className="hover:text-emerald-400 transition-colors">Founder</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section with Spotlight & Grid Effect */}
            <section ref={heroRef} className="relative pt-56 pb-32 px-6 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">

                {/* Animated Grid Background */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <svg className="w-full h-full" width="100%" height="100%">
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Interactive Spotlight Overlay */}
                <div
                    className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.1), transparent 80%)`
                    }}
                ></div>

                {/* Scanner Line Animation */}
                <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent top-0 animate-[scan_8s_ease-in-out_infinite] z-20 pointer-events-none"></div>

                <div className="max-w-5xl mx-auto text-center relative z-30">
                    <div className="inline-flex items-center space-x-2 px-4 py-1.5 mb-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-sm animate-fade-in">
                        <Activity className="w-3 h-3 animate-pulse" />
                        <span>Operational R&D Laboratory</span>
                    </div>

                    {/* Title with Shimmer Effect */}
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-white leading-[1.0] relative group">
            <span className="inline-block transition-transform duration-500 group-hover:scale-[1.02]">
              Architecting <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 animate-[shimmer_5s_infinite_linear] bg-[length:200%_auto]">
                Resilient
              </span> Systems
            </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                        Specializing in high-performance TVM/EVM protocols, full-virtualization infrastructure, and advanced AI agent engineering.
                    </p>

                    <div className="flex flex-col items-center space-y-8">
                        <div className="flex flex-wrap justify-center gap-5">
                            <a href="mailto:contact@ndbl.pro" className="px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-[#081030] rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-2xl shadow-emerald-500/40 hover:-translate-y-1 inline-flex items-center space-x-2 overflow-hidden relative group/btn">
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500"></div>
                                <Mail className="w-4 h-4" />
                                <span>Contact Lab</span>
                            </a>
                            <a href="#portfolio" className="px-10 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-2xl font-black uppercase tracking-widest text-xs transition-all border border-white/10 text-white shadow-sm hover:-translate-y-1 inline-flex items-center space-x-2">
                                <Briefcase className="w-4 h-4" />
                                <span>Explore Portfolio</span>
                            </a>
                        </div>

                        <a
                            href="https://github.com/nedobylskiy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-emerald-400 transition-all duration-300"
                        >
              <span className="relative">
                or explore our GitHub
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </span>
                            <Github className="w-3 h-3 transition-transform group-hover:rotate-12" />
                        </a>
                    </div>
                </div>


                <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scan {
            0% { transform: translateY(0vh); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(90vh); opacity: 0; }
          }
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          @keyframes float {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(20px); }
            100% { transform: translateY(0) translateX(0); }
          }
        `}} />
            </section>

            {/* Stats Banner */}
            <section className="py-20 px-6 border-y border-white/5 bg-white/[0.01] relative z-40">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, i) => (
                        <div key={i}>
                            <div className="text-4xl font-black text-white mb-2">
                                <Counter value={stat.value} />
                            </div>
                            <div className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em]">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Competencies */}
            <section id="services" className="py-32 px-6 relative z-40">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Core Competencies</h2>
                        <div className="h-1.5 w-20 bg-emerald-500 rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {competencies.map((c, i) => (
                            <div key={i} className="group p-10 rounded-[2.5rem] bg-[#0e163b]/40 backdrop-blur-md border border-white/5 hover:bg-[#121d4d]/40 hover:border-emerald-500/30 transition-all duration-500 shadow-2xl shadow-black/20">
                                <div className="mb-8 p-4 bg-emerald-500/10 w-fit rounded-2xl group-hover:bg-emerald-500 group-hover:text-[#081030] transition-all duration-500">
                                    {c.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">{c.title}</h3>
                                <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">{c.description}</p>
                                <ul className="space-y-3">
                                    {c.details.map((detail, di) => (
                                        <li key={di} className="text-[11px] flex items-center text-slate-500 font-bold uppercase tracking-wide">
                                            <ChevronRight className="w-4 h-4 mr-2 text-emerald-500/50" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Legacy & Impact */}
            <section id="impact" className="py-32 px-6 relative overflow-hidden z-40">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 text-right">
                        <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Legacy & Impact</h2>
                        <div className="h-1.5 w-20 bg-emerald-500 rounded-full ml-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {achievements.map((item, i) => (
                            <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-emerald-500/[0.05] transition-all group shadow-black/10">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div className="text-3xl font-black text-white">
                                        {/\d/.test(item.value) ? <Counter value={item.value} /> : item.value}
                                    </div>
                                </div>
                                <h3 className="text-sm font-black text-white uppercase tracking-wider mb-2">{item.label}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-10 rounded-[2.5rem] bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/20 flex flex-col md:flex-row items-center gap-8 backdrop-blur-sm shadow-xl shadow-black/20">
                        <div className="p-5 bg-emerald-500/20 rounded-2xl">
                            <Briefcase className="w-10 h-10 text-emerald-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">Beyond pure development</h3>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                                We don't just write code. NDB-Labs provides comprehensive business engineering, helping founders navigate complex legal landscapes and building robust corporate foundations for high-tech ventures from scratch.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lab Workflow */}
            <section id="process" className="py-32 px-6 bg-emerald-500/[0.01] z-40 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Lab Workflow</h2>
                        <div className="h-1.5 w-20 bg-emerald-500 rounded-full mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {lifecycle.map((l, i) => (
                            <div key={i} className="relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all">
                                <div className="text-4xl font-black text-emerald-500/20 mb-6 group-hover:text-emerald-500/40 transition-colors leading-none">{l.step}</div>
                                <h3 className="text-lg font-bold text-white mb-2">{l.name}</h3>
                                <p className="text-slate-500 text-xs font-medium leading-relaxed">{l.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section id="portfolio" className="py-32 px-6 z-40 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-20">
                        <div>
                            <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Lab Portfolio</h2>
                            <div className="h-1.5 w-20 bg-emerald-500 rounded-full"></div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {portfolio.map((project, i) => (
                            <div key={i} className="flex flex-col p-10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-lg border border-white/5 hover:bg-white/[0.06] transition-all duration-500 shadow-xl shadow-black/10 group">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em]">{project.type}</span>
                                        <h3 className="text-2xl font-black mt-2 text-white group-hover:text-emerald-400 transition-colors">{project.name}</h3>
                                    </div>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-2xl text-slate-400 hover:bg-emerald-500 hover:text-[#081030] transition-all shadow-sm">
                                            {project.link.includes('github') ? <Github className="w-5 h-5" /> :
                                                project.link.includes('t.me') ? <Video className="w-5 h-5" /> :
                                                    <ExternalLink className="w-5 h-5" />}
                                        </a>
                                    )}
                                </div>
                                <p className="text-slate-400 text-sm font-medium flex-grow leading-relaxed mb-8">
                                    {project.desc}
                                </p>
                                {project.link && (
                                    <div className="text-[10px] font-mono text-emerald-500/40 truncate">
                                        {project.link.replace('https://', '')}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section id="team" className="py-32 px-6 z-40 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Engineering Team</h2>
                        <div className="h-1.5 w-20 bg-emerald-500 rounded-full"></div>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, i) => (
                            <div key={i} className="group flex flex-col items-center p-8 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:bg-emerald-500/[0.03] hover:border-emerald-500/20 transition-all duration-500 shadow-xl shadow-black/10">
                                <div className="relative mb-6">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-slate-900 p-1">
                                        <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden flex items-center justify-center border border-white/5">
                                            <img
                                                src={member.photo}
                                                alt={member.name}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-2 right-2 bg-emerald-500 text-[#081030] p-2 rounded-xl shadow-lg shadow-emerald-500/20">
                                        <Terminal className="w-4 h-4" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-6">{member.role}</p>

                                <div className="flex space-x-4">
                                    <a href={member.socials.github} className="p-2 bg-white/5 rounded-xl text-slate-500 hover:text-white hover:bg-white/10 transition-all">
                                        <Github className="w-4 h-4" />
                                    </a>
                                    <a href={member.socials.linkedin} className="p-2 bg-white/5 rounded-xl text-slate-500 hover:text-white hover:bg-white/10 transition-all">
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                    <a href={member.socials.twitter} className="p-2 bg-white/5 rounded-xl text-slate-500 hover:text-white hover:bg-white/10 transition-all">
                                        <Twitter className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section id="stack" className="py-32 px-6 z-40 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="p-16 rounded-[3.5rem] bg-emerald-500/[0.02] border border-white/5 text-center backdrop-blur-sm relative overflow-hidden shadow-xl shadow-black/20">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Box className="w-48 h-48 text-emerald-500" />
                        </div>
                        <h2 className="text-2xl font-black text-white mb-12 uppercase tracking-[0.2em]">Technology Stack</h2>
                        <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-3">
                            {stack.map((item, i) => (
                                <span key={i} className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 text-[10px] md:text-xs font-black uppercase tracking-wide hover:border-emerald-500/50 hover:text-emerald-400 transition-all cursor-default text-center">
                  {item}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Partners & Network */}
            <section className="py-32 px-6 bg-emerald-500/[0.01] border-y border-white/5 z-40 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-xl font-black text-emerald-500/60 uppercase tracking-[0.4em] mb-4 leading-none">Strategic Network</h2>
                        <div className="h-px w-32 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {partners.map((partner, i) => (
                            <div key={i} className="group flex items-center justify-center p-6 md:p-8 bg-white/[0.03] backdrop-blur-md rounded-[1.5rem] border border-white/5 hover:border-emerald-500/40 hover:bg-emerald-500/[0.05] transition-all duration-500 shadow-xl shadow-black/20">
                <span className="text-xs md:text-sm font-black tracking-[0.15em] text-slate-300 group-hover:text-emerald-400 uppercase transition-colors text-center leading-tight">
                  {partner}
                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section id="about" className="py-32 px-6 relative z-40">
                <div className="max-w-5xl mx-auto rounded-[3.5rem] bg-gradient-to-br from-emerald-600 to-teal-800 p-12 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-emerald-900/40">
                    <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[80%] bg-emerald-400 rounded-full blur-[100px] opacity-20"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="relative">
                            <div className="w-56 h-56 rounded-full bg-black/20 p-2 backdrop-blur-md">
                                <div className="w-full h-full rounded-full bg-emerald-500 flex items-center justify-center overflow-hidden">
                                    <Terminal className="w-24 h-24 text-emerald-100" />
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-3xl shadow-2xl">
                                <Shield className="w-8 h-8 text-emerald-600" />
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">Founder's Note</h2>
                            <p className="text-emerald-50/90 leading-relaxed mb-8 text-lg font-medium italic">
                                "I believe that complex problems deserve elegant, low-level solutions. My goal is to push the boundaries of decentralized technologies while maintaining the highest standards of security and performance."
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-[10px] font-black uppercase tracking-widest">
                                <div className="flex items-center space-x-3 px-4 py-2 bg-black/20 rounded-xl border border-white/10">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                                    <span>Lead Developer</span>
                                </div>
                                <div className="flex items-center space-x-3 px-4 py-2 bg-black/20 rounded-xl border border-white/10">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                                    <span>Security Expert</span>
                                </div>
                                <div className="flex items-center space-x-3 px-4 py-2 bg-black/20 rounded-xl border border-white/10">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                                    <span>System Architect</span>
                                </div>
                                <div className="flex items-center space-x-3 px-4 py-2 bg-black/20 rounded-xl border border-white/10">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                                    <span>R&D Specialist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-32 px-6 text-center z-40 relative">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight uppercase text-center">Start Your R&D <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Journey</span></h2>
                    <p className="text-slate-400 mb-12 text-lg font-medium">Have a complex technical challenge? Let's engineer a solution together.</p>
                    <a href="mailto:contact@ndbl.pro" className="inline-flex items-center space-x-3 px-12 py-5 bg-emerald-500 hover:bg-emerald-400 text-[#081030] rounded-[2rem] font-black uppercase tracking-widest text-xs transition-all shadow-2xl shadow-emerald-500/20 hover:-translate-y-1">
                        <Mail className="w-4 h-4" />
                        <span>Initialize Contact</span>
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 text-center border-t border-white/5 relative z-40">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="flex items-center space-x-3 mb-8">
                        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-black text-sm text-[#081030]">N</div>
                        <span className="font-black tracking-tight text-white uppercase tracking-widest">NDB-Labs</span>
                    </div>

                    <p className="text-slate-600 text-[10px] font-black tracking-[0.4em] uppercase mb-4">
                        Built with TypeScript & Resilience.
                    </p>

                    <div className="mb-6 space-y-1">
                        <p className="text-[9px] text-slate-800 font-black uppercase tracking-[0.2em]">
                            &copy; {new Date().getFullYear()} NDB-Labs R&D Laboratory.
                        </p>
                        <p className="text-[8px] text-slate-900 font-bold uppercase tracking-[0.1em] opacity-50">
                            NDB-Labs name is associated with Andrei Nedobylskii
                        </p>
                    </div>

                    <div className="flex space-x-6 text-[8px] font-black uppercase tracking-[0.3em] text-slate-800">
                        <a href="#" className="hover:text-emerald-400 transition-colors">Internal Audit</a>
                        <a href="#" className="hover:text-emerald-400 transition-colors">System Ops</a>
                        <a href="#" className="hover:text-emerald-400 transition-colors">Legal Framework</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
