import { Box, Text, Input } from "@chakra-ui/react";
import QuestionText from "../components/QuestionText";
import QuestionOutput from "../components/QuestionOutput";
import { useState } from "react";
import InputForm from "../components/InputForm";
import { QuestionProps } from "../routes/Questions";
import { Colors } from "../config";

function getSubmission (answers: Map<string, string>): string {
    return answers.get("4") ?? "NONE";
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
                <Text fontSize="4xl" color={Colors.primaryTextColor}> The Oracle inscribes a four-digit palindrome on a stone tablet. What is the probability that the chosen number is a multiple of 18? Express your answer as a simplified fraction in the format (?/??)</Text>
            </QuestionText>

            <QuestionOutput qid="4" answers={answers} getSubmission={getSubmission} setData={setData} data={data}>
                <InputForm handleAnswerChange={handleAnswerChange} >
                    <Input id ="4" placeholder='Answer here...' size='lg' _placeholder={{ color: "white" }} />
                </InputForm>
            </QuestionOutput>
        </Box>
    )
};