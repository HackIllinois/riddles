import { Box, Heading, VStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import "@fontsource/medievalsharp";

export default function PageTooSmall() {
    const [hovered, setHovered] = useState(false);

    return (
        <VStack marginTop="100px">
            <Box w="75vw" h='40px' marginBlock="100px" textAlign="center">
                <Heading
                    fontFamily={"MedievalSharp"}
                    fontSize={"4xl"}
                    fontWeight={"800"}
                >
                    <span style={{
                        display: 'inline-block',
                        textShadow: '0 0 5px white, 0 0 10px white, 0 0 15px white',
                    }}>
                        <span style={{
                            color: '#fea330',
                            position: 'relative',
                            zIndex: '1',
                        }}>
                            Oops!
                        </span>
                    </span>
                </Heading>
                <Heading>
                    Your screen size is not supported...
                </Heading>
            </Box>
            <Box w='400px' h='40px' marginBlock="100px">
                <Box marginTop="6.5%" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    <Image src={`/begin_${hovered ? "unhover" : "hover"}.svg`} onClick={() => {
                        window.location.href = "/auth/"
                    }} />
                </Box>
            </Box>
        </VStack>
    )
};