import React from 'react';
import {ScrollView, View} from 'react-native';
import {useStories} from '@src/hooks/useStories';
import {Loader} from '@src/components/ui/Loader';
import {StoryItem} from '@src/components/ui/StoryItem';
import {styles} from './Stories.styles';

export const Stories = () => {
  const {isLoading, stories} = useStories();
  console.log('stories ===', stories);

  return (
    <View style={styles.component}>
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {stories.map(story => (
            <StoryItem key={story._id} story={story} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};
