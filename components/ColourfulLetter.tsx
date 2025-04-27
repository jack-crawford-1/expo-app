import React, { useEffect } from 'react';
import { TextStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  GetMidtoneColour,
  GetNatureColour,
  GetRandomColour,
} from './RandomColours';

export function ColourfulLetter({ letter }: { letter: string }) {
  const colour = useSharedValue('#ffffff');

  useEffect(() => {
    const interval = setInterval(() => {
      const newColour = GetRandomColour();
      colour.value = withTiming(newColour, {
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      color: colour.value,
    } as TextStyle;
  });

  return (
    <Animated.Text
      style={[
        {
          fontSize: 58,
          fontFamily: 'FredokaBold',
          textTransform: 'uppercase',
        },
        animatedStyle,
      ]}
    >
      {letter}
    </Animated.Text>
  );
}
