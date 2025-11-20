import { useState } from "react"
import type { CheckboxState } from "./interface"

export function useCheckboxState() {
    const [checkbox, setCheckbox] = useState<CheckboxState>({
        colorPalette: 'blue',
        variant: 'solid',
        size: 'md',
        state: '',
        required: false,
        checked: true,
        label: 'Checkbox Label',
    })
  
    const { label, state, ...restProps } = checkbox
    
    const checkboxProps = {
        ...restProps,
        ...(state === 'disabled' && { disabled: true }),
        ...(state === 'readonly' && { readOnly: true }),
        ...(state === 'invalid' && { invalid: true }),
    }
    
    const checkboxCodeString = `<Checkbox.Root colorPalette='${checkbox.colorPalette}' variant='${checkbox.variant}' size='${checkbox.size}' required=${checkbox.required} checked=${checkbox.checked}${!checkbox.state ? '' : ` ${checkbox.state}=true`} ><Checkbox.HiddenInput /><Checkbox.Control /><Checkbox.Label>${label}</Checkbox.Label></Checkbox.Root>`
    
    return { checkbox, setCheckbox, label, checkboxProps, checkboxCodeString }
}