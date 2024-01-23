import React from 'react'
import { Box, TouchableOpacityBox } from '../Box/Box'
import { Text } from '../Text/Text'
import { Icon } from '../Icon/Icon'

export function StatusCard() {
  return (
    <TouchableOpacityBox backgroundColor='greenLight' padding='s24' mt='s32' alignItems='center' borderRadius='s8'>
      <Box position='absolute' top={10} right={10}>
      <Icon name='arrowUpRight' color='greenDark' />
      </Box>
      <Text preset='TitleG'>90,86</Text>
      <Text preset='BodyS'>das refeições dentro da dieta</Text>
    </TouchableOpacityBox>
  )
}