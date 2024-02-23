import { Box, Grid, GridItem, Input } from "@chakra-ui/react";
import { useState } from "react";
import InputForm from "../components/InputForm";
import QuestionOutput from "../components/QuestionOutput";
import QuestionText from "../components/QuestionText";
import { QuestionProps } from "../routes/Questions";
import { Colors } from "../config";

function getSubmission (answers: Map<string, string>): string {
    return answers.get("wordle") ?? "NONE";
}

enum State {
    GRAY,
    YELLOW,
    GREEN,

}

interface LetterProps {
    state: State,
    char: string,
}


function Letter ({state, char}: LetterProps) {
    let bg;
    switch (state) {
        case State.GRAY: bg = Colors.WordleGray; break;
        case State.GREEN: bg = Colors.WordleGreen; break;
        case State.YELLOW: bg = Colors.WordleYellow; break;
    }
    return <GridItem w="50px" h="50px" margin="2px" fontSize={"4xl"} fontWeight={"750"} color={Colors.primaryTextColor} bg={bg}> {char} </GridItem>;
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
                    
                    <Letter char={"M"} state={State.GRAY}/>
                    <Letter char={"A"} state={State.GRAY}/>
                    <Letter char={"G"} state={State.GRAY}/>
                    <Letter char={"I"} state={State.GRAY}/>
                    <Letter char={"C"} state={State.GRAY}/>

                    
                    <Letter char={"F"} state={State.GRAY}/>
                    <Letter char={"L"} state={State.GRAY}/>
                    <Letter char={"O"} state={State.GRAY}/>
                    <Letter char={"W"} state={State.GRAY}/>
                    <Letter char={"N"} state={State.GRAY}/>

                    <Letter char={"R"} state={State.GRAY}/>
                    <Letter char={"E"} state={State.YELLOW}/>
                    <Letter char={"E"} state={State.GRAY}/>
                    <Letter char={"K"} state={State.GRAY}/>
                    <Letter char={"S"} state={State.GREEN}/>

                    <Letter char={"B"} state={State.GREEN}/>
                    <Letter char={"L"} state={State.GRAY}/>
                    <Letter char={"U"} state={State.GRAY}/>
                    <Letter char={"E"} state={State.GREEN}/>
                    <Letter char={"S"} state={State.GREEN}/>

                    <Letter char={"?"} state={State.GRAY}/>
                    <Letter char={"?"} state={State.GRAY}/>
                    <Letter char={"?"} state={State.GRAY}/>
                    <Letter char={"?"} state={State.GRAY}/>
                    <Letter char={"?"} state={State.GRAY}/>
                </Grid>
            </QuestionText>

            <QuestionOutput qid="1" answers={answers} getSubmission={getSubmission} setData={setData} data={data}>
                <InputForm handleAnswerChange={handleAnswerChange} >
                    <Input id ="wordle" placeholder="Answer here..." size='lg' _placeholder={{ color: "white" }} />
                </InputForm>
            </QuestionOutput>
        </Box>
    )
};