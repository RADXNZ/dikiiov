'use client';
import type React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

type GradientBackgroundProps = React.ComponentProps<'div'> & {
  gradients?: string[];
  animationDuration?: number;
  animationDelay?: number;
  overlay?: boolean;
  overlayOpacity?: number;
};

const Default_Gradients = [
  "linear-gradient(135deg, #0000ff 0%, #0033cc 100%)",
  "linear-gradient(135deg, #0000dd 0%, #3300cc 100%)",
  "linear-gradient(135deg, #0011cc 0%, #0000ff 100%)",
  "linear-gradient(135deg, #1a00ff 0%, #0044dd 100%)",
  "linear-gradient(135deg, #0000ff 0%, #0033cc 100%)",
];

export function GradientBackground({
  children,
  className = '',
  gradients = Default_Gradients,
  animationDuration = 8,
  animationDelay = 0.5,
  overlay = false,
  overlayOpacity = 0.3,
}: GradientBackgroundProps) {
  return (
    <div className={cn('w-full relative min-h-screen overflow-hidden', className)} style={{ zIndex: 0 }}>
      <motion.div
        className="absolute inset-0"
        style={{ background: gradients[0] }}
        animate={{ background: gradients }}
        transition={{
          delay: animationDelay,
          duration: animationDuration,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
      )}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
}
