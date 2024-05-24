import {NavigationProp} from '@react-navigation/native';
import {LOCATION_SCREEN_NAME} from '../../utils/constants/navigationNames';

type handlePressPropsTyep = {
  navigation: NavigationProp<any, any>;
  locationUrl: string;
};

export const handlePress = ({
  navigation,
  locationUrl,
}: handlePressPropsTyep) => {
  navigation.navigate(LOCATION_SCREEN_NAME, {locationUrl: locationUrl});
};
