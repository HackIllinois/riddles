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
                <Text fontSize="2xl" color={Colors.primaryTextColor}> 
                The Oracle of Delphi has revealed a sacred sequence, whispered by the gods. To unlock the next great prophecy, you must determine the 2025th number in the pattern.
                {<br />} {<br />}
                91, 43, 79, 31, 93, 49, 71, 33, …
                </Text>
            </QuestionText>

            <QuestionOutput qid="7" answers={answers} getSubmission={getSubmission} setData={setData} data={data}>
                <InputForm handleAnswerChange={handleAnswerChange} >
                    <Input id ="0" placeholder='Answer here...' size='lg' _placeholder={{ color: "white" }} />
                </InputForm>
            </QuestionOutput>
        </Box>
    )
};