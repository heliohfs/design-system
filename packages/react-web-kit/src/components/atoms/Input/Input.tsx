import { InputContainer, InputContainerProps, InputElementProps, useInputFocus } from "@tecsinapse/react-core";
import React, { FC } from "react";
import { StyledWebTextInput } from "./styled";

export interface InputWebProps extends Omit<InputElementProps, "style">, InputContainerProps {}

export const Input: FC<InputWebProps> = ({
    label,
    labelColor,
    labelTypografy,
    labelStack,
    labelWeight,
    leftComponent,
    rightComponent,
    style,
    color,
    onFocus,
    onBlur,
    ...rest
}) => {
    
    const { 
        focused, 
        handleBlur, 
        handleFocus 
    } = useInputFocus(onFocus, onBlur)

    return (
        <InputContainer
            label={label}
            labelColor={labelColor}
            labelTypografy={labelTypografy}
            labelStack={labelStack}
            labelWeight={labelWeight}
            leftComponent={leftComponent}
            rightComponent={rightComponent}
            style={style}
            color={color}
            focused={focused}>
            <StyledWebTextInput 
                {...rest} 
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </InputContainer>
    )
}

export default Input