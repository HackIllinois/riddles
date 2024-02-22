import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import PageContents from "../components/PageContents";
import ProgressBar from "../components/ProgressBar";

export default function Questions() {
    return (

        <PageContents>
            <VStack>
                <Box w="75vw" h='40px' marginBlock="100px" textAlign="center">
                    <ProgressBar />
                </Box>
                <Box w='400px' h='40px' marginBlock="100px">
                    <Text> THIS IS GOING TO BE THE ACTUAL CONTENT </Text>
                </Box>

            </VStack>
        </PageContents>
    )
}