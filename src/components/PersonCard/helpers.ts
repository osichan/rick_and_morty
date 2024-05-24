import {NavigationProp} from '@react-navigation/native';
import {PERSON_SCREEN_NAME} from '../../utils/constants/navigationNames';

type handlePressPropsTyep = {
  navigation: NavigationProp<any, any>;
  personId: number;
};

export const handlePress = ({navigation, personId}: handlePressPropsTyep) => {
  navigation.navigate(PERSON_SCREEN_NAME, {personId: personId});
};
