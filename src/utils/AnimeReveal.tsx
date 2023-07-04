interface Props {
  children: React.ReactNode;
}
import { motion as m } from "framer-motion";

const AnimeReveal = ({ children }: Props) => {
  return (
    <m.div
      initial={{
        y: 100,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 0.3,
      }}
    >
      {children}
    </m.div>
  );
};

export default AnimeReveal;
