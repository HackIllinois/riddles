import QuestionText from "../components/QuestionText";
import QuestionOutput from "../components/QuestionOutput";
import { Box, Select, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import Config from "../config";

interface CustomSelectProps {
    value: string;
    onChange: (value: string) => void;
    options: string[];
    disabledValues: string[];
}

const CustomSelect = ({ value, onChange, options, disabledValues }: CustomSelectProps) => {
    const filteredOptions = options.filter(option => !disabledValues.includes(option));

    return (
        <Select value={value} onChange={(e) => onChange(e.target.value)}>
            {filteredOptions.map((option, index) => (
                <option
                    key={index}
                    value={option}
                >
                    {disabledValues.includes(option) ? null : option}
                </option>
            )).filter((option) => option)}
        </Select>
    );
};


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