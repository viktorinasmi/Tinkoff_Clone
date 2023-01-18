import {Text, TouchableHighlight} from 'react-native';
import {styles} from './Button.styles';

interface IButton {
  onPress: () => void;
  title: string;
  secondary?: boolean;
  colors?: [string, string];
}

export const Button = ({
  onPress,
  title,
  secondary,
  colors = ['#ffdd2d', '#FBBF24'],
}: IButton) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors[1]}
      style={[styles.button, secondary && styles.buttonSecondary]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
};
