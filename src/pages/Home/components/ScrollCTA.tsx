import styles from "./ScrollCTA.module.scss";
import { transitions } from "./ScrollCTA.transitions";
import { motion } from "framer-motion";
import { viewportType } from "./../../../components/hooks/useViewport";
import Link from "../../../components/common/Link";

interface ScrollCTAProps {
    viewport: viewportType;
    setDirection: (direction: string) => {};
}

export default function ScrollCTA({ viewport, setDirection }: ScrollCTAProps) {
    return (
        <motion.div
            id={styles.ScrollCTA}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div
                variants={transitions.textbox}
                className={styles.textBox}
            >
                <motion.p variants={transitions.text}>scroll.</motion.p>
            </motion.div>
            <Link to="/about" callBefore={() => setDirection("down")}>
                <motion.div
                    variants={transitions.circle}
                    className={styles.circle}
                >
                    <div className={styles.arrow} />
                    <div className={styles.arrow} />
                    <div className={styles.arrow} />
                </motion.div>
            </Link>
            <motion.div
                className={styles.line}
                variants={transitions.line}
            ></motion.div>
        </motion.div>
    );
}
