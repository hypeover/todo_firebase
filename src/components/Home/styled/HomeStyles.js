import styled from 'styled-components'

export const WelcomePageStyle = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: white;
    margin: 0;
    color: white;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const WelcomeText = styled.h1`
    font-weight: 600;
    font-size: 5rem;
    margin: 0;
    margin: 50px 0 0 0;
    color: #3b3b3a;
`

export const WelcomeInput = styled.input`
    border: none;
    border-bottom: solid 2px #3b3b3a;
    background-color: transparent;
    font-size: 2rem;
    outline: none;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 150px 0 0 0;
    color: #3b3b3a;
    font-weight: 500;

    ::placeholder {
        color: #3b3b3a;
    }
`

export const Pages = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
`


















export const MainPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #f6f8fa;
`

export const Wrapper = styled.nav`
  background-color: white;
  height: 100%;
  width: 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 0;
`

export const Logo = styled.div`
  font-family: 'Comfortaa', sans-serif;
  font-size: 3rem;
  font-weight: 600;
  color: #4c34e2;
`

export const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  fill: #CCCFD9;
  cursor: pointer;
  transition: 0.5s;
  margin: 0 0 -20px 0;
  
  :hover {
    fill: black;
  }

  :hover::after {
    background-color: black;
  }

  ::after {
    content: '';
    transition: 0.5s;
    display: block;
    height: 3px;
    width: 70px;
    background-color: #CCCFD9;
    position: absolute;
    border-radius: 50px;
    transform: translateY(-40px);
  }
`

export const IconsContainer = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RestPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`
