
import React from 'react';

import {buttonPresets} from './ButtonPresets';
import { Box, TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { Text } from '../Text/Text';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
  icon?: React.ReactNode;
}
export function Button({
  title,
  loading,
  disabled = false,
  preset = 'primary',
  icon,
  ...touchableOpacityBoxPros
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'default' : 'active'];
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s6"
      {...buttonPreset.container}
      {...touchableOpacityBoxPros}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Box flexDirection="row" alignItems="center" justifyContent="space-around" gap='s14'>
        {icon}
        <Text preset="BodyM" bold color={buttonPreset.content}>
          {title}
        </Text>
        </Box>
      )}
    </TouchableOpacityBox>
  );
}