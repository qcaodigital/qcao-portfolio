import styles from "./ScrollCTA.module.scss";
import { motion } from "framer-motion";
import transitionsFunc from "./ScrollCTA.transitions";
import { useState, useEffect } from "react";
import { allViewports } from "./../../hooks/useViewport";
import { viewportType } from "../../App/App";

interface ScrollCTAProps {
    viewport: viewportType;
}

interface transitionTypes {
    line: any;
    circle: any;
    text: any;
    textbox: any;
}

export default function ScrollCTA({ viewport }: ScrollCTAProps) {
    const [clicked, setClicked] = useState<boolean>(false);
    let transitions: transitionTypes = transitionsFunc(viewport, allViewports);

    useEffect(() => {
        transitions = transitionsFunc(viewport, allViewports);
    }, [viewport]);

    return (
        <motion.div
            id={styles.ScrollCTA}
            initial="initial"
            animate={clicked ? "animate" : "load"}
        >
            <motion.div
                variants={transitions.textbox}
                className={styles.textBox}
            >
                <motion.p variants={transitions.text}>scroll.</motion.p>
            </motion.div>
            <motion.div
                variants={transitions.circle}
                className={styles.circle}
                onClick={() => setClicked((curr) => !curr)}
            >
                <div className={styles.arrow} />
                <div className={styles.arrow} />
                <div className={styles.arrow} />
            </motion.div>
            <motion.div
                className={styles.line}
                variants={transitions.line}
            ></motion.div>
        </motion.div>
    );
}
