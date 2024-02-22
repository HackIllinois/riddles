import { Box, Highlight, NumberInput, NumberInputField, Text } from "@chakra-ui/react";
import QuestionOutput from "../components/QuestionOutput";
import QuestionText from "../components/QuestionText";

export default function Question4() {
    return (
        <Box>
            <QuestionText>
                <Text fontSize="2xl">
                    <Highlight
                        query={['multiples of 37', '37xyz, 37yzx, 37zxy', '5-digit numbers']}
                        styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
                    >
                        A knight must swing his sword in multiples of 37, but he must also swing between a minimum and a maximum number of times. The knight commander was very vague in exactly how many times he must swing his sword but told him the number in the form of 37xyz, 37yzx, 37zxy must all be valid for how many times the knight must swing his sword. Assume x, y, and z can each be digits 0-9 and repeatable, how many 5-digit numbers could be valid?
                    </Highlight>
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