/*
The idea would be that, as GA recognizes the page reload of the root URL (yourwebsite.com/path/to/page) but not the URI
 (That is the part after the root: yourwebsite.com/path/to/page),
 the trick would be to make it check that URI everytime it reloads. And send that as the whole location of the page.

 from: https://dev.to/basileleroy/google-analytics-on-react-js-components-4d2a 
*/

import { useEffect, useState } from "react";
import ReactGA from "react-ga";

const useGaTracker = () => {
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!window.location.href.includes("localhost")) {
        ReactGA.initialize("G-LRBM62LDFM");
        }
        setInitialized(true);
    }, []);

    useEffect(() => {
        if (initialized) {
        ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }, [initialized]);
};

export default useGaTracker;