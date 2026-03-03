import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 100px;
    
`
export const Message = styled.p`
    font-size: 2.2rem;
    font-weight: 700;
    margin: 0;
`

export const Date = styled.p`
    font-size: 1rem;
    margin: 0;
    font-weight: 500;
    margin-top: 5px;

`

export const SelectContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    margin: 0;
`

export const AddButton = styled.button`
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    margin-right: 20px;
    transition: 0.5s;

    :hover {
        color: #4c34e2
        
    }


`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`



export const SelectButtons = styled.a`
    font-size: 1.7rem;
    font-weight: 600;
    cursor: pointer;
    margin-right: 20px;
`

export const FilterContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const FilterButtons = styled.a`
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    margin-right: 10px;
`
