import { Box } from "@chakra-ui/react";
import QuestionText from "../components/QuestionText";
import QuestionOutput from "../components/QuestionOutput";



export default function Question1() {
    return (
        <Box>
            <QuestionText>
                hi!
            </QuestionText>

            <QuestionOutput>
                Output here!
            </QuestionOutput>
        </Box>
    )
};