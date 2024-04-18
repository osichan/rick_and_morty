import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  ALIVE_TEXT,
  DEAD_TEXT,
  NO_INFO_TEXT,
  TYPE_TEXT,
} from '../../utils/constants/strings/English';
import {DarkRed, LightGreen} from '../../utils/styles/colors';
import PersonType from '../../utils/types/PersonType';
import {handlePress} from './helpers';
import styles from './styles';

const PersonCard = React.memo((person: PersonType) => {
  const navigation = useNavigation<NavigationProp<any, any>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handlePress({navigation: navigation, personId: person.id})}
      activeOpacity={0.6}>
      <Image source={{uri: person.image}} style={styles.image} />
      <View style={styles.textView}>
        <Text style={styles.nameText}>{person.name}</Text>
        <View style={styles.statusView}>
          <View
            style={[
              styles.statusCircle,
              person.status === ALIVE_TEXT
                ? {
                    backgroundColor: LightGreen,
                  }
                : person.status === DEAD_TEXT && {
                    backgroundColor: DarkRed,
                  },
            ]}
          />
          <Text style={styles.statusText}>{person.status}</Text>
        </View>
        <View style={styles.typeView}>
          <Text style={styles.typeHeaderText}>{TYPE_TEXT}: </Text>
          <Text style={styles.typeText}>
            {person.type ? person.type : NO_INFO_TEXT}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default PersonCard;
