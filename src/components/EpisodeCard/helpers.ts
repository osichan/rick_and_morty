import {NavigationProp} from '@react-navigation/native';
import {EPISODE_SCREEN_NAME} from '../../utils/constants/navigationNames';

type handlePressPropsTyep = {
  navigation: NavigationProp<any, any>;
  episodeId: number;
};

export const handlePress = ({navigation, episodeId}: handlePressPropsTyep) => {
  navigation.navigate(EPISODE_SCREEN_NAME, {episodeId: episodeId});
};
