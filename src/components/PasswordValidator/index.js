import {useState} from 'react'

import {
  MainContainer,
  SubContainer,
  Header,
  Paragraph,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => setPassword(event.target.value)

  return (
    <MainContainer>
      <SubContainer>
        <Header>Password Validator</Header>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <input type="password" onChange={onChangePassword} />
        {password.length < 8 && (
          <ErrorMsg>Your password must be at least 8 characters </ErrorMsg>
        )}
      </SubContainer>
    </MainContainer>
  )
}

export default PasswordValidator
