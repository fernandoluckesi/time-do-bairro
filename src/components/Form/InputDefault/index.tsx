import React, { useState } from 'react'
import {
  IconContainer,
  LineInputContainer,
  MainContainer,
  TextInputErrorMessage,
  TextInputStyled,
} from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../../../global/theme'
import { TextInputProps, TouchableOpacity } from 'react-native'

interface InputDefaultProps extends TextInputProps {
  leftIconName?: string
  rightIconName?: string
  onPressRightIconName?: () => any
  iconSize?: number
  value?: string
  errorMessage?: string
}

export const InputDefault: React.FC<InputDefaultProps> = ({
  leftIconName,
  rightIconName,
  onPressRightIconName,
  iconSize,
  value,
  errorMessage,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
    setIsFilled(!!value)
  }

  const handleInputChange = (value) => {
    console.log({ value, isFocused })
  }

  return (
    <MainContainer>
      <LineInputContainer isFocused={isFocused}>
        {leftIconName && (
          <IconContainer>
            <MaterialIcons
              name={leftIconName}
              size={iconSize}
              color={
                isFocused || isFilled
                  ? theme.colors.primary
                  : theme.colors.inactive
              }
            />
          </IconContainer>
        )}
        <TextInputStyled
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={handleInputChange}
          value={value}
          {...props}
        />

        {rightIconName && (
          <IconContainer>
            <TouchableOpacity onPress={onPressRightIconName} activeOpacity={1}>
              <MaterialIcons
                name={rightIconName}
                size={iconSize}
                color={
                  isFocused || isFilled
                    ? theme.colors.primary
                    : theme.colors.inactive
                }
              />
            </TouchableOpacity>
          </IconContainer>
        )}
      </LineInputContainer>

      {errorMessage && (
        <TextInputErrorMessage>{errorMessage}</TextInputErrorMessage>
      )}
    </MainContainer>
  )
}
