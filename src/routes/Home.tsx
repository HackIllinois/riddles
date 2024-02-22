import { Box, Button, Heading } from "@chakra-ui/react";
import PageContents from "../components/PageContents";
import { VStack } from "@chakra-ui/react";


export default function Home() {
    return (
        <PageContents>
            <Box>
                <VStack marginTop="100px">
                    <Box w="75vw" h='40px' marginBlock="100px" textAlign="center">
                        <Heading> Welcome to Runes and Riddles! </Heading>
                    </Box>
                    <Box w='400px' h='40px' marginBlock="100px">
                        <Button w="100%"> Begin! </Button>
                    </Box>
                </VStack>
            </Box>
        </PageContents>
    )
}
