import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(209, 213, 219)',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  containerAuth: {
    backgroundColor: 'rgb(59, 130, 246)',
    alignSelf: 'flex-end',
  },
  text: {
    color: 'rgb(31, 41, 55)',
  },
  textAuth: {
    color: 'rgb(255, 255, 255)',
  },
  timestamp: {
    fontSize: 10,
    color: 'rgb(55, 65, 81)',
    opacity: 0.7,
    marginLeft: 8,
  },
  timestampAuth: {
    color: 'rgb(255, 255, 255)',
  },
});
