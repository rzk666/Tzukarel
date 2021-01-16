import React from 'react';
import styles from './square.module.scss';

const Square = ({ opacityTo, changeOpacity, squareStyle, children }) => {
    // const { background, width, height } = squareStyle;
    return (
    <div
        onClick={() => changeOpacity(opacityTo)}
        className={styles.square}
        // style={{ background, width, height }}
        style={squareStyle}
    >
        { children }
    </div>
)}

export default Square;