import React from 'react';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold_Italic } from '@expo-google-fonts/nunito';

import Routes from './src/routes';

export default function App() {
  const [fontLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold_Italic
  });

  if (!fontLoaded) {
    return null;
  }
  return (
    <Routes />
  )
}

