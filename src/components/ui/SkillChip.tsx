import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface SkillChipProps {
  label: string;
  className?: string;
  delay?: number;
}

export function SkillChip({ label, className, delay = 0 }: SkillChipProps) {
  return (
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      className={cn(
        "skill-card inline-block min-w-[160px] md:min-w-[160px] text-center px-[8px] py-[4px] md:px-[24px] md:py-[12px] rounded-[14px] relative group cursor-default",
        "bg-white/[0.07] backdrop-blur-[20px] saturate-[180%] border border-white/[0.20]",
        "shadow-[0_4px_24px_rgba(0,0,0,0.2),inset_0_1.5px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.15),inset_1px_0_0_rgba(255,255,255,0.1),inset_-1px_0_0_rgba(255,255,255,0.1)]",
        "hover:bg-white/[0.13] hover:border-white/[0.35] hover:scale-[1.04] hover:-translate-y-[2px]",
        "hover:shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1.5px_0_rgba(255,255,255,0.45),inset_0_-1px_0_rgba(0,0,0,0.1)]",
        "transition-all duration-300 ease-in-out overflow-hidden",
        "min-w-fit text-[8px] md:text-[10px]",
        className
      )}
    >
      {/* Top Highlight Shine (::before equivalent) */}
      <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-white/[0.15] to-white/[0.02] rounded-t-[14px] pointer-events-none" />
      
      {/* Left Edge Shine (::after equivalent) */}
      <div className="absolute top-[10%] left-0 w-px h-[80%] bg-gradient-to-b from-transparent via-white/[0.2] to-transparent pointer-events-none" />
      
      <span className="relative z-10 font-mono text-[10px] tracking-[0.12em] uppercase text-white/90 font-bold">
        {label}
      </span>
    </motion.span>
  );
}
