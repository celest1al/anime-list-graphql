import { ButtonContainer } from './button.style'

interface IButtonProps {
  variant: string
  children: React.ReactNode
  isFullWidth?: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function Button({
  variant = 'primary',
  isFullWidth,
  children,
  onClick,
}: IButtonProps) {
  return (
    <ButtonContainer color={variant} onClick={onClick} isFullWidth={isFullWidth}>
      {children}
    </ButtonContainer>
  )
}
