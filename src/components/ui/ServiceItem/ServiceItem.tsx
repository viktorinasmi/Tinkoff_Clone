import React from 'react';
import {Text, View} from 'react-native';
import {FC} from 'react';
import {IService} from '@src/screens/Services/types';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './ServiceItem.styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Percent} from '@src/components/ui/ServiceItem/Percent';
import {getRandomGradient} from '@src/components/utils/getRandomGradient';

export const ServiceItem: FC<{service: IService}> = ({service}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <LinearGradient
          colors={getRandomGradient()}
          style={styles.itemGradient}>
          <Percent percent={service.percent} />
          <FontAwesome5 name={service.iconName} size={25} color="#fff" />
        </LinearGradient>
      </View>
      <Text style={styles.itemText}>{service.title}</Text>
    </View>
  );
};
