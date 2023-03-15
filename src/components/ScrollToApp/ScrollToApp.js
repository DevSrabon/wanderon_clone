import React, { useEffect, useState } from "react";
import "../../App.css"
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
    return (
			<>
				{showScrollApp && (
					<a
						rel="noreferrer"
						href="https://wa.me/01864361681"
						target={"_blank"}
						className="btn-position">
						<img
							src="https://www.wanderon.in/svg/call-icon/whatsapp.svg"
							alt=""
						/>
					</a>
				)}
			</>
		);
};

export default ScrollToApp;
