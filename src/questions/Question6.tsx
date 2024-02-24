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
                    Confronted with two enchanting chessboards, each adorned with 6 gallant knights, you are tasked with a challenge. 
                    {<br />} {<br />}
                    Calculate the minimum number of moves required to transform the initial configuration on the left-side chessboard into the final arrangement on the right-side.
                </Text>
            </QuestionText>

            <QuestionOutput qid="6" answers={answers} getSubmission={getSubmission} setData={setData} data={data}>
                <InputForm handleAnswerChange={handleAnswerChange} >
                    <Input id="ans" placeholder="Answer here..." size='lg' _placeholder={{ color: "white" }} />
                </InputForm>
            </QuestionOutput>
        </Box>
        <Image src="/q6_k.svg" style={{objectFit: "cover", alignSelf: "baseline", width: "35vw"}} />
    </HStack>
    )
};
