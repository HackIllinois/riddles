import { Box } from "@chakra-ui/react";
import React from "react";
import { ChangeEvent } from "react";

interface InputWrapperProps {
    children: React.ReactElement<HTMLInputElement>;
    handleAnswerChange: (id: string, value: string) => void;
}

export default function InputWrapper({ children, handleAnswerChange }: InputWrapperProps) {
    console.log("in wrapper!");
    return (
        <Box>
            {React.cloneElement(children as React.ReactElement, {
                onChange: (event: ChangeEvent<HTMLInputElement>) => handleAnswerChange(event.target.id, event.target.value)
            })}
        </Box>
    )
}