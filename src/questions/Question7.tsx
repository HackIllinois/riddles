import { Box, Grid, GridItem, HStack, NumberInput, NumberInputField, Text, VStack } from "@chakra-ui/react";
import QuestionText from "../components/QuestionText";
import QuestionOutput from "../components/QuestionOutput";

export default function Question7() {
    return (
        <Box>
            <QuestionText>
                <Text fontSize="2xl">
                    In a calendar year, what is the minimum and maximum Friday the 13ths that can occur?
                </Text>
            </QuestionText>

            <QuestionOutput>
                <VStack>
                    <HStack> 
                        <Text fontSize="lg"> Min: </Text>
                        <NumberInput> <NumberInputField /> </NumberInput>
                    </HStack>                    
                    <HStack> 
                        <Text fontSize="lg"> Max: </Text>
                        <NumberInput> <NumberInputField /> </NumberInput>
                    </HStack>                    
                </VStack>
            </QuestionOutput>
        </Box>
    )
};