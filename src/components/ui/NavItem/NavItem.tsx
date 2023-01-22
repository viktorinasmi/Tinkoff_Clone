import {FC} from 'react';
import {Pressable, Text} from 'react-native';
import {IFooterItem} from '@src/components/Footer/types';
import {styles} from './NavItem.styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TypeRootStackParamList} from '@src/types/types';

interface INavItem {
  item: IFooterItem;
  navigate: (screenName: keyof TypeRootStackParamList) => void;
  currentRoute: string;
}

export const NavItem: FC<INavItem> = ({
  item,
  navigate,
  currentRoute,
}: INavItem) => {
  const isActive = currentRoute === item.title;

  return (
    <Pressable style={styles.container} onPress={() => navigate(item.title)}>
      <FontAwesome5
        name={item.iconName}
        style={[styles.menu, isActive && styles.menuActive]}
      />
      <Text style={[styles.menuText, isActive && styles.menuTextActive]}>
        {item.title}
      </Text>
    </Pressable>
  );
};
