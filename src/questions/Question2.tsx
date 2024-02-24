import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import CustomSelect from "../components/CustomSelect";
import QuestionOutput from "../components/QuestionOutput";
import QuestionText from "../components/QuestionText";
import { Config } from "../config";
import { QuestionProps } from "../routes/Questions";

function getSubmission(answers: Map<string, string>): string {
    console.log(answers);
    let rv = ""
    for (let i = 0; i < 9; i++) {
        rv += answers.get(`${i}`)?.charAt(0) ?? "_";
    }
    console.log(rv);
    return rv.toLowerCase();
}

export default function Question2({data, setData}: QuestionProps) {
    const [selectValues, setSelectValues] = useState(["", "", "", "", "", "", "", "", ""]);
    const [answers, setAnswers] = useState(new Map<string, string>());

    // Update select values and options based on the selected values
    const handleSelectChange = (index: number, value: string) => {
        const updatedValues = [...selectValues];
        updatedValues[index] = value;
        setSelectValues(updatedValues);
        setAnswers(answers.set(`${index}`, value));
    };

    return (
        <HStack>
            <QuestionText>
                <Text fontSize="2xl" textAlign={"left"}>                    
                    In this perplexing puzzle, you are presented with a list of 9 words waiting your categorization skills. Group these 9 words into three sets of 3 words each, discerning the hidden connections. 
                    {<br />} {<br />}
                    Submit your answer in (increasing) alphabetical order, both row-wise and column-wise. 
                    {<br />} {<br />}
                    Will you be the one to conquer this linguistic puzzle? </Text>
            </QuestionText>
            <QuestionOutput  qid="2" answers={answers} getSubmission={getSubmission} setData={setData} data={data}>
                <SimpleGrid columns={3} spacing={10} width="40vw" alignSelf={"baseline"}>
                    {selectValues.map((value, index) => (
                        <CustomSelect
                            key={index}
                            value={value}
                            onChange={(newValue) => {
                                handleSelectChange(index, newValue)
                            }}
                            options={Config.CONNECTIONS_OPTIONS}
                            disabledValues={selectValues.filter((v, i) => (i !== index) && (v != " "))}
                            id = {index}
                        />
                    ))}
                </SimpleGrid>
            </QuestionOutput>
        </HStack>
        
    )
};