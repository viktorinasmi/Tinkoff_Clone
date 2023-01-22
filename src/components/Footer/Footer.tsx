import {View} from 'react-native';
import {styles} from './Footer.styles';
import {menu} from '@src/components/Footer/menu';
import {NavItem} from '@src/components/ui/NavItem';
import {TypeRootStackParamList} from '@src/types/types';

interface IFooter {
  navigate: (screenName: keyof TypeRootStackParamList) => void;
  currentRoute: string;
}

export const Footer = ({navigate, currentRoute}: IFooter) => {
  return (
    <View style={styles.container}>
      {menu.map(item => (
        <NavItem
          key={item.title}
          item={item}
          navigate={navigate}
          currentRoute={currentRoute}
        />
      ))}
    </View>
  );
};
