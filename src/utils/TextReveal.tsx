interface Props {
  children: React.ReactNode;
}
import { motion as m } from "framer-motion";

const TextReveal = ({ children }: Props) => {
  return (
    <m.div
      initial={{
        x: "-100vw",
        opacity: 0,
      }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.4,
        delay: 0.25,
      }}
      viewport={{ once: false }}
    >
      {children}
    </m.div>
  );
};

export default TextReveal;
