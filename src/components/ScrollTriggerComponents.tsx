import React, {useRef, useEffect} from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerComponents = () => {
    const h1ref = useRef(null);
    useEffect(() => {
        const el = h1ref.current;
        gsap.fromTo(el, {
            marginTop: '0px',
            opacity: '1',
            color: 'red',
        }, {
            marginTop: '100px',
            opacity: '0',
            color: 'white',
            duration: 2,
            scrollTrigger: {
                trigger: el,
                start: 'top center',
                markers: true,
                scrub: true,
                toggleActions: 'play none none none'
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

export default React.memo(ScrollTriggerComponents);
