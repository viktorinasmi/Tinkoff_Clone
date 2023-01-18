import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    backgroundColor: 'rgba(134,146,155,0.24)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerSmall: {
    width: 36,
    height: 36,
    marginRight: 12,
  },

  containerLarge: {
    width: 48,
    height: 48,
  },

  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textSmall: {
    fontSize: 18,
    lineHeight: 28,
  },
  textLarge: {
    fontSize: 20,
    lineHeight: 28,
  },
});
