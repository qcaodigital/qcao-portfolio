import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { navLinksType, navLinkType } from "../../../types";
import { viewportType } from "./../../hooks/useViewport";
import styles from "./HBM.module.scss";
import { transitions } from "./HBM.transitions";

interface HBMProps {
    viewport: viewportType;
    navLinks: navLinksType;
}

export default function HBM({ viewport, navLinks }: HBMProps) {
    return (
        <motion.div
            className={styles.HBM}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.ul variants={transitions.background}>
                {navLinks.map(
                    (link: navLinkType): JSX.Element => (
                        <li className={styles.link} key={link.label}>
                            <Link to={link.path}>{link.label}</Link>
                        </li>
                    )
                )}
            </motion.ul>
        </motion.div>
    );
}
