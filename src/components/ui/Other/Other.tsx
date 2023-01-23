import {ScrollView, View} from 'react-native';
import {SubHeading} from '@src/components/ui/SubHeading';
import {styles} from './Other.style';
import {OtherItem} from '@src/components/ui/Other/OtherItem';
import {otherItems} from '@src/components/ui/Other/data';

export const Other = () => {
  return (
    <View>
      <SubHeading text="Important transfers" />
      <ScrollView
        style={styles.isLoaderScroll}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        {otherItems.map(item => (
          <OtherItem key={item.title} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};
