interface SliderState {
    colorPalette?: string
    variant?: 'solid' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    min?: number
    max?: number
    step?: number
    value: number
    label?: string
}

export type { SliderState }