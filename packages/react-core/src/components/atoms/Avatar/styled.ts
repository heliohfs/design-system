import styled from '@emotion/native';
import { Image, View } from 'react-native';
import { StyleProps, PressableSurface, Text } from '@tecsinapse/react-core';
import { AvatarProps } from './Avatar';

export const ContainerButtonAvatar = styled(PressableSurface)<
  Partial<StyleProps & AvatarProps>
>`
  width: ${({ theme, size = 'mega' }) => theme.iconSize[size]};
  height: ${({ theme, size = 'mega' }) => theme.iconSize[size]};
`;

export const StyledAvatar = styled(Image)<Partial<StyleProps>>`
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const StyledBackground = styled(View)<Partial<StyleProps>>`
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  background-color: ${({ theme }) => theme.color.secondary.dark};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const StyledText = styled(Text)<Partial<StyleProps>>`
  text-align: center;
  align-self: center;
  flex: 1;
  text-transform: uppercase;
`;
