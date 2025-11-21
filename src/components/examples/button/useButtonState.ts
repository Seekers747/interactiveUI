import * as imports from './buttonImports.ts'
import type { ButtonState } from './buttonImports.ts'

const {useState} = imports

export function useButtonState() {
    const [button, setButton] = useState<ButtonState>({
      colorPalette: 'teal',
      variant: 'solid',
      size: 'md',
      disabled: false,
      loading: false,
      loadingText: 'Loading...',
      label: 'Click me',
    })
  
    const { label, ...buttonProps } = button
    const buttonCodeString = `<Button colorPalette='${button.colorPalette}' variant='${button.variant}' size='${button.size}' disabled={${button.disabled}} loading={${button.loading}} loadingText='${button.loadingText}'>${label}</Button>`
  
    return { button, setButton, label, buttonProps, buttonCodeString }
}