import { Box, VStack, Image } from "@chakra-ui/react";
import { useState } from "react";

interface QuestionOutputProps {
    children: React.ReactNode;
}

export default function QuestionOutput({children}: QuestionOutputProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <Box margin="5%">
            <VStack>
                {children}
                <Box marginTop="6.5%" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    <Image src={`/assets/submit_${hovered ? "hover" : "unhover"}.svg`} />
                </Box>
            </VStack>
        </Box>
    )
}