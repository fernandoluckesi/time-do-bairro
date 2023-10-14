import React from 'react'
import {
  LeftColumn,
  MainContainer,
  Line,
  RightColumn,
  RightColumnText,
} from './styles'
import { TouchableOpacity } from 'react-native'

interface rightColumnObject {
  id: number
  name: string
}

interface dataTableObject {
  leftColumn: string
  rightColumn: rightColumnObject[] | string | number
  isList?: boolean
  colorRightColumn?: string
  onPress?: () => any
  lastLine?: boolean
}

export interface InfosTableProps {
  dataTable: dataTableObject[]
}

export const InfosTable: React.FC<InfosTableProps> = ({ dataTable }) => {
  return (
    <MainContainer>
      {dataTable.map((line) => {
        return (
          <Line key={line.leftColumn} lastLine={line.lastLine}>
            <LeftColumn>{line.leftColumn}</LeftColumn>

            <RightColumn>
              {line.isList ? (
                line.rightColumn.map((info) => {
                  return (
                    <TouchableOpacity
                      disabled={!line.onPress}
                      onPress={info.onPress}
                    >
                      <RightColumnText
                        numberOfLines={1}
                        key={info.id}
                        colorRightColumn={line.colorRightColumn}
                      >
                        {info.name}
                      </RightColumnText>
                    </TouchableOpacity>
                  )
                })
              ) : (
                <TouchableOpacity
                  disabled={!line.onPress}
                  onPress={line.onPress}
                >
                  <RightColumnText
                    numberOfLines={1}
                    colorRightColumn={line.colorRightColumn}
                  >
                    {line.rightColumn}
                  </RightColumnText>
                </TouchableOpacity>
              )}
            </RightColumn>
          </Line>
        )
      })}
    </MainContainer>
  )
}
