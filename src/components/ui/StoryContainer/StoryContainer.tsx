import {useData} from '@src/hooks/useData';
import {StoryContainer as SC} from 'react-native-stories-view';
import {styles} from './StoryContainer.style';

export const StoryContainer = () => {
  const {activeStories, setActiveStories} = useData();

  return (
    activeStories && (
      <SC
        images={activeStories}
        onComplete={() => setActiveStories(null)}
        visible={true}
        enableProgress={true}
        duration={20}
        containerStyle={styles.storyContainer}
      />
    )
  );
};
