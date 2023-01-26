import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderRightWidth: 27,
    borderTopWidth: 27,
    borderRightColor: 'transparent',
    borderTopColor: '#AAEF00',
    transform: [{rotate: '90deg'}],
  },
  text: {
    width: 40,
    height: 40,
    fontSize: 10,
    position: 'absolute',
    transform: [{rotate: '-40deg'}],
    top: -34,
    left: 7,
  },
});
