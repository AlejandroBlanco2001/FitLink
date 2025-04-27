import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';

// Add your SFSymbol to FontAwesome6 mappings here.
const MAPPING = {
  // See FontAwesome6 here: https://icons.expo.fyi
  // See SF Symbols in the SF Symbols app on Mac.
  'person.fill': 'person',
  'dumbbell.fill': 'dumbbell',
  'house.fill': 'house',
  'chart.bar.fill': 'chart-column',
  'scalemass.fill': 'weight-scale',
  'ruler.fill': 'ruler',
  'percent': 'percent',
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof FontAwesome6>['name']
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  return <FontAwesome6 color={color} size={size} name={MAPPING[name]} style={style} />;
}