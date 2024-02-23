import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import CustomSelect from "../components/CustomSelect";
import QuestionOutput from "../components/QuestionOutput";
import QuestionText from "../components/QuestionText";
import Config from "../config";
import { QuestionProps } from "../routes/Questions";

function getSubmission(answers: Map<string, string>): string {
    console.log(answers);
    let rv = ""
    for (let i = 0; i < 9; i++) {
        rv += answers.get(`${i}`) ?? "_";
    }
    return rv;
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
        <Box>
            <QuestionText>
                <Text fontSize="2xl"> </Text>
            </QuestionText>

            <QuestionOutput  qid="2" answers={answers} getSubmission={getSubmission} setData={setData} data={data}>
                <SimpleGrid columns={3} spacing={10}>
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
        </Box>
    )
};