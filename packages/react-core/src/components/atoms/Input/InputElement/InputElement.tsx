import React, { FC } from 'react';
import { StyleProp, TextInputProps, TextStyle } from 'react-native';
import { Mask } from '../hooks/useMask';
import { StyledInputElement } from '../styled';

export interface InputElementProps
  extends Omit<TextInputProps, 'onChange' | 'value'> {
  style?: StyleProp<TextStyle>;
  /**
   * TODO:
   */
  value?: string | Mask;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const InputElement: FC<InputElementProps> = ({
  onChange,
  placeholder,
  value,
  disabled = false,
  ...rest
}): JSX.Element => {
  const _value =
    typeof value === 'string' ? value : value?.maskValue?.formatted;

  return (
    <StyledInputElement
      {...rest}
      onChangeText={onChange}
      value={_value}
      placeholder={placeholder}
      disabled={disabled}
      editable={!disabled}
    />
  );
};

export default InputElement;
