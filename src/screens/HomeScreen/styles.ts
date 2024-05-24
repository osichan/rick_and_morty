import {StyleSheet} from 'react-native';
import {Black, DarkBlue, White} from '../../utils/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkBlue,
    alignItems: 'center',
  },
  header: {
    height: 100,
    width: '100%',
    backgroundColor: White,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: Black,
    flexDirection: 'row',
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  main: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  flatList: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 15,
  },
});

export default styles;
