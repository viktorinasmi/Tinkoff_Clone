import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    marginTop: 16,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  touchableAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerText: {
    color: 'rgba(0,0,0,.8)',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 32,
  },

  headerIcon: {
    width: 26,
    height: 26,
  },
});
