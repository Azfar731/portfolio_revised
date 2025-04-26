import "./Technology.css";
import { motion, useTransform } from "framer-motion";
import { RiRemixRunFill } from "react-icons/ri";
export default function Technology({
  text,
  scrollYprogress,
  x,
  y,
}: {
  text: string;
  scrollYprogress: any;
  x: { start: string; end: string };
  y: { start: string; end: string };
}) {
  const a = useTransform(scrollYprogress, [0, 1], [x.start, x.end]);

  const b = useTransform(scrollYprogress, [0, 1], [y.start, y.end]);

  return (
    <motion.div style={{ x: a, y: b }}>
      <div className="technologyContainer">
        <RiRemixRunFill size={30} />
        {text}
      </div>
    </motion.div>
  );
}
