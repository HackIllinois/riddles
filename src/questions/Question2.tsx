import { Box, Code, Input, Text } from "@chakra-ui/react";
import QuestionText from "../components/QuestionText";
import QuestionOutput from "../components/QuestionOutput";
import { QuestionProps } from "../routes/Questions";
import { useState } from "react";
import InputForm from "../components/InputForm";
import { Colors } from "../config";

function getSubmission(answers: Map<string, string>): string {
    return answers.get("0")?.toLowerCase() ?? "NONE";
}

export default function Question3({ setData, data }: QuestionProps) {
    const [answers, setAnswers] = useState(new Map<string, string>());

    // Function to handle input value changes
    const handleAnswerChange = (id: string, value: string) => {
        setAnswers(answers.set(id, value));
    };

    return (
        <Box>
            <QuestionText >
                <Code textAlign={"left"} fontSize="xl" bg={Colors.codeBackground}>
                int 🔱 = 21; <br /> <br /> 
                if (🔱 % 2 == 0) <br /> 
                <Text ml="20px"> cout {"<< olympus"} <br />  </Text>
                if (🔱 % 7 == 0) <br />
                <Text ml="20px"> cout {"<< zeus"} <br />  </Text>
                if (🔱 % 2 == 0 && 🔱 % 7 == 0) <br /> 
                <Text ml="20px"> cout {"<< thunder"} <br />  </Text>                        
                </Code>
            </QuestionText>

            <QuestionOutput qid="3" answers={answers} getSubmission={getSubmission} setData={setData} data={data}>
                <InputForm handleAnswerChange={handleAnswerChange} >
                    <Input id="2" placeholder='Figure it out...' size='lg' _placeholder={{ color: "white" }} />
                </InputForm>
            </QuestionOutput>
        </Box>
    )
};