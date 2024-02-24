import { Box } from "@chakra-ui/react";

interface QuestionTextProps {
    children: React.ReactNode;
}

export default function QuestionText({children}: QuestionTextProps) {
    return (
        <Box>
            <Box margin="auto" textAlign="center">
                {children}
            </Box>
        </Box>
    )
}