import {View} from 'react-native';
import {FC} from 'react';
import {MenuItem} from '@src/components/ui/MenuItem';
import {menu} from '@src/components/ui/Menu/list';

export const Menu: FC = () => {
  return (
    <View>
      {menu.map(item => (
        <MenuItem key={item.title} item={item} />
      ))}
    </View>
  );
};
