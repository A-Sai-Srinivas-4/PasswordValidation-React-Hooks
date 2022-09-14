import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const SubContainer = styled.div`
  background-color: #383a4e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: #434451;
  padding: 20px;
  border-radius: 10px;
`

export const Header = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #f8fafc;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 20px;
`

export const PasswordInput = styled.input`
  padding: 10px;
`

export const ErrorMsg = styled.p`
  color: #ef4444;
`
