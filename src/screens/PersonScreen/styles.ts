import {StyleSheet} from 'react-native';
import {
  Black,
  DarkGrey,
  LightGrey,
  Orange,
  White,
} from '../../utils/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkGrey,
  },
  infoView: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  personImage: {
    width: 200,
    height: 200,
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
  textInfoView: {
    flexDirection: 'row',
    width: '80%',
    marginTop: 15,
  },
  infoHeaderText: {
    color: White,
    fontSize: 16,
  },
  infoText: {
    color: White,
    fontSize: 16,
    fontWeight: '700',
  },
  createdView: {
    flexDirection: 'row',
    width: '80%',
    marginTop: 15,
    marginLeft: 15,
  },
  locationView: {
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
  episodeView: {
    flex: 1,
    borderTopWidth: 2,
    borderColor: Black,
    marginTop: 10,
    paddingTop: 10,
  },
  episodeText: {
    color: White,
    fontSize: 22,
    fontWeight: '700',
  },
});

export default styles;
