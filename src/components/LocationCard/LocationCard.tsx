import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  CURRENT_LOCATION_TEXT,
  NO_INFO_TEXT,
  ORIGINALY_FROM_TEXT,
} from '../../utils/constants/strings/English';
import styles from './styles';
import {handlePress} from './helpers';

interface LocationPropsType {
  name: string;
  url: string;
  isCurrentLocation: boolean;
}

const LocationCard = ({name, url, isCurrentLocation}: LocationPropsType) => {
  const navigation = useNavigation<NavigationProp<any, any>>();

  return (
    <View style={styles.container}>
      <Text style={styles.locationHeaderText}>
        {isCurrentLocation ? CURRENT_LOCATION_TEXT : ORIGINALY_FROM_TEXT}:{' '}
      </Text>
      {name !== 'unknown' ? (
        <TouchableOpacity
          onPress={() =>
            handlePress({navigation: navigation, locationUrl: url})
          }
          style={styles.locationButton}
          activeOpacity={0.6}>
          <Text style={styles.locationButtonText}>{name}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.locationButtonText}>{NO_INFO_TEXT}</Text>
      )}
    </View>
  );
};

export default LocationCard;
