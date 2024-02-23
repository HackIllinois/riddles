import { Box, Text, Input } from "@chakra-ui/react";
import QuestionText from "../components/QuestionText";
import QuestionOutput from "../components/QuestionOutput";
import { useState } from "react";
import InputForm from "../components/InputForm";
import { QuestionProps } from "../routes/Questions";

function getSubmission (answers: Map<string, string>): string {
    return answers.get("0") ?? "NONE";
}

export default function Question0( {setData, data}: QuestionProps ) {
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

            <QuestionOutput qid="0" answers={answers} getSubmission={getSubmission} setData={setData} data={data}>
                <InputForm handleAnswerChange={handleAnswerChange} >
                    <Input id ="0" placeholder='Enter your answer here!' size='lg' _placeholder={{ color: "white" }} />
                </InputForm>
            </QuestionOutput>
        </Box>
    )
};