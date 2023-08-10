import styled  from "styled-components/native";

export interface UserImageProps {
    size: number;
    color: string;
}

export const UserImage = styled.Image<UserImageProps>`
 width: ${({ size }) => size || 50}px;
  height: ${({ size }) => size || 50}px;
  border-radius: ${({ size }) => (size ? size / 2 : 25)}px;
  border-width: 2px;
  border-color: ${({color}) => color};
`
