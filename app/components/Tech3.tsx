import "./Technology.css";
import { motion, useTransform } from "framer-motion";
import { SiSolidity } from "react-icons/si";
export default function Technology3(props) {
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
        <SiSolidity size={30} />
        {props.text}
      </div>
    </motion.div>
  );
}
