import { Box } from "@chakra-ui/react";
import QuestionText from "../components/QuestionText";
import QuestionOutput from "../components/QuestionOutput";

export default function Question1() {
    return (
        <Box>
            <QuestionText>
                hi 1!
            </QuestionText>

            <QuestionOutput>
                Output here!
            </QuestionOutput>
        </Box>
    )
};