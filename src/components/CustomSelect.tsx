import { Select } from "@chakra-ui/react";

interface CustomSelectProps {
    value: string;
    onChange: (value: string) => void;
    options: string[];
    disabledValues: string[];
    id: number;
}

export default function CustomSelect ({ value, onChange, options, disabledValues, id }: CustomSelectProps) {
    const filteredOptions = options.filter(option => !disabledValues.includes(option));

    return (
        <Select value={value} onChange={(e) => onChange(e.target.value)} id={`${id}`}>
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
}
