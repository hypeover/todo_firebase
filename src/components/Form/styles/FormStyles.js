import styled from "styled-components";

export const MainPage = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: space-between;
`

export const WrapperLeft = styled.div`
    width: ${(props) => props.bool ? '40vw' : '60vw'};
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: 0.7s;

`

export const WrapperRight = styled.div`
    width: ${(props) => props.bool ? '60vw' : '40vw'};
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: 0.7s;
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

export const MailInput = styled.input`
    outline: none;
    font-size: 1.4rem;
    font-weight: 600;
    border: solid 3px ${(props) => props.bool ? '#4c34e2' : '#CCCFD9'} ;
    box-sizing: border-box;
    padding: 10px 20px 10px 50px;
    border-radius: 15px;
    z-index: 20;
    background-color: transparent;
    transition: 0.5s;

    :hover {
        border: solid 3px #4c34e2;
    }

    ::placeholder {
      color: #82859C;
    }
`

export const PasswordInput = styled.input`
    outline: none;
    font-size: 1.4rem;
    font-weight: 600;
    border: solid 3px ${(props) => props.bool ? '#4c34e2' : '#CCCFD9'} ;
    box-sizing: border-box;
    padding: 10px 20px 10px 50px;
    border-radius: 15px;
    z-index: 20;
    background-color: transparent;
    transition: 0.5s;
    margin: 15px 0 0 0;

    :hover {
        border: solid 3px #4c34e2;
    }
    
    ::placeholder {
      color: #82859C;
    }
`

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0 5px 0;
  color: #82859C;
  font-weight: 600;
  font-size: 1.3rem;
  border: solid 3px #CCCFD9;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 10px 20px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  fill: #82859C;
  transition: 0.2s;
  cursor: pointer;
  background-color: transparent;


  :hover {
    transition: 0.5s;
    border: solid 3px #4c34e2;
    color: white;
    fill: white;
  }

  ::after {
    content: '';
    display: block;
    position: absolute;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    transform: translate(-100px,-75px);
    background-color: #4c34e2;
    transition: 0.5s;
    z-index: -1;
    opacity: 0;
  }

  ::before {
    content: '';
    display: block;
    position: absolute;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    transform: translate(100px,75px);
    background-color: rgba(74,0,224,1);
    transition: 0.5s;
    z-index: -1;
    opacity: 0;
  }

  :hover::after {
    content: '';
    display: block;
    position: absolute;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    transform: translate(0px,0px);
    background-color: #4c34e2;
    opacity: 1;
  }

  :hover::before {
    content: '';
    display: block;
    position: absolute;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    transform: translate(0px,0px);
    background-color: rgba(74,0,224,1);
    opacity: 1;
  }
`

export const Header = styled.h1`
  color: #4c34e2;
  font-size: 3rem;
  margin: 0 0 30px 0;
  font-weight: 500;
  font-family: 'quicksand', sans-serif;
`

export const SwitchCard = styled.div`
    height: 100vh;
    width: 60vw;
    background: rgba( 76, 52, 226, 0.75 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 7px );
    -webkit-backdrop-filter: blur( 7px );
    position: absolute;
    z-index: 100;
    left: ${(props) => props.switch ? '40vw' : '0px'};
    right: ${(props) => props.switch ? '0px' : '40vw'};
    transition: 0.5s;
`

export const SwitchText = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.2rem;
    user-select: none;
`

export const SwitchHyper = styled.a`
    cursor: pointer;
    color: #4c34e2;
    font-weight: 700;
    margin: 0 0 0 5px;
`

export const PasswordText = styled.p`
  font-weight: 600;
  margin: 15px 0 10px 0;
  text-align: left;
  transform: translateX(-67px);
  font-size: 1.15rem;
  color: ${(props) => props.bool ? 'green' : '#CCCFD9'};
  transition: 0.5s;
`

export const Alert = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  position: absolute;
  top: ${(props) => props.bool ? '0px' : '-100px'};
  transition: 0.4s;
  background: rgba( 76, 52, 226, 0.75 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 7px );
  -webkit-backdrop-filter: blur( 7px );
  color: white;
  padding: 20px 20px;
  border-radius: 10px;
`

export const SliderText = styled.p`
  color: white;
  font-size: 2rem;
  font-weight: 600;
`

export const Name = styled.h1`
  font-family: 'Comfortaa', sans-serif;
  color: #1F152A;
  font-size: 5.5rem;
  margin: 0 0 30px 0;
`

