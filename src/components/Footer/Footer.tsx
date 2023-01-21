import {View} from 'react-native';
import {styles} from './Footer.styles';
import {menu} from '@src/components/Footer/menu';
import {NavItem} from '@src/components/ui/NavItem';

export const Footer = () => {
  return (
    <View style={styles.container}>
      {menu.map(item => {
        <NavItem key={item.title} item={item} />;
      })}
    </View>
  );
};
