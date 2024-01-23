import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { ScrollViewContainer, ViewContainer } from './components/ScreenContainer'
import { Box } from '../Box/Box'
import { useAppSafeArea } from '../../hooks/useAppSafeArea'
import { useAppTheme } from '../../hooks/useAppTheme'

interface ScreenProps{
  children: React.ReactNode
  cangoBack?: boolean
  scrollable?: boolean
}
export function Screen({children, cangoBack=false, scrollable=false}: ScreenProps) {
  const {bottom,top} = useAppSafeArea()
  const {colors} = useAppTheme()
  const Container = scrollable ? ScrollViewContainer : ViewContainer 
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{ flex: 1 }}>
      <Container backgroundColor={colors.white} >
        <Box paddingBottom='s24' paddingHorizontal='s24' style={{paddingTop:top, paddingBottom:bottom}}>
        {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  )
}