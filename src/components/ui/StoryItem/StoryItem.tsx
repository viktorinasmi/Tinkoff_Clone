import {ImageBackground, Pressable, Text, View} from 'react-native';
import {styles} from './StoryItem.styles';
import {FC} from 'react';
import {IStory} from '@src/components/ui/Stories/type';

export const StoryItem: FC<{story: IStory}> = ({story}) => {
  console.log('story ===', story);
  return (
    <Pressable onPress={() => {}}>
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
