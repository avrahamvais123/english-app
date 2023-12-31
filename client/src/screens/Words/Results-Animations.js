import React, { useState, useEffect, useRef, forwardRef } from "react";
import styled from 'styled-components';
import { Flex } from '../../components/styledComponents';
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import "@fontsource/oswald";
import "@fontsource/anton";
import "@fontsource/chela-one";
import { useUpdateEffect } from 'react-use';


const primaryColor = '#4e2623';
const sconedColor = '#c28156';
const greenColor = '#08bf76';
const redColor = '#ac2525';
const brownColor = '#8A5142';

const strokeWord = '#FFFAF1';
const sizeWord = 5;
const strokeResults = sconedColor;
const sizeResults = 2;


const Word = styled(Flex)`
  font-family: 'anton';
  //font-family: 'MatadorEn-Black';
  direction: ltr;
  height: fit-content;
  color: ${primaryColor};
  align-items: center;
  justify-content: center;
  font-size: 43px;
  font-weight: bold;
  letter-spacing: 2px;
`;
const AnimatedSquare = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  //background: red;
  background: transparent url(${prop => prop.url}) center center / 100% 100% no-repeat;
`;



export function AnimatedSquareNum({ count, isCorrect, color, url, isChoice, setIsExploding, children }) {
    const squareRef = useRef(null);
    const shouldAnimate = count === 0 && isCorrect;
    const duration = .5;
    const times = [0, 0.25, 0.75, 1];
    const stepOfAnim = duration * 1000 / times.length;


    useUpdateEffect(() => {
        const timer = setTimeout(() => {
            shouldAnimate && setIsExploding(prev => !prev);
            console.log('האנימציה הגיעה לשלב השלישי!');
        }, stepOfAnim * 2 - stepOfAnim); // התזמן לשלב השלישי של האנימציה

        return () => clearTimeout(timer); // ביטול הטיימר אם הקומפוננטה מוסרת לפני שהטיימר מסתיים
    }, [shouldAnimate]);


    const variants = {
        hidden: {
            scale: 1,
            rotate: 0,
        },
        visible: {
            scale: [1, 2, 2, 1],
            rotate: [0, 0, 360, 360],
            transition: {
                scale: {
                    duration: duration,
                    ease: "linear",
                    times: times
                },
                rotate: {
                    type: "spring",
                    stiffness: 500,
                    damping: 20,
                    mass: 2,
                    restSpeed: 2,
                    restDelta: 0.01,
                    delay: duration / 2  // add this line
                },
            },
        },
        exit: {
            scale: 1,
            rotate: 0,
        }
    };

    function onTap(event, info) {
        console.log(info.point.x, info.point.y)
    }


    return (
        <AnimatedSquare
            onTap={onTap}
            url={url}
            variants={variants}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            exit="exit"
        >
            {children}
        </AnimatedSquare>
    );
};

export const AnimatedWord = forwardRef(({ children }, ref) => {
    const [key, setKey] = useState(children);

    useEffect(() => {
        setKey(children);
    }, [children]);

    const variants = {
        hidden: { y: 100 },
        visible: i => ({
            y: 0,
            transition: {
                delay: i * 0.04,
                duration: 0.3,
                ease: "easeOut",
            },
        }),
    };

    return (
        <Word ref={ref} key={key}>
            {children.split("").map((letter, i) => (
                <motion.span
                    key={i}
                    custom={i}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                >
                    {letter}
                </motion.span>
            ))}
        </Word>
    );
});


