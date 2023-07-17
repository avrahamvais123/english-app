import { motion } from 'framer-motion';

const spriteAnimation = {
    // Here you need to insert the actual values of your SVG path
    path: 'M0,100 C50,50 50,150 100,100',
};

const YourComponent = () => (
    <svg viewBox="0 0 100 100">
        <motion.path
            d={spriteAnimation.path}
            fill="transparent"
            stroke="black"
        >
            <motion.circle
                fill="blue"
                r={5}
                animate={{
                    // This will make your sprite move along the path
                    pathOffset: [0, 1],
                }}
                transition={{
                    // Define the duration, delay, etc. of the transition here
                    duration: 2,
                    repeat: Infinity,
                }}
            />
        </motion.path>
    </svg>
);

export default YourComponent;
