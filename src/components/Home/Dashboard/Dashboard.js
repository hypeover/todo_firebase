import React, { useState } from 'react'
import { Pages } from '../styled/HomeStyles'
import './styles/link.css'
import { Header, Message, Date, SelectContainer, AddButton, SelectButtons, FilterContainer, ButtonsContainer } from './styles/Dashboard'
import { ReactComponent as GridIcon } from '../../assets/icons/grid.svg'
import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg'


const Dashboard = () => {

  


  return (
    <Pages>
      <Header>
        <Message>Good Morning</Message>
        <Date>Thursday, February 26, 2026</Date>
      </Header>
      <SelectContainer>
        <ButtonsContainer>
          <AddButton>+</AddButton>
          <SelectButtons>Notes</SelectButtons>
          <SelectButtons>Favorite</SelectButtons>
        </ButtonsContainer>
        <FilterContainer>
          <FilterIcon style={{height: '25px', width: '25px', cursor: 'pointer'}} />
          <GridIcon style={{height: '25px', width: '25px', marginLeft: '10px', cursor: 'pointer'}} />
        </FilterContainer>
      </SelectContainer>
        
    </Pages>
  )
}

export default Dashboard

