import { useCallback, useState } from 'react';
import { SliderWithInput } from '../components/SliderWithInput';

export interface UseSliderI {
    id: string;
    label: string;
    defaultValue: number;
    valueLabel: string;
    min: number;
    max: number;
    marks: number[];
}

export const useSlider = ({ id, label, defaultValue, min, max, valueLabel, marks }: UseSliderI) => {
    const [value, setValue] = useState<number>(defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const RenderSlider = useCallback(() => <SliderWithInput label={label} id={id} marks={marks} valueLabel={valueLabel} min={min} max={max} defaultValue={value} setCurrentValue={setValue} />, [
        defaultValue,
        id,
        label,
        marks,
        valueLabel,
        min,
        max,
    ]);
    return { value, RenderSlider };
};
