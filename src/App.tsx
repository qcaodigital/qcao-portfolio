import { Route, useLocation } from "react-router-dom";
import styles from "./App.module.scss";
import useViewport from "./components/hooks/useViewport";
import { viewportType } from "./components/hooks/useViewport";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import { AnimatePresence } from "framer-motion";
import HBM from "./components/Nav/components/HBM";
import { navLinksType } from "./types";
// import useBrowserHistory from "./components/hooks/useBrowserHistory";
import { useState, useEffect } from "react";

export default function App() {
    const viewport: viewportType = useViewport();
    const location = useLocation<Location>();
    // const browserHistory = useBrowserHistory();
    const [isHBMOpen, setIsHBMOpen] = useState<boolean>(false);
    const navLinks: navLinksType = [
        { path: "/", label: "home", isActive: true },
        { path: "/about", label: "about me", isActive: false },
        { path: "/work", label: "my work", isActive: false },
        { path: "/contact", label: "contact", isActive: false },
        { path: "/blog", label: "blog", isActive: false },
    ];

    return (
        <main className={styles.App}>
            <div className={styles.background} />
            <Nav setIsHBMOpen={setIsHBMOpen} isHBMOpen={isHBMOpen} />
            <AnimatePresence exitBeforeEnter>
                {!isHBMOpen && (
                    <Route
                        exact
                        path="/"
                        render={() => <Home key="home" viewport={viewport} />}
                    />
                )}
                {isHBMOpen && (
                    <HBM key="hbm" viewport={viewport} navLinks={navLinks} />
                )}
            </AnimatePresence>
        </main>
    );
}
