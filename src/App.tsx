import styles from "./App.module.scss";
import { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import useViewport from "./components/hooks/useViewport";
import { viewportType } from "./components/hooks/useViewport";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import HBM from "./components/Nav/components/HBM";
import useNavState from "./components/hooks/useNavState";
import { useGetVisibleScreenHeight } from "./components/hooks/useGetVisibleScreenHeight";
import useWheelSwipe from "./components/hooks/useWheelSwipe";

export default function App() {
    const viewport: viewportType = useViewport();
    const [isHBMOpen, setIsHBMOpen] = useState<boolean>(false);
    const navLinks = useNavState();
    const location = useLocation();
    const screenHeight = useGetVisibleScreenHeight();
    const [direction, setDirection] = useWheelSwipe(["/", "/about"]);

    return (
        <main className={styles.App} style={{ height: screenHeight }}>
            <div className={styles.background} />
            <Nav setIsHBMOpen={setIsHBMOpen} isHBMOpen={isHBMOpen} />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Home
                                viewport={viewport}
                                exitDirection={direction}
                                setDirection={setDirection}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/about"
                        render={() => <About pathname={location.pathname} />}
                    />
                </Switch>
                <AnimatePresence>
                    {isHBMOpen && <HBM key="hbm" navLinks={navLinks} />}
                </AnimatePresence>
            </AnimatePresence>
        </main>
    );
}
