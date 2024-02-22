import { Box, Text, Input } from "@chakra-ui/react";
import QuestionText from "../components/QuestionText";
import QuestionOutput from "../components/QuestionOutput";

export default function Question1() {
    return (
        <Box>
            <QuestionText>
                <Text fontSize="4xl"> What is HackIllinois 2024's theme? </Text>
            </QuestionText>

            <QuestionOutput>
                <Input placeholder='Enter your answer here!' size='lg' _placeholder={{ color: "white" }}/>
            </QuestionOutput>
        </Box>
    )
};