import { Box, Code, Input, Text } from "@chakra-ui/react";
import QuestionText from "../components/QuestionText";
import QuestionOutput from "../components/QuestionOutput";
import { QuestionProps } from "../routes/Questions";
import { useState } from "react";
import InputForm from "../components/InputForm";

function getSubmission(answers: Map<string, string>): string {
    return answers.get("0") ?? "NONE";
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
                <Code textAlign={"left"} fontSize="xl">
                 15 {"=>"} 🔮 <br /> <br /> 
                if 🔮 mod 3 <br /> 
                <Text ml="20px"> cout {"<< hack"} <br />  </Text>
                if 🔮 mod 5 <br />
                <Text ml="20px"> cout {"<< hackillinois"} <br />  </Text>
                if 🔮 mod 3 and 🔮 mod 5 <br /> 
                <Text ml="20px"> cout {"<< illinois"} <br />  </Text>                        
                </Code>
            </QuestionText>

            <QuestionOutput qid="3" answers={answers} getSubmission={getSubmission} setData={setData} data={data}>
                <InputForm handleAnswerChange={handleAnswerChange} >
                    <Input id="0" placeholder='Figure it out...' size='lg' _placeholder={{ color: "white" }} />
                </InputForm>
            </QuestionOutput>
        </Box>
    )
};