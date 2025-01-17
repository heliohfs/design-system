import styled, { css } from '@emotion/native';
import {
  FontStackType,
  FontWeightType,
  StyleProps,
  Text,
} from '@tecsinapse/react-core';
import { TextNativeProps } from './Text';

export interface Font {
  fontStack?: FontStackType;
  fontWeight?: FontWeightType;
}

export const fontStyles = ({
  theme,
  fontStack = 'default',
  fontWeight = 'regular',
}: Partial<Font & Partial<StyleProps>>) => {
  const fontFamily = theme?.font.stack[fontStack] || '';
  const fontStyle = theme?.font.files[fontWeight];
  return css`
    font-weight: normal;
    font-family: ${fontStyle?.replace('{0}', fontFamily)};
  `;
};

export const StyledNativeText = styled(Text)<
  Font & Partial<TextNativeProps> & Partial<StyleProps>
>(fontStyles);
