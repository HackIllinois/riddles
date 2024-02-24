import { Box, NumberInput, NumberInputField, Text } from "@chakra-ui/react";
import QuestionOutput from "../components/QuestionOutput";
import { QuestionProps } from "../routes/Questions";
import { useState } from "react";
import InputForm from "../components/InputForm";
import QuestionText from "../components/QuestionText";

function getSubmission(answers: Map<string, string>): string {
    return answers.get("ans") ?? "NONE";
}

export default function Question8({ data, setData }: QuestionProps) {
    const [answers, setAnswers] = useState(new Map<string, string>());

    // Function to handle input value changes
    const handleAnswerChange = (id: string, value: string) => {
        setAnswers(answers.set(id, value));
    };

    return (
        <Box>
            <QuestionText>
                <Text fontSize="2xl">
                    The ArchWizard became extremely bored one day and created a machine that contains two chambers of which he cannot peer into. In addition there are two buttons: “create” and “extract”. “create” magically constructs a artifact in one of the two chambers at random, and “extract” empties out one of the chambers into a nearby storage container at random. Since the ArchWizard is extremely smart, he will always play optimally. What is the expected amount of artifacts that will be thrown in the storage container after 100 button presses?
                </Text>
            </QuestionText>

            <QuestionOutput qid="8" answers={answers} getSubmission={getSubmission} setData={setData} data={data}>
                <NumberInput>
                    <InputForm handleAnswerChange={handleAnswerChange}>
                        <NumberInputField id="ans" />
                    </InputForm>
                </NumberInput>
            </QuestionOutput>
        </Box>
    )
};