import styles from "./Sub.module.scss";

interface SubProps {
    id: string;
    heading: string;
    children: React.ReactNode;
}

export default function Sub({ id, heading, children }: SubProps) {
    return (
        <section id={styles[id]} className={styles.Sub}>
            <header>
                <h3>
                    <span>0{id}</span>
                    {heading}
                </h3>
            </header>
            <div className={styles.content}>{children}</div>
        </section>
    );
}
