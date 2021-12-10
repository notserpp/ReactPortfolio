
import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import Perf from 'react-addons-perf'; // ES6


const MainBackground = () => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const vantaRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                showDots: false,
                minHeight: 1000,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: "#ff001b",
                backgroundColor: "#212529",
                forceAnimate: true

            }));
        }
    }
        , [vantaEffect])

    return (
        <div className="bg-image" ref={vantaRef}></div>
    )
}
export default MainBackground