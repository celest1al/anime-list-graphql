import styled from '@emotion/styled'

export const CollectionModalContainer = styled.div`
  background-color: #fff;
`

export const CollectionModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  height: 1.75rem;
  width: 1.75rem;
`

export const CollectionModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FormContainer = styled.div`
  width: 75%;
  margin-bottom: 1rem;
`

export const ModalCollection = styled.div`
  padding-top: 1rem;
`

export const CollectionList = styled.div`
  display: grid;
  gap: 6px;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 480px) and (max-width: 767px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const CollectionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`

export const CollectionItemTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #334155;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`

export const DeleteButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;

  & > * + * {
    margin-left: 1rem;
  }
`
