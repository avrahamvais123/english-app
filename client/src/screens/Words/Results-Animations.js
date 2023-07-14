import React, { useState, useEffect, useRef, forwardRef } from "react";
import styled from 'styled-components';
import anime from 'animejs';
import { Flex } from '../../components/styledComponents';
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import "@fontsource/oswald";
import "@fontsource/anton";
import "@fontsource/chela-one";


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
const SquareNum = styled(Flex)`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  color: ${prop => prop.color};
  transition: .1s;
  background: transparent url(${prop => prop.url}) center center / 100% 100% no-repeat;
`;


export function AnimatedSquareNum({ count, isCorrect, color, url, isChoice, setIsExploding, children }) {
    const squareRef = useRef(null);
    const shouldAnimate = count === 0 && isCorrect;

    useEffect(() => {
        let timeline = gsap.timeline();

        if (shouldAnimate && isChoice) {
            timeline.to(squareRef.current, { duration: 0.2, scale: 1.5, ease: "power2.inOut" })
                .add(() => setIsExploding(true))
                .to(squareRef.current, { duration: 0.3, rotation: 360, ease: "power2.inOut" })
                .to(squareRef.current, { duration: 0.1, scale: 1, ease: "power2.inOut" });
        } else {
            gsap.killTweensOf(squareRef.current);
            gsap.set(squareRef.current, { clearProps: "transform" });
        }
    }, [shouldAnimate, setIsExploding, isChoice]);

    return (
        <SquareNum
            ref={squareRef}
            style={{ color, background: `transparent url(${url}) center center / 100% 100% no-repeat` }}
        >
            {children}
        </SquareNum>
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


{/* text-shadow: 
  -${sizeWord}px -${sizeWord}px ${strokeWord}, 
    -${sizeWord}px 0px ${strokeWord}, 
    -${sizeWord}px ${sizeWord}px ${strokeWord}, 
    0px -${sizeWord}px ${strokeWord}, 
    0px ${sizeWord}px ${strokeWord}, 
    ${sizeWord}px -${sizeWord}px ${strokeWord}, 
    ${sizeWord}px 0px ${strokeWord}, 
    ${sizeWord}px ${sizeWord}px ${strokeWord}; */}