import React, { useState, useEffect } from 'react';
import { GrainOverlay } from './components/ui/grain-overlay';
import { SkillChip } from './components/ui/SkillChip';
import { useScrollDirection } from './hooks/use-scroll-direction';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { BackgroundGradientAnimation } from './components/ui/background-gradient-animation';

export default function App() {
  const scrollDir = useScrollDirection();
  const [loading, setLoading] = useState(true);

  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    // Prevent Brave/Chrome from automatically restoring scroll position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Artificial delay for the premium feel
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      setLoading(false);
    }, 3000);
    
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="relative selection:bg-white selection:text-black min-h-screen text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[1000] bg-black flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                scale: [0.9, 1, 1, 1.05],
                filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]
              }}
              transition={{ duration: 3, times: [0, 0.3, 0.7, 1], ease: "easeInOut" }}
              className="relative"
            >
              <img 
                src="/images/LOGO 3.png" 
                alt="OV Logo" 
                className="h-24 md:h-32 w-auto object-contain mix-blend-screen brightness-125"
              />
              <motion.div 
                className="absolute inset-0 bg-white blur-[40px] opacity-20"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        ) : (
          <>
            <BackgroundGradientAnimation
              containerClassName=""
              interactive={!isMobile}
              size="60%"
            />

            {/* 0.1 Grain Overlay (Global Texture) */}
            <GrainOverlay />

            {/* 3. Page Content (z:10) */}
            <div className="relative z-10 flex flex-col lg:flex-row p-0 lg:p-0 w-full min-h-screen">
        
        {/* Sidebar: Left (Fixed on Desktop, Top on Mobile) */}
        <aside className="lg:fixed lg:w-[35%] lg:h-screen lg:p-16 p-6 flex flex-col justify-between overflow-visible w-full">
          <div className="overflow-visible">
            {/* Logo Restoration */}
            <div className="group flex justify-start lg:-ml-[20px] overflow-visible whitespace-nowrap mb-8 lg:mb-12">
              <img 
                src="/images/LOGO 3.png" 
                alt="RIPTHEEARTH Logo" 
                className="h-20 lg:h-24 w-auto object-contain mix-blend-screen opacity-100 group-hover:scale-105 transition-all duration-500 block"
              />
            </div>

            <div className="mt-4 lg:mt-16">
              <h1 className="name-text text-[clamp(24px,10vw,40px)] lg:text-[48px] break-words leading-[0.9] tracking-tighter">
                Diki OV
              </h1>
              <p className="mt-4 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.12em] md:tracking-[0.15em] opacity-50 font-normal not-italic">
                AI Enthusiast & Vibe Coder
              </p>

            {/* Expertise Section — iOS 26 Liquid Glass Layout */}
            <div className="mt-12 flex flex-wrap justify-start lg:justify-center items-center gap-[6px] lg:gap-[10px] max-w-full lg:max-w-[600px] mx-auto lg:mx-auto bg-transparent">
              <SkillChip label="Web Developer" delay={0.1} />
              <SkillChip label="COPYWRITING" delay={0.2} />
              <SkillChip label="VISUAL DESIGN" delay={0.3} />
              <SkillChip label="AI AUTOMATION" delay={0.4} />
              <SkillChip label="AI AGENT ENG." delay={0.5} />
            </div>
            </div>

          </div>

          {/* Footer Metadata */}
          <div className="flex flex-col gap-12 mt-24 lg:mt-0 hidden lg:block">
            <span className="text-[12px] font-semibold tracking-[0.3em] uppercase opacity-70 font-mono text-white select-text cursor-text">
              RIPTHEEARTH©
            </span>
          </div>
        </aside>

        {/* Main Content: Right (Scrollable) */}
        <main className="lg:w-[65%] lg:ml-[35%] p-0 lg:p-16 lg:pt-32 flex flex-col w-full overflow-x-hidden">
          
          {/* Bio Section */}
          <section className="mt-8 lg:mt-12 mb-[60px] px-6 lg:px-0">
            <div className="bio-text max-w-full lg:max-w-[420px] space-y-6 text-[13px] leading-[1.8] lg:leading-[1.9] opacity-[0.9] lg:opacity-[0.85] font-normal text-white/90">
              <p className="font-semibold text-white mb-8 text-[15px] tracking-tight">
                Where aesthetic precision meets intelligent digital craftsmanship.
              </p>
              <p>
                I’m Diki OV, an AI Enthusiast, Creative Developer, and Vibe Coder focused on building intentional digital experiences through visual design, strategic copywriting, strategic automation, and modern development workflows. 
              </p>
              <p>
                My work combines sharp creative direction, compelling narrative thinking, and adaptive technology to create products that are not only visually refined, but purposefully engineered.
              </p>
              <p className="pt-6 border-t border-white/15 opacity-[0.9] italic text-[13px] text-white/90">
                "Technical precision is the foundation; aesthetic flow is the result."
              </p>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-[60px] px-4 lg:px-0">
            <div className="mb-8 text-[12px] font-mono opacity-100 font-bold tracking-widest uppercase text-white select-text cursor-text">Selected Projects</div>
            <div className="flex flex-col">
              <ProjectItem 
                category="AI ANALYTICS" 
                title="CIRCL" 
                description="Smart, privacy-first Instagram analytics. Track unfollowers and ghost accounts without ever sharing your password."
                href="https://circl-delta.vercel.app/"
              />
              <ProjectItem category="AI AUTOMATION" title="AGENT FLOW" description="Autonomous workflow orchestration for enterprise teams." />
              <ProjectItem 
                category="COPYWRITING" 
                title="SkillNaik" 
                description="Copywriting untuk meningkatkan pendaftaran kelas online SkillNaik." 
                image="/images/DUMMY_PROJECT_COPY.png"
                hasModal={true}
              />
              <ProjectItem 
                category="CONCEPT REDESIGN · LANDING PAGE" 
                title="WAZZME LAUNDRY" 
                description="Concept redesign landing page untuk bisnis laundry lokal — mencakup pricing system interaktif, direktori cabang dengan filter per kota, dan membership section."
                href="https://wazzme-4of3.vercel.app/"
              />
              <ProjectItem category="WEB EXPERIENCE" title="VIBE STUDIO" description="High-end immersive web experiences and digital storytelling." />
              <ProjectItem category="CREATIVE DIRECTION" title="RIPTHEEARTH® BRAND" description="Full brand identity and strategic digital positioning." />
            </div>
          </section>

          <section id="stack" className="mb-[60px] px-6 lg:px-0">
            <div className="mb-12 pb-4 border-b border-white/20 text-[10px] md:text-[12px] font-mono font-bold tracking-[0.25em] uppercase text-white select-text cursor-text">
              STACK & TOOLS
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              <StackCategory title="FRONTEND" tools={['React', 'TypeScript', 'Vite']} />
              <StackCategory title="STYLING & UI" tools={['Tailwind CSS', 'Framer Motion', 'Lucide React', '21st.dev']} />
              <StackCategory title="GRAPHICS" tools={['Three.js', 'WebGL']} />
              <StackCategory title="DEPLOYMENT" tools={['Vercel', 'Git']} />
              <StackCategory title="AI & DEV" tools={['Antigravity', 'Claude', 'Gemini']} />
              <StackCategory title="DESIGN" tools={['Figma', 'Canva', 'Google Stitch']} />
              <StackCategory title="AUTOMATION" tools={['n8n', 'Make', 'Zapier']} />
            </div>
          </section>

          {/* Info Section */}
          <section id="info" className="mb-[60px] px-4 lg:px-0">
             <div className="mb-12 text-[12px] font-mono opacity-100 font-bold tracking-widest uppercase text-white select-text cursor-text">Information</div>
             <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[24px] lg:gap-12">
                <div className="w-full">
                   <h4 className="font-bold text-sm uppercase mb-4 font-mono">Strategic Execution</h4>
                   <p className="text-[13px] opacity-60 leading-relaxed">
                    Scaling digital presence through design direction, AI-assisted development, and strategic execution. 
                  </p>
                </div>
                <div className="w-full">
                   <h4 className="font-bold text-sm uppercase mb-4 font-mono">Vibe Engineering</h4>
                   <p className="text-[13px] opacity-60 leading-relaxed">
                    Focusing on the intersection of technical precision and aesthetic flow. 
                  </p>
                </div>
             </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-[60px] px-6 lg:px-0">
             <div className="mb-12 text-[12px] font-mono opacity-100 font-bold tracking-widest uppercase text-white select-text cursor-text">FAQ</div>
             <div className="space-y-[20px] lg:space-y-4 px-4 lg:px-0">
                <div className="border-b border-current/10 pb-4">
                   <h4 className="font-bold text-[11px] lg:text-sm uppercase mb-1.5">How do you work?</h4>
                   <p className="text-[12px] lg:text-[13px] opacity-60">I combine strategic thinking with AI-powered execution — from concept to deployment. You bring the vision, I handle everything else: design, copy, build, and launch.</p>
                </div>
                <div className="border-b border-current/10 pb-4">
                   <h4 className="font-bold text-[11px] lg:text-sm uppercase mb-1.5">How long does a project take?</h4>
                   <p className="text-[12px] lg:text-[13px] opacity-60">It depends on the scope. We'll agree on a realistic timeline upfront — and I'll stick to it.</p>
                </div>
                <div className="border-b border-current/10 pb-4">
                   <h4 className="font-bold text-[11px] lg:text-sm uppercase mb-1.5">What makes you different?</h4>
                   <p className="text-[12px] lg:text-[13px] opacity-60">I operate at the intersection of AI, design, and strategy — faster delivery, sharper output, and lower cost than a full agency.</p>
                </div>
                <div className="border-b border-current/10 pb-4">
                   <h4 className="font-bold text-[11px] lg:text-sm uppercase mb-1.5">Do you work with clients outside Indonesia?</h4>
                   <p className="text-[12px] lg:text-[13px] opacity-60">Yes. I work remotely with clients across the globe. Project briefs and deliverables are handled clearly regardless of language barriers.</p>
                </div>
                <div className="border-b border-current/10 pb-4">
                   <h4 className="font-bold text-[11px] lg:text-sm uppercase mb-1.5">Can I request revisions?</h4>
                   <p className="text-[12px] lg:text-[13px] opacity-60">Absolutely. Every project includes revision rounds until you're satisfied with the result.</p>
                </div>
                <div className="border-b border-current/10 pb-4">
                   <h4 className="font-bold text-[11px] lg:text-sm uppercase mb-1.5">How do we get started?</h4>
                   <p className="text-[12px] lg:text-[13px] opacity-60">Simple — just reach out via email or Instagram. We'll have a quick chat about your needs and take it from there.</p>
                </div>
             </div>
          </section>

          {/* Contact Section - v6 Fix */}
          <section id="contact" className="mb-[60px] pt-24 border-t border-white/10 px-6 lg:px-0">
            <div className="mb-12 text-[12px] font-mono opacity-100 font-bold tracking-widest uppercase text-white select-text cursor-text">Contact</div>
            <Typewriter 
              text="LET’S BUILD SOMETHING." 
              className="text-[clamp(28px,9vw,64px)] font-bold uppercase tracking-tighter leading-[1.1] mb-16"
            />
            <div className="flex flex-col gap-4 font-mono">
              <a href="https://www.instagram.com/dikiiov/" target="_blank" className="text-[14px] md:text-[16px] font-medium opacity-100 text-white flex items-center gap-2 no-underline tracking-[0.05em] hover:underline transition-all">
                <Instagram size={18} />
                <span>INSTAGRAM ↗</span>
              </a>
              <a href="mailto:dickyoktafiansyah@gmail.com" className="text-[14px] md:text-[16px] font-medium opacity-100 text-white flex items-center gap-2 no-underline tracking-[0.05em] hover:underline transition-all">
                <Mail size={18} />
                <span>EMAIL ↗</span>
              </a>
            </div>

            {/* Mobile-Only Branding Footer */}
            <div className="mt-32 pt-12 border-t border-white/5 block lg:hidden text-center pb-12">
               <span className="text-[10px] font-semibold tracking-[0.3em] uppercase opacity-40 font-mono text-white">
                RIPTHEEARTH©
              </span>
            </div>
          </section>

            </main>
          </div>
          </>
      )}
    </AnimatePresence>
  </div>
);
}

function ProjectItem({ category, title, description, href = "#", image, hasModal = false }: { category: string, title: string, description?: string, href?: string, image?: string, hasModal?: boolean }) {
  const isExternal = href !== "#" && !hasModal;
  const linkProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (hasModal) {
      e.preventDefault();
      setIsModalOpen(true);
    } else if (href === "#") {
      e.preventDefault(); // Prevent jump to top for empty links
    }
  };

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <>
      <div className="group flex flex-col py-6 md:py-10 border-b border-white/10 hover:border-white/40 md:hover:scale-[1.02] transition-all duration-300 relative z-40">
        <div className="flex flex-col md:flex-row md:items-start justify-between w-full gap-2 md:gap-0">
          <div className="flex flex-col max-w-full md:max-w-[600px] select-text relative z-50">
            <span className="text-[9px] md:text-[10px] font-bold opacity-80 font-mono mb-1 cursor-text select-text uppercase relative z-[60]">
              {category}
            </span>
            <a href={href} onClick={handleClick} {...linkProps} className="inline-block w-fit">
              <h3 className="text-[18px] md:text-3xl font-bold uppercase tracking-tight md:group-hover:translate-x-4 transition-transform duration-500 relative inline-block mb-3 cursor-pointer">
                {title}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-current transition-all duration-500 group-hover:w-full" />
              </h3>
            </a>
            {description && (
              <p className="text-[13px] opacity-70 leading-relaxed md:group-hover:opacity-100 transition-opacity duration-500 md:group-hover:translate-x-4 select-text">
                {description}
              </p>
            )}
          </div>
          <a 
            href={href} 
            onClick={handleClick} 
            {...linkProps} 
            className="text-[8px] md:text-[9px] font-mono opacity-50 md:opacity-[0.35] group-hover:opacity-100 transition-opacity block md:hidden lg:block uppercase tracking-[0.1em] text-white cursor-pointer mt-1 md:mt-0"
          >
            VIEW PROJECT ↗
          </a>
        </div>
      </div>

      {/* Full-screen Modal */}
      <AnimatePresence>
        {isModalOpen && hasModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-[#0a0a0a]/95 backdrop-blur-sm flex items-center justify-center p-6 overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-[#0a0a0a] p-[40px] rounded-2xl w-full max-w-[900px] my-auto flex flex-col relative border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
              
              <div className="w-full rounded-xl overflow-hidden mb-8 border border-white/5">
                 <img src={image} alt={title} className="w-full h-auto object-contain" />
              </div>
              
              <div className="max-w-[700px]">
                <span className="text-[10px] font-bold opacity-50 font-mono mb-2 block uppercase tracking-widest">
                  {category}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
                  {title}
                </h2>
                <p className="text-sm md:text-base opacity-70 leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function StackCategory({ title, tools }: { title: string; tools: string[] }) {
  return (
    <div className="flex flex-col">
      <h4 className="flex items-center gap-3 text-[9px] md:text-[11px] font-mono uppercase font-normal text-white/[0.95] tracking-[0.3em] mb-[12px]">
        <span className="inline-block w-4 h-px bg-white/50 shrink-0"></span>
        <span>{title}</span>
      </h4>
      <div className="flex flex-wrap gap-[6px] md:gap-2">
        {tools.map((tool) => (
          <span 
            key={tool}
            className="inline-block px-[7px] py-[3px] md:px-4 md:py-1.5 border-[1.5px] border-white/90 rounded-full text-[8px] md:text-[10px] font-mono font-bold uppercase text-white bg-white/[0.12] tracking-[0.1em] hover:bg-white/25 hover:border-white transition-all duration-200 ease-in-out select-text whitespace-nowrap"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

function Typewriter({ text, className }: { text: string; className?: string }) {
  const characters = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0 }, // Sharp snap like a real typewriter
    },
  };

  return (
    <motion.h2
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {characters.map((char, i) => (
        <motion.span key={i} variants={childVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  );
}
