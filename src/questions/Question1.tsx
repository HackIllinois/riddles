import { Box, Text, Input } from "@chakra-ui/react";
import QuestionText from "../components/QuestionText";
import QuestionOutput from "../components/QuestionOutput";
import { useState } from "react";
import InputForm from "../components/InputForm";

function getSubmission (answers: Map<string, string>): string {
    return answers.get("q1") ?? "NONE";
}

export default function Question1() {
    const [answers, setAnswers] = useState(new Map<string, string>());

    // Function to handle input value changes
    const handleAnswerChange = (id: string, value: string) => {
        setAnswers(answers.set(id, value));
    };
    
    return (
        <Box>
            <QuestionText>
                <Text fontSize="4xl"> What is HackIllinois 2024's theme? </Text>
            </QuestionText>

            <QuestionOutput qid="q1" answers={answers} getSubmission={getSubmission}>
                <InputForm handleAnswerChange={handleAnswerChange}>
                    <Input id ="q1" placeholder='Enter your answer here!' size='lg' _placeholder={{ color: "white" }} />
                </InputForm>
            </QuestionOutput>
        </Box>
    )
};