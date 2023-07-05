interface Props {
  children: React.ReactNode;
}
import { motion as m } from "framer-motion";

const NavReveal = ({ children }: Props) => {
  return (
    <m.div
      initial={{
        y: -300,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.3,
        duration: 0.5,
      }}
      exit={{
        y: -300,
        opacity: 0,
      }}
    >
      {children}
    </m.div>
  );
};

export default NavReveal;
