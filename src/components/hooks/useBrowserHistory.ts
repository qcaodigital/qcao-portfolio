import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

//**Currently not in use**//
//Tracks the browser history in state
export default function useBrowserHistory(): string[] {
	const history = useHistory();
	const [browserHistory, setBrowserHistory] = useState<string[]>([]);

	useEffect(() => {
		if (browserHistory[browserHistory.length - 1] !== history.location.pathname) {
			setBrowserHistory([...browserHistory, history.location.pathname]);
		}
	}, [history.location.pathname, browserHistory]);

	return browserHistory;
}
