import {Linking, Pressable, Text, View} from 'react-native';
import {FC} from 'react';
import {IMoreItem} from '@src/components/ui/Menu/types';
import {styles} from './MenuItem.styles';
import {BOX_SHADOW} from '@src/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const MenuItem: FC<{item: IMoreItem}> = ({item}) => {
  return (
    <Pressable
      style={[styles.container, BOX_SHADOW]}
      onPress={() => Linking.openURL(item.link)}>
      <View style={styles.containerInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.containerIcon}>
        <FontAwesome5 name={item.iconName} size={22} color="#428bf9" />
      </View>
    </Pressable>
  );
};
