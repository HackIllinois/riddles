import { Box, Text, Image, HStack, Input } from "@chakra-ui/react";
import QuestionText from "../components/QuestionText";
import QuestionOutput from "../components/QuestionOutput";
import { QuestionProps } from "../routes/Questions";
import InputForm from "../components/InputForm";
import { useState } from "react";

function getSubmission(answers: Map<string, string>): string {
    return answers.get("ans") ?? "NONE";
}

export default function Question6({data, setData}: QuestionProps) {
    const [answers, setAnswers] = useState(new Map<string, string>());

    // Function to handle input value changes
    const handleAnswerChange = (id: string, value: string) => {
        console.log(id, value)
        setAnswers(answers.set(id, value));
    };
    
    return (
        <HStack>
        <Box padding={"50px"}>
            <QuestionText>
                <Text fontSize="xl" alignSelf={"baseline"} textAlign={"left"}>
                    As you step into this enchanted chessboard, you find yourself facing a puzzle that demands the utmost cunning and foresight.
                    {<br />} {<br />}
                    Before you stands a chessboard adorned with 5 powerful Queens, each guarding their territory with regal authority. Your quest is to add 3 more Queens to the board, placing them strategically to maintain harmony among the royal guardians.
                    {<br />} {<br />}
                    Determine the locations of these 3 new Queens and submit their positions in (increasing) alphanumeric order.
                </Text>
            </QuestionText>

            <QuestionOutput qid="6" answers={answers} getSubmission={getSubmission} setData={setData} data={data}>
                <InputForm handleAnswerChange={handleAnswerChange} >
                    <Input id="ans" placeholder="Answer here..." size='lg' _placeholder={{ color: "white" }} />
                </InputForm>
            </QuestionOutput>
        </Box>
        <Image src="/assets/q6_k.svg" style={{objectFit: "cover", alignSelf: "baseline", width: "35vw"}} />
    </HStack>
    )
};