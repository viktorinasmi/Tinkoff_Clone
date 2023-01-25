import {Text, View} from 'react-native';
import {FC} from 'react';

export const Percent: FC<{percent: number}> = ({percent}) => {
  return (
    <View>
      <Text>{percent}</Text>
    </View>
  );
};
