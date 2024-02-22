import { Select } from "@chakra-ui/react";

interface CustomSelectProps {
    value: string;
    onChange: (value: string) => void;
    options: string[];
    disabledValues: string[];
}

export default function CustomSelect ({ value, onChange, options, disabledValues }: CustomSelectProps) {
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
