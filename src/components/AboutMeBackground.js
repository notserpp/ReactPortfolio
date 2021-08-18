import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'


const Background = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const vantaRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 1000,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: "#4B942C",
                backgroundColor: "#212529"

            }))
        }
    }, [vantaEffect])
    return <div className="bg-image" ref={vantaRef}></div>
}

export default Background
