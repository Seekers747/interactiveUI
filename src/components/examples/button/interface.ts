interface ButtonState {
    colorPalette?: string
    variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'unstyled'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    loading?: boolean
    loadingText?: string
    label?: string
}

export type { ButtonState }