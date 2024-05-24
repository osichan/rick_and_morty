import {StyleSheet} from 'react-native';
import {DarkGrey, White, LightGrey} from '../../utils/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 160,
    backgroundColor: DarkGrey,
    marginTop: 20,
    flexDirection: 'row',
    borderRadius: 7,
  },
  image: {
    width: 160,
    height: 160,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
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
  statusView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusCircle: {
    backgroundColor: LightGrey,
    borderRadius: 100,
    width: 7,
    height: 7,
    alignSelf: 'center',
  },
  statusText: {
    color: White,
    fontWeight: '700',
    fontSize: 18,
    marginLeft: 10,
  },
  typeView: {
    flexDirection: 'row',
    width: '80%',
    marginTop: 15,
  },
  typeHeaderText: {
    color: White,
    fontSize: 16,
  },
  typeText: {
    color: White,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default styles;
