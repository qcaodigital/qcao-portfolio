import styles from "./About.module.scss";
import { motion } from "framer-motion";
import img from "../../assets/imgs/portrait-desat.jpg";
import { transitions } from "./About.transitions";
import { Dispatch, SetStateAction } from "react";

interface AboutProps {
    navDirection: "up" | "down";
    isSubpathOpen: boolean;
    setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
}

export default function About({
    navDirection,
    isSubpathOpen,
    setIsSubpathOpen,
}: AboutProps) {
    return (
        <motion.section
            id={styles.About}
            initial={navDirection === "down" ? "top" : "bottom"}
            animate="animate"
            exit={navDirection === "down" ? "bottom" : "top"}
        >
            <motion.section id={styles.landing}>
                <motion.div
                    className={`${styles.img} ${
                        isSubpathOpen && styles.subpathOpen
                    }`}
                    style={{ backgroundImage: `url(${img})` }}
                    variants={transitions.transUp}
                ></motion.div>
                <motion.header variants={transitions.stagger}>
                    <motion.h1 variants={transitions.transUp}>
                        About Me
                    </motion.h1>
                    {/* eslint-disable-next-line */}
                    <motion.p variants={transitions.transUp}>//</motion.p>
                    <motion.h2 variants={transitions.transUp}>
                        I'm a full-stack web developer specializing in the MERN
                        stack. One year ago I left my career as an accomplished
                        business manager in the hospitality industry to pursue
                        becoming a developer.
                    </motion.h2>
                    <motion.button
                        variants={transitions.transUp}
                        className={styles.CTA}
                        onClick={() => setIsSubpathOpen((curr) => !curr)}
                    >
                        Read more
                    </motion.button>
                </motion.header>
            </motion.section>
            <section></section>
        </motion.section>
    );
}
