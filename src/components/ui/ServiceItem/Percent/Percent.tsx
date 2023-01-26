import {Text, View} from 'react-native';
import {FC} from 'react';
import {styles} from './Percent.styles';

export const Percent: FC<{percent: number}> = ({percent}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{percent + '%'}</Text>
    </View>
  );
};
