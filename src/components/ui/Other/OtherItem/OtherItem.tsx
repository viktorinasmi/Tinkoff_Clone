import {Pressable, Text} from 'react-native';
import {FC} from 'react';
import {IOtherItem} from '@src/components/ui/Other/types';
import {Icon} from '@src/components/ui/Other/Icon';
import {styles} from './OtherItem.styles';
import {BOX_SHADOW} from '@src/styles';

export const OtherItem: FC<{item: IOtherItem}> = ({item}) => {
  return (
    <Pressable style={[styles.container, BOX_SHADOW]}>
      <Icon iconName={item.iconName} />
      <Text style={styles.text}>{item.title}</Text>
    </Pressable>
  );
};
