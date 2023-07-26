import { styled } from 'styled-components'

export const ModalScreen = styled.div`
  position: fixed;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.modalShadow};

  display: flex;
  align-items: center;
  justify-content: center;
`
export const ModalContentBox = styled.div`
position:relative;

`

export const ImageWrapper = styled.div`
position:absolute;
top:0;
right:0;
padding:10px;
`