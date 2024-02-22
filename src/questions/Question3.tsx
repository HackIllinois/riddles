import { Box, Code } from "@chakra-ui/react";
import QuestionText from "../components/QuestionText";
import QuestionOutput from "../components/QuestionOutput";

export default function Question3() {
    return (
        <Box>
            <QuestionText>
                <Code>
                    Hi! <br></br>
                    Test
                    Test test
                    </Code>
            </QuestionText>

            <QuestionOutput>
                Output here!
            </QuestionOutput>
        </Box>
    )
};