import {
  SafeAreaView,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

// SLIDE Bar
import React, { useState } from 'react';
import { Slider } from 'react-native';

const SlideBarExample = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const onSliderValueChange = (value) => {
    setSliderValue(value);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Value: {sliderValue}</Text>
      <Slider
        style={{ width: '80%', height: 40 }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FFFFFF"
        step={1}
        value={sliderValue}
        onValueChange={onSliderValueChange}
      />
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
    <SlideBarExample />
    </SafeAreaView>
  );
}

export default App;
