import "./Technology.css";
import { motion, useTransform } from "framer-motion";
import { SiTypescript } from "react-icons/si";
export default function Technology4(props) {
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
        <SiTypescript size={30} />
        {props.text}
      </div>
    </motion.div>
  );
}
