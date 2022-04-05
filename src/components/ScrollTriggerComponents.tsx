import React, {useRef, useEffect} from 'react';
import gsap from "gsap";
// @ts-ignore
import {ScrollTrigger} from "gsap/ScrollTrigger";

// @ts-ignore
gsap.registerPlugin(ScrollTrigger);

const ScrollTrigger = () => {
    const h1ref = useRef(null);
    useEffect(() => {
        const el = h1ref.current;
        gsap.fromTo(el, {
            color: '#FFFFFF'
        }, {
            color: 'red',
            duration: 1,
            scrollTrigger: {
                trigger: el,
            }
        })
    }, []);

    return (
        <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems:'center', backgroundColor: '#121212'}}>
            <h1 ref={h1ref}>
                ScrollTrigger
            </h1>
        </div>
    );
};

export default React.memo(ScrollTrigger);
