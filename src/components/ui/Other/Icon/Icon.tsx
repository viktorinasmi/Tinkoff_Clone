import {View} from 'react-native';
import {FC} from 'react';
import {IFooterItem} from '@src/components/Footer/types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {styles} from './Icon.styles';

interface IIcon extends Pick<IFooterItem, 'iconName'> {}

export const Icon: FC<IIcon> = ({iconName}) => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name={iconName} size={16} style={styles.icon} />
    </View>
  );
};
