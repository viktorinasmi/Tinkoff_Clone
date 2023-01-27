import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerInfo: {
    width: '83%',
  },
  title: {
    fontSize: 20,
    lineHeight: 28,
    color: ' rgb(31, 41, 55)',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 13,
    color: 'rgb(107, 114, 128)',
    marginTop: 4,
    opacity: 0.9,
  },
  containerIcon: {
    width: 36,
    height: 36,
    color: 'rgb(59, 130, 246)',
    opacity: 0.8,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
