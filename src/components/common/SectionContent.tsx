import { motion } from "framer-motion";
import styles from "./SectionContent.module.scss";
import ScrollProgress from "./ScrollProgress";

interface SectionContentProps {
    children: JSX.Element;
    sectionRef: React.MutableRefObject<HTMLElement | null>;
    isSubpathOpen: boolean;
}

export default function SectionContent({
    isSubpathOpen,
    sectionRef,
    children,
}: SectionContentProps) {
    return (
        <>
            <motion.section
                animate="animate"
                initial="initial"
                ref={sectionRef}
                className={styles.sectionContent}
                style={{
                    overflowY: isSubpathOpen ? "scroll" : "hidden",
                }}
            >
                {children}
                {isSubpathOpen && (
                    <ScrollProgress
                        scrollContainerRef={sectionRef}
                        color="var(--highlight-color)"
                        width=".5rem"
                    />
                )}
            </motion.section>
        </>
    );
}
