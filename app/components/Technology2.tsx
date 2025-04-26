import "./Technology.css";
import { motion, useTransform } from "framer-motion";
import { FaReact } from "react-icons/fa";

export default function Technology2(props) {
  const x = useTransform(
    props.scrollYProgress,
    [0, 1],
    [props.x.start, props.x.end]
  );

  const y = useTransform(
    props.scrollYProgress,
    [0, 1],
    [props.y.start, props.y.end]
  );

  return (
    <motion.div style={{ x, y }}>
      <div className="technologyContainer">
        <FaReact size={30} />
        {props.text}
      </div>
    </motion.div>
  );
}
