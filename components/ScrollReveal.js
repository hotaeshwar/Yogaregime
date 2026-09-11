"use client";

import { motion } from "framer-motion";

const defaultViewport = { once: true, amount: 0.08, margin: "0px 0px -30px 0px" };

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  y = 26,
  className = "",
  viewport = defaultViewport,
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
        ease: [0.22, 1, 0.36, 1],
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
  staggerDelay = 0.12,
  delayChildren = 0.05,
  className = "",
  viewport = defaultViewport,
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
  y = 30,
  duration = 0.65,
  className = "",
  scale = 0.96,
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
        ease: [0.22, 1, 0.36, 1],
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
  viewport = defaultViewport,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewport}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
