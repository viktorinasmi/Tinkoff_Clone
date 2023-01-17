import {Text, View} from 'react-native';
import {styles} from './Avatar.styles';

interface IAvatar {
  name?: string | null;
  size?: 'small' | 'large';
}

export const Avatar = ({name, size = 'small'}: IAvatar) => {
  const isSmall = size === 'small';

  const stylesSize = isSmall ? styles.containerSmall : styles.containerLarge;
  const stylesText = isSmall ? styles.textSmall : styles.textLarge;

  return (
    <View style={[styles.container, stylesSize]}>
      <Text style={[styles.text, stylesText]}> {name.slice(0, 1)}</Text>
    </View>
  );
};
