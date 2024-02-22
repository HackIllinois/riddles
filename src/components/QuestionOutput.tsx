import { Box, VStack, Image, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import Config from "../config";
import { PuzzleData } from "../routes/Questions";
interface QuestionOutputProps {
    qid: string,
    answers: Map<string, string>,
    children: React.ReactNode;
    getSubmission: (answers: Map<string, string>) => string;
    setData: (value: React.SetStateAction<PuzzleData>) => void
}

export default function QuestionOutput({ qid, answers, children, getSubmission, setData }: QuestionOutputProps) {
    const [hovered, setHovered] = useState(false);
    const toast = useToast()
    const jwt = localStorage.getItem("jwt");

    async function handleSubmission(qid: string, submission: string) {
        const apiUrl = `${Config.API_BASE_URL}/puzzle/submit/${qid}`

        const submissionPromise = axios.post(apiUrl,
            { answer: submission },
            {
                headers: {
                    "Authorization": jwt,
                }
            });

        await toast.promise(submissionPromise, {
            success: { title: 'Success!', description: 'Correct answer :)' },
            error: { title: 'Whoops!', description: 'This doesn\'t look right...' },
            loading: { title: 'Submission Pending', description: 'Please wait.' },
        });

        submissionPromise.then((res) => {
            const data = res.data;
            if (data) {
                setData(data);
            }
        });
    }

    return (
        <Box margin="5%">
            <VStack>
                {children}
                <Box marginTop="6.5%" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    <Image src={`/assets/submit_${hovered ? "hover" : "unhover"}.svg`} onClick={() => {
                        const submission = getSubmission(answers);
                        handleSubmission(qid, submission);
                    }} />
                </Box>
            </VStack>
        </Box>
    )
}