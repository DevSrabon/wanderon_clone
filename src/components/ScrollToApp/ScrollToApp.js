import React, { useEffect, useState } from "react";
const ScrollToApp = () => {
	const [showScrollApp, setShowScrollApp] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => { 

            if (window.scrollY > 400) {
                setShowScrollApp(true);
            } else {
                setShowScrollApp(false);
            }
        })
	}, []);
    return <>{showScrollApp && <div className="btn-position"><img src="https://www.wanderon.in/svg/call-icon/whatsapp.svg" alt="" /></div>}</>;
};

export default ScrollToApp;
