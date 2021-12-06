import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    backgroundColor: colors.blue_dark,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 5,
    lineHeight: 28,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 12,
    paddingHorizontal: 10,
    color: colors.white,
  },
  image: {
    // height: Dimensions.get('window').width * 0.9,
    height: 100,
    width: 100,
  },
  button: {
    backgroundColor: colors.yellow_light,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height: 40,
    width: 200,
  },
  buttonText: {
    color: colors.yellow_dark,
    fontSize: 12,
  },
});

export default styles;
