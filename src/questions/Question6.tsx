import { Box } from "@chakra-ui/react";
import QuestionText from "../components/QuestionText";
import QuestionOutput from "../components/QuestionOutput";
import { QuestionProps } from "../routes/Questions";

export default function Question6({data, setData}: QuestionProps) {
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