import "./Technology.css";
import { motion, useTransform } from "motion/react";
import { RiRemixRunFill } from "react-icons/ri";

export default function Technology({
  text,
  scrollYprogress,
  x,
  y,
  Tech_icon,
}: {
  text: string;
  scrollYprogress: any;
  x: { start: string; end: string };
  y: { start: string; end: string };
  Tech_icon: React.ComponentType | null;
}) {
  const a = useTransform(scrollYprogress, [0, 1], [x.start, x.end]);
  const b = useTransform(scrollYprogress, [0, 1], [y.start, y.end]);

  return (
    <motion.div style={{ x: a, y: b }}>
      <div className="technologyContainer">
        {Tech_icon && <Tech_icon className="technologyIcon" />}
        {text}
      </div>
    </motion.div>
  );
}
