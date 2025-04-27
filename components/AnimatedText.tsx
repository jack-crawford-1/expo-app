import { ColourfulLetter } from './ColourfulLetter';
import { MotiView } from 'moti';
import { View } from 'react-native';
import { Easing } from 'react-native-reanimated';

export default function AnimatedText({ children }: { children: string }) {
  const letters = children.split('');

  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      {letters.map((letter, index) => (
        <MotiView
          key={index}
          from={{ translateY: 4 }}
          animate={{ translateY: -8 }}
          transition={{
            type: 'timing',
            duration: 1600,
            delay: index * 120,
            repeat: Infinity,
            repeatReverse: true,
            easing: Easing.inOut(Easing.ease),
          }}
        >
          <ColourfulLetter letter={letter} />
        </MotiView>
      ))}
    </View>
  );
}
