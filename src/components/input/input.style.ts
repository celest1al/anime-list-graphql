import styled from '@emotion/styled'

interface IInputFormProps {
  color?: string
  isFullWidth?: boolean
}

export const InputLabel = styled.label`
  font-size: 0.875rem;
  color: #334155;
  margin-bottom: 0.5rem;
  font-weight: 600;
`

export const InputForm = styled.input<IInputFormProps>`
  width: ${(props) => (props.isFullWidth ? '100%' : 'auto')};
  background-color: #fff;
  color: #334155;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid ${(props) => (props.color ? props.color : '#0096FF')};
`

export const ErrorMessage = styled.p`
  color: #eb1d36;
  margin-top: 0.25rem;
  font-size: 0.625rem;
`
