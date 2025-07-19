import { Variants, easeIn, easeOut } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25 } }
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

export const dropdownContentVariants: Variants = {
  hidden: { opacity: 0, y: -10, scaleY: 0, originY: 0 },
  visible: { opacity: 1, y: 0, scaleY: 1, originY: 0, transition: { duration: 0.2, ease: easeOut } },
  exit: { opacity: 0, y: -10, scaleY: 0, originY: 0, transition: { duration: 0.15, ease: easeIn } },
};

export const linkItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.15, ease: easeOut } },
};

export const verticalLineVariants: Variants = {
  initial: { height: '1.5rem', opacity: 0.7, x: 0 },
  expanded: { height: '2.5rem', opacity: 1, x: 0, transition: { duration: 0.2 } },
};

export const backgroundExpansionVariants: Variants = {
  initial: { height: '100%', borderRadius: '0.25rem' },
  expanded: { height: 'var(--full-height)', borderRadius: '0.25rem' },
};