import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CREATED_AT_TEXT} from '../../utils/constants/strings/English';
import EpisodeType from '../../utils/types/EpisodeType';
import {handlePress} from './helpers';
import styles from './styles';

const EpisodeCard = React.memo((episode: EpisodeType) => {
  const navigation = useNavigation<NavigationProp<any, any>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        handlePress({navigation: navigation, episodeId: episode.id})
      }
      activeOpacity={0.6}>
      <View style={styles.textView}>
        <Text style={styles.nameText}>{episode.name}</Text>
        <View style={styles.airDateView}>
          <Text style={styles.airDateText}>{episode.airDate}</Text>
        </View>
        <View style={styles.createdView}>
          <Text style={styles.createdHeaderText}>{CREATED_AT_TEXT}: </Text>
          <Text style={styles.createdText}>
            {episode.created.split('T')[0]}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default EpisodeCard;
