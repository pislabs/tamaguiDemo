import '@tamagui/core/reset.css'

import { Button, TamaguiProvider, YStack } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'

import config from './tamagui.config'

export const Root = () => {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <YStack f={1} ai="center" jc="center">
        <Button>Hello world</Button>
        <LinearGradient zIndex={-1} fullscreen colors={['red', 'blue']} />
      </YStack>
    </TamaguiProvider>
  )
}
