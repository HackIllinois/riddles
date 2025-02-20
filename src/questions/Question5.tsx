import { Box, Input, Text, Image, HStack } from "@chakra-ui/react";
import QuestionText from "../components/QuestionText";
import QuestionOutput from "../components/QuestionOutput";
import { QuestionProps } from "../routes/Questions";
import { ChangeEvent, useState } from "react";
import InputForm from "../components/InputForm";

function getSubmission(answers: Map<string, string>): string {
    let rv = "";
    rv += answers.get("0") ?? "__"
    rv += answers.get("1") ?? "__"
    rv += answers.get("2") ?? "__"
    return rv.toLowerCase();
}

export default function Question5({ data, setData }: QuestionProps) {
    const [answers, setAnswers] = useState(new Map<string, string>());

    // Function to handle input value changes
    const handleAnswerChange = (
        id: string, value: string) => {
        setAnswers(answers.set(id, value));
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>) => handleAnswerChange(event.target.id, event.target.value)

    return (
        <HStack>
            <Box padding="20px">
                <QuestionText>
                    <Text fontSize="xl" alignSelf={"baseline"} textAlign={"left"}>
                        In the grand halls of the ancient Greek scribes, a sacred text was inscribed—a sea of 'm's stretching endlessly.
                        {<br />} {<br />}
                        Yet, hidden within, a single 'n' holds the key to wisdom. Can you uncover its location?
                        {<br />} {<br />}
                        You can do it manually or write code to solve this.
                    </Text>
                </QuestionText>

                <QuestionOutput qid="5" answers={answers} getSubmission={getSubmission} setData={setData} data={data}>
                    <InputForm >
                        <>
                            <HStack>
                                <Input id="0" placeholder="Answer here..." size='lg' _placeholder={{ color: "white" }} onChange={onChange}/>
                                <Input id="1" placeholder="Answer here..." size='lg' _placeholder={{ color: "white" }} onChange={onChange}/>
                                <Input id="2" placeholder="Answer here..." size='lg' _placeholder={{ color: "white" }} onChange={onChange}/>
                            </HStack>
                        </>
                    </InputForm>
                </QuestionOutput>
            </Box>
            <Image src="/q5_q.svg" boxSize='35vw' />
        </HStack>
    )
};