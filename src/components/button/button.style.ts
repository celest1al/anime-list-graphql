import styled from '@emotion/styled'

interface IButtonContainerProps {
  color: string
  isFullWidth?: boolean
}

interface Color {
  [key: string]: string | undefined
}

const colors: Color = {
  primary: '#0096FF',
  danger: '#EB1D36',
  'dark-primary': '#0078AA',
  'dark-danger': '#D61C4E',
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
  width: ${(props) => (props.isFullWidth ? '100%' : 'auto')};
  background-color: ${(props) =>
    props.color ? colors[props.color] : '#0096FF'};
  color: #f1f1f1;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid
    ${(props) => (props.color ? colors[props.color] : '#0096FF')};

  ${(props) =>
    props.color === 'primary' &&
    `
    &:hover {
        background-color: ${colors['dark-primary']};
        border: 1px solid ${colors['dark-primary']};
    }
`}

  ${(props) =>
    props.color === 'danger' &&
    `
    &:hover {
        background-color: ${colors['dark-danger']};
        border: 1px solid ${colors['dark-danger']};
    }
  `}
`
