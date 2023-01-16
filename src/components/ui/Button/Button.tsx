import {Text, TouchableHighlight} from 'react-native';
import {styles} from './Button.styles';

interface IButton {
  onPress: () => void;
  title: string;
  colors?: [string, string];
}

export const Button = ({
  onPress,
  title,
  colors = ['#ffdd2d', '#FBBF24'],
}: IButton) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors[1]}
      style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
};
