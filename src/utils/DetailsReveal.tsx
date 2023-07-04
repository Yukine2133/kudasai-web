interface Props {
  children: React.ReactNode;
}
import { motion as m } from "framer-motion";

const DetailsReveal = ({ children }: Props) => {
  return (
    <m.div
      initial={{
        y: "-100",
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.3,
        duration: 0.7,
      }}
    >
      {children}
    </m.div>
  );
};

export default DetailsReveal;
