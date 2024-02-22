import { Box, VStack, Image } from "@chakra-ui/react";
import { useState } from "react";

interface QuestionOutputProps {
    qid: string,
    answers: Map<string, string>,
    children: React.ReactNode;
    getSubmission: (answers: Map<string, string>) => string;
}

function handleSubmission(qid: string, submission: string) {
    console.log(qid, submission);
}


export default function QuestionOutput({qid, answers, children, getSubmission}: QuestionOutputProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <Box margin="5%">
            <VStack>
                {children}
                <Box marginTop="6.5%" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    <Image src={`/assets/submit_${hovered ? "hover" : "unhover"}.svg`} onClick={() => {
                        const submission = getSubmission(answers);
                        handleSubmission(qid, submission);
                        }}/>
                </Box>
            </VStack>
        </Box>
    )
}