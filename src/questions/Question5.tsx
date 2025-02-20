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
                    The goddess Athena challenges you to a test of strategy.
                    {<br />} {<br />}
                    On the Marble Board of Olympus, guide the sacred pieces (which move like a horses in chess) from the starting board to the final board in the fewest moves possible.
                </Text>
            </QuestionText>

            <QuestionOutput qid="5" answers={answers} getSubmission={getSubmission} setData={setData} data={data}>
                <InputForm handleAnswerChange={handleAnswerChange} >
                    <Input id="ans" placeholder="Answer here..." size='lg' _placeholder={{ color: "white" }} />
                </InputForm>
            </QuestionOutput>
        </Box>
        <Image src="/q5_k.svg" style={{objectFit: "cover", alignSelf: "baseline", width: "45vw"}} />
    </HStack>
    )
};