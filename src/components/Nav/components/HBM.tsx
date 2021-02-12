import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { navLinksType, navLinkType } from "../../../types";
import styles from "./HBM.module.scss";
import { transitions } from "./HBM.transitions";

interface HBMProps {
    navLinks: navLinksType;
}

export default function HBM({ navLinks }: HBMProps) {
    return (
        <motion.div
            className={styles.HBM}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div
                className={styles.background}
                variants={transitions.background}
            />
            <motion.ul variants={transitions.container}>
                {navLinks.map(
                    (link: navLinkType): JSX.Element => (
                        <motion.li
                            id={link.isActive ? styles.active : undefined}
                            className={styles.link}
                            key={link.label}
                        >
                            <Link to={link.pathname}>
                                <motion.span variants={transitions.text}>
                                    {link.label}
                                    <div className={styles.underline}></div>
                                </motion.span>
                            </Link>
                        </motion.li>
                    )
                )}
            </motion.ul>
        </motion.div>
    );
}
