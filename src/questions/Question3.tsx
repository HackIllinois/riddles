import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import CustomSelect from "../components/CustomSelect";
import QuestionOutput from "../components/QuestionOutput";
import QuestionText from "../components/QuestionText";
import Config from "../config";


export default function Question1() {
    const [selectValues, setSelectValues] = useState(["", "", "", "", "", "", "", "", ""]);

    // Update select values and options based on the selected values
    const handleSelectChange = (index: number, value: string) => {
        const updatedValues = [...selectValues];
        updatedValues[index] = value;
        setSelectValues(updatedValues);
    };


    return (
        <Box>
            <QuestionText>
                <Text fontSize="2xl"> </Text>
            </QuestionText>

            <QuestionOutput>
                <SimpleGrid columns={3} spacing={10}>
                    {selectValues.map((value, index) => (
                        <CustomSelect
                            key={index}
                            value={value}
                            onChange={(newValue) => handleSelectChange(index, newValue)}
                            options={Config.CONNECTIONS_OPTIONS}
                            disabledValues={selectValues.filter((v, i) => (i !== index) && (v != " "))}
                        />
                    ))}
                </SimpleGrid>
            </QuestionOutput>
        </Box>
    )
};