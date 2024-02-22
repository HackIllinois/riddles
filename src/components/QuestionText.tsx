import { Box } from "@chakra-ui/react";

interface QuestionTextProps {
    children: React.ReactNode;
}

export default function QuestionText({children}: QuestionTextProps) {
    return (
        <Box bg="red" margin="2.5%">
            {children}
        </Box>
    )
}