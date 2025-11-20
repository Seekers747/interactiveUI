interface CheckboxState {
    colorPalette?: string
    variant?: 'outline' | 'solid' | 'subtle'
    size?: 'xs' | 'sm' | 'md' | 'lg'
    state?: 'disabled' | 'readonly' | 'invalid' | ''
    required?: boolean
    checked?: boolean | 'indeterminate'
    label?: string
}

export type { CheckboxState }