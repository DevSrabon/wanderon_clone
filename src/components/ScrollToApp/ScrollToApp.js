import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
const ScrollToApp = () => {
	const [showScrollApp, setShowScrollApp] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => { 

            if (window.scrollY > 100) {
                setShowScrollApp(true);
            } else {
                setShowScrollApp(false);
            }
        })
	}, []);
	return <>{showScrollApp && <BsWhatsapp className="btn-position"/>}</>;
};

export default ScrollToApp;
