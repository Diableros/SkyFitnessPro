import { styled } from 'styled-components'

export const ModalScreen = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.modalShadow};

  display: flex;
  align-items: center;
  justify-content: center;
`
export const ModalContentBox = styled.div`
  position: relative;
  & * div {
    cursor: pointer;
  }
`

export const ImageWrapper = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  padding: 10px;
`
