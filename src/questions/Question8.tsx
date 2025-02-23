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
                <Text fontSize="2xl" alignSelf={"baseline"} textAlign={"left"} ml={40}>
                    Six travelers— Hermes (1 min), Perseus (3 min), Athena (8 min), Heracles (12 min), Zeus (15 min),
                    {<br />}
                    and Atlas (20 min) —must cross a crumbling bridge with a shared torch.
                    {<br />} {<br />}
                </Text>
                <Text fontSize="2xl">
                    What is the earliest time the last person/pair can cross?
                    {<br />}
                </Text>
                <Text fontSize="xl" alignSelf={"baseline"} textAlign={"left"} ml={40}>
                    Rules:
                    {<br />}
                    - Pairs cross at the slower traveler's speed.
                    {<br />}
                    - Every 15 minutes, Hera's whispers weaken the flame, increasing all remaining crossing times by 1.5x.
                    {<br />}
                    - Someone must return with the torch if others remain.
                </Text>
            </QuestionText>

            <QuestionOutput qid="8" answers={answers} getSubmission={getSubmission} setData={setData} data={data}>
                <InputForm handleAnswerChange={handleAnswerChange} >
                    <Input id ="8" placeholder='Answer here...' size='lg' _placeholder={{ color: "white" }} />
                </InputForm>
            </QuestionOutput>
        </Box>
    )
};