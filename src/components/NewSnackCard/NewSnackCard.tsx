import React from 'react'
import { Box } from '../Box/Box'
import { Text } from '../Text/Text'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'

export function NewSnackCard() {
  return (
    <Box mt='s40'>
      <Text mb='s8'>Refeições</Text>
      <Button title='Nova refeição' icon={<Icon name='plus' color='white' size={18}/>} />
    </Box>
  )
}
