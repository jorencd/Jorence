import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimateOnScroll({ children, delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // 👈 animate every time
    threshold: 0.1,     // trigger when 10% is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default AnimateOnScroll;
