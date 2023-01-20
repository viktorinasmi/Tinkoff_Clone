import {ImageBackground, Pressable, Text, View} from 'react-native';
import {styles} from './StoryItem.styles';
import {FC} from 'react';
import {IStory} from '@src/components/ui/Stories/type';
import {useData} from '@src/hooks/useData';

export const StoryItem: FC<{story: IStory}> = ({story}) => {
  const {setActiveStories} = useData();

  return (
    <Pressable onPress={() => setActiveStories(story.images)}>
      <View style={styles.containerStory}>
        <ImageBackground
          style={styles.wrapperStoryImage}
          source={{uri: story.images[0]}}
          resizeMode="cover"
          imageStyle={styles.storyImage}>
          <Text style={styles.storyText}>{story.heading}</Text>
        </ImageBackground>
      </View>
    </Pressable>
  );
};
