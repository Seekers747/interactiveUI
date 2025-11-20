import { useState } from "react"
import type { SliderState } from "./interface"

export function useSliderState() {
    const [slider, setSlider] = useState<SliderState>({
        colorPalette: 'teal',
        variant: 'solid',
        size: 'md',
        disabled: false,
        min: 0,
        max: 100,
        step: 1,
        value: 50,
        label: 'Slider Label',
    })

    const { label, value, ...sliderProps } = slider
    const sliderValueArray = [value]
    const sliderCodeString = `<Slider.Root colorPalette='${slider.colorPalette}' variant='${slider.variant}' size='${slider.size}' disabled={${slider.disabled}} min={${slider.min}} max={${slider.max}} step={${slider.step}} value={${sliderValueArray}}><Slider.Thumbs/></Slider.Root>`

    return { slider, setSlider, label, sliderProps: { ...sliderProps, value: sliderValueArray }, sliderCodeString }
}