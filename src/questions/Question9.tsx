import { Box, NumberInput, NumberInputField, Text } from "@chakra-ui/react";
import QuestionOutput from "../components/QuestionOutput";
import QuestionText from "../components/QuestionText";

export default function Question1() {
    return (
        <Box>
            <QuestionText>
                <Text fontSize="2xl">
                    The ArchWizard became extremely bored one day and created a machine that contains two chambers of which he cannot peer into. In addition there are two buttons: “create” and “extract”. “create” magically constructs a [some item] in one of the two chambers at random, and “extract” empties out one of the chambers into a nearby storage container at random. Since the ArchWizard is extremely smart, he will always play optimally. What is the expected amount of [items] that will be thrown in the storage container after 100 button presses?
                </Text>
            </QuestionText>

            <QuestionOutput>
                <NumberInput>
                    <NumberInputField />
                </NumberInput>
            </QuestionOutput>
        </Box>
    )
};