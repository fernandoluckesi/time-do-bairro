import React from 'react'
import { MainContainer, SearchIcon, SearchInput } from './styles'
import { Image } from 'react-native'

export const SearchBar: React.FC = () => {
  return (
    <MainContainer>
      <SearchIcon>
        <Image source={require('../../../assets/icons/search-bar-icon.png')} />
      </SearchIcon>
      <SearchInput placeholder="Pesquisar time" />
    </MainContainer>
  )
}
