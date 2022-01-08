import React from "react";
//Styles
import { Wrapper } from "../Button/Button.styles";

const Button = ({ text, callback }) => (
    <Wrapper type="button" onClick={callback}>
        {text}
    </Wrapper>
);

export default Button;