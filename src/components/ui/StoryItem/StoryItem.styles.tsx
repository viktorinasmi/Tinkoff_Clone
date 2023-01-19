import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStory: {
    width: 96,
    height: 96,
    borderColor: 'rgb(96, 165, 250)',
    borderRadius: 16,
    marginLeft: 16,
    borderStyle: 'solid',
    padding: 2,
    borderWidth: 1,
  },
  wrapperStoryImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  storyImage: {
    borderRadius: 12,
  },
  storyText: {
    color: '#fff',
    fontSize: 12,
    margin: 8,
  },
});
