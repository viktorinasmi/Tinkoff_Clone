import {Pressable, Text, View} from 'react-native';
import {IFooterItem} from '@src/components/Footer/types';
import {styles} from './NavItem.styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface INavItem {
  item: IFooterItem;
}

export const NavItem = ({item}: INavItem) => {
  return (
    <Pressable style={styles.container} onPress={null}>
      <FontAwesome5 name={item.iconName} style={styles.icon} />
    </Pressable>
  );
};
