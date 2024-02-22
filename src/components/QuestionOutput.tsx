import { Box } from "@chakra-ui/react";

interface QuestionOutputProps {
    children: React.ReactNode;
}

export default function QuestionOutput({children}: QuestionOutputProps) {
    return (
        <Box bg="red" margin="2.5%">
            {children}
        </Box>
    )
}