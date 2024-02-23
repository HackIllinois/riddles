import { Box, HStack, NumberInput, NumberInputField, Text, VStack } from "@chakra-ui/react";
import QuestionText from "../components/QuestionText";
import QuestionOutput from "../components/QuestionOutput";
import { QuestionProps } from "../routes/Questions";
import { useState } from "react";
import InputForm from "../components/InputForm";

function getSubmission(answers: Map<string, string>): string {
    const min = answers.get("min") ?? -1;
    const max = answers.get("max") ?? -1;
    const rv = `min:${min},max:${max}`;
    console.log(rv);
    return rv;
}

export default function Question7({ data, setData }: QuestionProps) {
    const [answers, setAnswers] = useState(new Map<string, string>());

    // Function to handle input value changes
    const handleAnswerChange = (id: string, value: string) => {
        console.log(id, value)
        setAnswers(answers.set(id, value));
    };

    return (
        <Box>
            <QuestionText>
                <Text fontSize="2xl">
                    In a calendar year, what is the minimum and maximum Friday the 13ths that can occur?
                </Text>
            </QuestionText>

            <QuestionOutput qid="7" answers={answers} getSubmission={getSubmission} setData={setData} data={data}>
                <InputForm handleAnswerChange={handleAnswerChange} >
                    <VStack>
                        <HStack>
                            <Text fontSize="lg"> Min: </Text>
                            <NumberInput> <NumberInputField id="min"/> </NumberInput>
                        </HStack>
                        <HStack>
                            <Text fontSize="lg"> Max: </Text>
                            <NumberInput> <NumberInputField id="max"/> </NumberInput>
                        </HStack>
                    </VStack>
                </InputForm>
            </QuestionOutput>
        </Box>
    )
};