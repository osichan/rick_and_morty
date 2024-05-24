import {StyleSheet} from 'react-native';
import {Orange, White} from '../../utils/styles/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 15,
  },
  locationHeaderText: {
    color: White,
    fontSize: 18,
    fontWeight: '700',
  },
  locationButton: {
    borderRadius: 6,
    borderWidth: 2,
    borderColor: Orange,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  locationButtonText: {
    color: Orange,
    fontSize: 18,
    fontWeight: '700',
  },
  infoView: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
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
  createdView: {
    flexDirection: 'row',
    width: '80%',
    marginTop: 15,
    marginLeft: 15,
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
  createdHeaderText: {
    color: White,
    fontSize: 16,
  },
  createdText: {
    color: White,
    fontSize: 16,
    fontWeight: '700',
  },
  charactersText: {
    color: White,
    fontSize: 22,
    fontWeight: '700',
    marginTop: 20,
    alignSelf: 'flex-start',
    marginLeft: 15,
  },
});

export default styles;
