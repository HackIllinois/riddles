import { Box, VStack, Image, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Config } from "../config";
import { PuzzleData } from "../routes/Questions";
interface QuestionOutputProps {
    qid: string,
    answers: Map<string, string>,
    children: React.ReactNode,
    getSubmission: (answers: Map<string, string>) => string,
    setData: (value: React.SetStateAction<PuzzleData>) => void,
    data: PuzzleData,
}

export default function QuestionOutput({ qid, answers, children, getSubmission, setData, data }: QuestionOutputProps) {
    const [hovered, setHovered] = useState(false);
    const toast = useToast()
    const jwt = localStorage.getItem("jwt");
    const questionNumber = Number(qid);

    async function handleSubmission(qid: string, submission: string) {
        const apiUrl = `${Config.API_BASE_URL}/puzzle/submit/${qid}`
        console.log(apiUrl);

        const submissionPromise = axios.post(apiUrl,
            { answer: submission.toLowerCase() },
            {
                headers: {
                    "Authorization": jwt,
                }
            });
        let successDescription = "Correct answer :)"
        if (data?.problemComplete?.[questionNumber] || false) {
            successDescription = "You have already submitted."
        }

        await toast.promise(submissionPromise, {
            success: { title: 'Success!', description: successDescription },
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