import { Box } from "@chakra-ui/react";
import React from "react";
import { ChangeEvent } from "react";

interface InputFormProps {
    children: React.ReactElement<HTMLInputElement>;
    handleAnswerChange?: (id: string, value: string) => void | undefined;
}

export default function InputForm({ children, handleAnswerChange }: InputFormProps) {
    return (
        <Box>
            {React.cloneElement(children as React.ReactElement, 
            {
                onChange: (event: ChangeEvent<HTMLInputElement>) => {handleAnswerChange ? handleAnswerChange(event.target.id, event.target.value) : console.log}
            })}
        </Box>
    )
}