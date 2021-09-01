import React from 'react';
import '../styles/button.css';

const Style = [                                     // Button Styles custormized
    'btn-white-box', 'btn-white-curve',
    'btn-black-box', 'btn-black-curve',
    'btn-transparent-box','btn-transparent-box'];

const Size = [                                      // Button Size custormized
    'btn-large', 
    'btn-medium',
    'btn-small'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) => {
    const checkButtonStyle = Style.includes(buttonStyle) ? buttonStyle : Style[3];  // Check Button Style

    const checkButtonSize = Size.includes(buttonSize) ? buttonSize : Size[1];       // Check Button Size

    return (
            <button
                className={`btns ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
    );
}
