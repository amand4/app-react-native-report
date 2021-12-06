import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.blue_dark,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:10

  },
  image: {
    height: 45,
    width: 45,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 25,
  },
});

export default styles;
