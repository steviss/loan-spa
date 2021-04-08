import { Box, Grid, InputLabel } from '@material-ui/core';
import { useField } from 'formik';
import React, { ChangeEvent, useCallback, useState } from 'react';
import { UseSliderI } from '../hooks/useSlider';
import { CustomInputField } from './CustomInputFields';
import { CustomSlider } from './CustomSlider';
import { useDebouncedCallback } from 'use-debounce';

interface SliderWithInputI extends UseSliderI {
    id: string;
    label: string;
    defaultValue: number;
    min: number;
    max: number;
    valueLabel: string;
    marks: number[];
    setCurrentValue: (value: number) => void;
}

const getValueAriaText = (valueLabel: string, value: number) => {
    return `${valueLabel} ${value}`;
};

const createMarks = (marks: number[], valueLabel: string) => {
    return marks.map((value) => ({
        value: value,
        label: `${valueLabel} ${value}`,
    }));
};

export const SliderWithInput: React.FC<SliderWithInputI> = ({ id, defaultValue, label, valueLabel, min, max, marks, setCurrentValue }) => {
    let maximumInputValue: number = max;
    const [inputValue, setInputValue] = useState<number>(defaultValue);
    const [field, , { setValue }] = useField(id);
    let sliderMarks = createMarks(marks, valueLabel);
    const debouncedSetValue = useDebouncedCallback((value: number) => {
        setValue(value);
    }, 1000);
    const setParentValue = useCallback(
        (number: number) => {
            setCurrentValue(number);
        },
        [setCurrentValue],
    );
    const handleSliderChange = (event: React.ChangeEvent<{}>, value: any) => {
        setInputValue(value);
        setParentValue(value);
        debouncedSetValue(value);
    };
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let parsedValue = parseInt(event.target.value, 10) > maximumInputValue ? maximumInputValue : parseInt(event.target.value, 10) || 0;
        setInputValue(parsedValue);
        setParentValue(parsedValue);
        debouncedSetValue(parsedValue);
    };
    return (
        <Grid container alignItems="center" justify="space-between" style={{ marginBottom: '2rem' }}>
            <Box style={{ flex: 1 }}>
                <InputLabel id={`${id}-label`} htmlFor={id} style={{ padding: '0.5rem 0' }}>
                    {label}
                </InputLabel>
                <CustomSlider
                    value={inputValue}
                    getAriaValueText={(value) => getValueAriaText(valueLabel, value)}
                    aria-labelledby="home-price-slider"
                    valueLabelDisplay="off"
                    marks={sliderMarks}
                    min={min}
                    max={max}
                    onChange={handleSliderChange}
                />
            </Box>
            <Box style={{ position: 'relative', padding: '1rem', marginTop: '0.5rem' }}>
                <CustomInputField id={field.name} name={field.name} value={inputValue} type="text" inputProps={{ 'aria-label': label }} onChange={handleInputChange} />
                <Box
                    component="div"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: 0,
                        right: '2rem',
                        height: '100%',
                    }}
                >
                    <Box component="span">{valueLabel}</Box>
                </Box>
            </Box>
        </Grid>
    );
};
