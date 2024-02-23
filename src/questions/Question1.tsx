import { Box, Grid, GridItem, Input } from "@chakra-ui/react";
import { useState } from "react";
import InputForm from "../components/InputForm";
import QuestionOutput from "../components/QuestionOutput";
import QuestionText from "../components/QuestionText";
import { QuestionProps } from "../routes/Questions";

function getSubmission (answers: Map<string, string>): string {
    return answers.get("wordle") ?? "NONE";
}

export default function Question1({data, setData}: QuestionProps) {
    const [answers, setAnswers] = useState(new Map<string, string>());

    // Function to handle input value changes
    const handleAnswerChange = (id: string, value: string) => {
        setAnswers(answers.set(id, value));
    };

    return (
        <Box>
            <QuestionText>
                <Grid templateColumns='repeat(5, 1fr)' templateRows="repeat(4, 1fr)" width={"min-content"} margin={"auto"}>
                    <GridItem w="50px" h="50px" bg="red" margin="2px" fontSize={"4xl"} fontWeight={"550"}> M </GridItem>
                    <GridItem w="50px" h="50px" bg="red" margin="2px" fontSize={"4xl"} fontWeight={"550"}> A </GridItem>
                    <GridItem w="50px" h="50px" bg="red" margin="2px" fontSize={"4xl"} fontWeight={"550"}> G </GridItem>
                    <GridItem w="50px" h="50px" bg="red" margin="2px" fontSize={"4xl"} fontWeight={"550"}> I </GridItem>
                    <GridItem w="50px" h="50px" bg="red" margin="2px" fontSize={"4xl"} fontWeight={"550"}> C </GridItem>

                    <GridItem w="50px" h="50px" bg="red" margin="2px" fontSize={"4xl"} fontWeight={"550"}> F </GridItem>
                    <GridItem w="50px" h="50px" bg="red" margin="2px" fontSize={"4xl"} fontWeight={"550"}> L </GridItem>
                    <GridItem w="50px" h="50px" bg="red" margin="2px" fontSize={"4xl"} fontWeight={"550"}> O </GridItem>
                    <GridItem w="50px" h="50px" bg="red" margin="2px" fontSize={"4xl"} fontWeight={"550"}> W </GridItem>
                    <GridItem w="50px" h="50px" bg="red" margin="2px" fontSize={"4xl"} fontWeight={"550"}> N </GridItem>


                    <GridItem w="50px" h="50px" bg="red" margin="2px" fontSize={"4xl"} fontWeight={"550"}> R </GridItem>
                    <GridItem w="50px" h="50px" bg="yellow" margin="2px" fontSize={"4xl"} fontWeight={"550"}> E </GridItem>
                    <GridItem w="50px" h="50px" bg="red" margin="2px" fontSize={"4xl"} fontWeight={"550"}> E </GridItem>
                    <GridItem w="50px" h="50px" bg="red" margin="2px" fontSize={"4xl"} fontWeight={"550"}> K </GridItem>
                    <GridItem w="50px" h="50px" bg="green" margin="2px" fontSize={"4xl"} fontWeight={"550"}> S </GridItem>

                    <GridItem w="50px" h="50px" bg="green" margin="2px" fontSize={"4xl"} fontWeight={"550"}> B </GridItem>
                    <GridItem w="50px" h="50px" bg="red" margin="2px" fontSize={"4xl"} fontWeight={"550"}> L </GridItem>
                    <GridItem w="50px" h="50px" bg="red" margin="2px" fontSize={"4xl"} fontWeight={"550"}> U </GridItem>
                    <GridItem w="50px" h="50px" bg="green" margin="2px" fontSize={"4xl"} fontWeight={"550"}> E </GridItem>
                    <GridItem w="50px" h="50px" bg="green" margin="2px" fontSize={"4xl"} fontWeight={"550"}> S </GridItem>

                    <GridItem w="50px" h="50px" bg="gray" margin="2px" fontSize={"4xl"} fontWeight={"550"}> ? </GridItem>
                    <GridItem w="50px" h="50px" bg="gray" margin="2px" fontSize={"4xl"} fontWeight={"550"}> ? </GridItem>
                    <GridItem w="50px" h="50px" bg="gray" margin="2px" fontSize={"4xl"} fontWeight={"550"}> ? </GridItem>
                    <GridItem w="50px" h="50px" bg="gray" margin="2px" fontSize={"4xl"} fontWeight={"550"}> ? </GridItem>
                    <GridItem w="50px" h="50px" bg="gray" margin="2px" fontSize={"4xl"} fontWeight={"550"}> ? </GridItem>
                </Grid>
            </QuestionText>

            <QuestionOutput qid="1" answers={answers} getSubmission={getSubmission} setData={setData} data={data}>
                <InputForm handleAnswerChange={handleAnswerChange} >
                    <Input id ="wordle" placeholder='Enter your answer here!' size='lg' _placeholder={{ color: "white" }} />
                </InputForm>
            </QuestionOutput>
        </Box>
    )
};