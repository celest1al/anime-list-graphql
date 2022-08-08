import { InputForm, InputLabel, ErrorMessage } from './input.style'

interface InputError {
  message: string
  isError: boolean
}

interface IIntputProps {
  id: string
  labelName?: string
  type?: string
  placeholder?: string
  value?: string
  isFullWidth?: boolean
  error?: InputError
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export function Input({
  id,
  labelName,
  onFocus,
  onBlur,
  onChange,
  placeholder,
  type = 'text',
  value,
  error,
  isFullWidth = false,
}: IIntputProps) {
  return (
    <>
      <InputLabel htmlFor={id}>{labelName}</InputLabel>
      <InputForm
        isFullWidth={isFullWidth}
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {error?.isError && <ErrorMessage>{error?.message}</ErrorMessage>}
    </>
  )
}
