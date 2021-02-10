import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

export default function useBrowserHistory() {
    const history = useHistory();
    const [browserHistory, setBrowserHistory] = useState<string[]>([]);

    useEffect(() => {
        if (
            browserHistory[browserHistory.length - 1] !==
            history.location.pathname
        ) {
            setBrowserHistory([...browserHistory, history.location.pathname]);
        }
    }, [history.location.pathname, browserHistory]);

    return browserHistory;
}
