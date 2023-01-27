import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    marginBottom: 8,
    borderBottomWidth: 0.3,
    borderBottomColor: 'rgb(215,215,215)',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 8,
  },
  textHeader: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgb(31, 41, 55)',
    lineHeight: 20,
  },
  textDescription: {
    fontSize: 12,
    color: 'rgb(107, 114, 128)',
    lineHeight: 16,
  },
});
