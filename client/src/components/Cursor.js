import React from 'react';
import { styled } from 'styled-components';


const Cursor = styled.img.attrs(props => ({
    style: {
        top: `${props.top}px`,
        left: `${props.left}px`,
    },
}))`
    position: absolute;
    pointer-events: none; 
    width: 30px;
    height: 60px;
    z-index: 1000;
    filter: drop-shadow(-1px 1px 2px rgba(0, 0, 0, 0.3));
  `;


const Corsur = ({ top, left, src }) => {

    return (
        <>
            <Cursor
                top={top}
                left={left}
                src={src}
                alt="cursor"
            />
        </>
    );
}

export default Corsur;
