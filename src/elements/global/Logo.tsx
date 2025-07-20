import React from "react";
import { View, Pressable } from "react-native";
import Svg, { Polygon } from "react-native-svg";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
} from "react-native-reanimated";

const AnimatedPolygon = Animated.createAnimatedComponent(Polygon);

const blocks = [
  { points: "0,10 10,0 20,10 10,20", opacity: 1 },
  { points: "22,10 32,0 42,10 32,20", opacity: 0.7 },
  { points: "44,10 54,0 64,10 54,20", opacity: 0.4 },
  { points: "11,22 21,12 31,22 21,32", opacity: 0.6 },
  { points: "33,22 43,12 53,22 43,32", opacity: 0.8 },
  { points: "22,34 32,24 42,34 32,44", opacity: 1 },
];

const Logo: React.FC<{ style?: any }> = ({ style }) => {
  const transforms = blocks.map(() => ({
    x: useSharedValue(0),
    y: useSharedValue(0),
    rotate: useSharedValue(0),
  }));

  const handlePress = () => {
    transforms.forEach(({ x, y, rotate }) => {
      x.value = withTiming((Math.random() - 0.5) * 20, { duration: 200 });
      y.value = withTiming((Math.random() - 0.5) * 20, { duration: 200 });
      rotate.value = withTiming((Math.random() - 0.5) * 25, { duration: 200 });

      // Reset after timeout
      setTimeout(() => {
        x.value = withTiming(0, { duration: 200 });
        y.value = withTiming(0, { duration: 200 });
        rotate.value = withTiming(0, { duration: 200 });
      }, 300);
    });
  };

  return (
    <Pressable onPress={handlePress}>
      <View
        style={[
          {
            width: 68,
            height: 48,
            transform: [{ rotate: "180deg" }],
          },
          style,
        ]}
      >
        <Svg width="68" height="50" viewBox="0 0 66 48">
          {blocks.map((block, index) => {
            const { x, y, rotate } = transforms[index];

            const animatedProps = useAnimatedProps(() => {
              return {
                transform: [
                  { translateX: x.value },
                  { translateY: y.value },
                  { rotate: `${rotate.value}deg` },
                ],
              };
            });

            return (
              <AnimatedPolygon
                key={index}
                points={block.points}
                fill="#4184f3"
                opacity={block.opacity}
                animatedProps={animatedProps}
              />
            );
          })}
        </Svg>
      </View>
    </Pressable>
  );
};

export default Logo;
