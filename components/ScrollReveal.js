"use client";

import { motion } from "framer-motion";

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  y = 28,
  className = "",
  viewport = { once: true, amount: 0.15 },
  scale = 1,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewport}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delayChildren = 0.05,
  className = "",
  viewport = { once: true, amount: 0.15 },
  ...props
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  y = 24,
  duration = 0.6,
  className = "",
  scale = 1,
  ...props
}) {
  const itemVariants = {
    hidden: { opacity: 0, y, scale },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function ImageReveal({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  viewport = { once: true, amount: 0.15 },
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewport}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
