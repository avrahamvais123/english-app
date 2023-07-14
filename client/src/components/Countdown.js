import React, { useEffect } from 'react';


function Countdown({ count, onCountChange, color }) {
    useEffect(() => {
        const intervalId = setInterval(() => {
            onCountChange((currentCount) => {
                if (currentCount === 0) {
                    clearInterval(intervalId);
                    return 0;
                }
                return currentCount - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [onCountChange, count]); // count added to dependencies

    return (
        <span
            style={{
                color: count >= 5 ? (color || 'white') : 'red',
                fontSize: count >= 5 ? '25px' : '35px',
                fontWeight: 'bold'
            }}
        >
            {count}
        </span>
    );
}

export default Countdown;