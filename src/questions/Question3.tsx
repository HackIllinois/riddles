import { Box, Text, Input } from "@chakra-ui/react";
import QuestionText from "../components/QuestionText";
import QuestionOutput from "../components/QuestionOutput";
import { useState } from "react";
import InputForm from "../components/InputForm";
import { QuestionProps } from "../routes/Questions";
import { Colors } from "../config";

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
                <Text fontSize="4xl" color={Colors.primaryTextColor}> The Oracle of Delphi has left behind a sacred scroll filled with thousands of identical symbols—except for one outlier. Among a vast sea of Greek letters, a single Ν is hidden. Can you find it? </Text>
                <Text fontSize="3xl" color={Colors.primaryTextColor}> MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM </Text>
            </QuestionText>

            <QuestionOutput qid="2" answers={answers} getSubmission={getSubmission} setData={setData} data={data}>
                <InputForm handleAnswerChange={handleAnswerChange} >
                    <Input id ="3" placeholder='Answer here...' size='lg' _placeholder={{ color: "white" }} />
                </InputForm>
            </QuestionOutput>
        </Box>
    )
};