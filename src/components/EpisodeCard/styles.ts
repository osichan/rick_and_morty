import {StyleSheet} from 'react-native';
import {DarkBlue, White} from '../../utils/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 140,
    width: '80%',
    backgroundColor: DarkBlue,
    marginLeft: 15,
    marginTop: 20,
    flexDirection: 'row',
    borderRadius: 7,
  },
  textView: {
    paddingLeft: 10,
    flex: 1,
  },
  nameText: {
    fontSize: 20,
    fontWeight: '800',
    width: '90%',
    color: White,
  },
  airDateView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  airDateText: {
    color: White,
    fontWeight: '700',
    fontSize: 18,
    marginLeft: 10,
  },
  createdView: {
    flexDirection: 'row',
    width: '80%',
    marginTop: 15,
  },
  createdHeaderText: {
    color: White,
    fontSize: 16,
  },
  createdText: {
    color: White,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default styles;
