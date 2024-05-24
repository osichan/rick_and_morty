import {NavigationProp, RouteProp} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import PersonCard from '../../components/PersonCard/PersonCard';
import RenderFooter from '../../components/RenderFooter/RenderFooter';
import {requestToGetSingleEpisode} from '../../services/api/EpisodeApi';
import {
  CHARACTERS_TEXT,
  CREATED_AT_TEXT,
  NO_INFO_TEXT,
} from '../../utils/constants/strings/English';
import EpisodeType from '../../utils/types/EpisodeType';
import PersonType from '../../utils/types/PersonType';
import styles from './styles';
import {requestToGetSinglePersonByUrl} from '../../services/api/PersonApi';

type EpisodeScreenPropsType = {
  navigation: NavigationProp<any, any>;
  route: RouteProp<Record<string, {episodeId: number}>, string>;
};

const EpisodeScreen = ({
  route: {
    params: {episodeId},
  },
}: EpisodeScreenPropsType) => {
  const [episode, setEpisode] = useState<EpisodeType | null>(null);
  const [allPersons, setAllPersons] = useState<PersonType[]>([]);
  const [isPersonLoading, setIsPersonLoading] = useState<boolean>(true);
  const [isEpisodeLoading, setIsEpisodeLoading] = useState<boolean>(false);
  const personNumber = useRef<number>(0);

  const fetchDataPerson = async () => {
    setIsPersonLoading(true);
    if (episode === null || !isPersonLoading) {
      return;
    }
    const result = await requestToGetSinglePersonByUrl(
      episode.characters[personNumber.current],
    );

    if (result !== undefined) {
      setAllPersons(prevPersons => [...prevPersons, result]);
      personNumber.current = personNumber.current + 1;
    }
    setIsPersonLoading(false);
  };

  const handleEndReached = async () => {
    if (
      !isEpisodeLoading &&
      personNumber.current + 1 !== episode?.characters.length
    ) {
      await fetchDataPerson();
    }
  };

  useEffect(() => {
    const fetchDataEpisode = async () => {
      setIsEpisodeLoading(true);
      const episodeData = await requestToGetSingleEpisode(episodeId);
      if (episodeData !== undefined) {
        setEpisode(episodeData);
      }
      setIsEpisodeLoading(false);
    };
    fetchDataEpisode();
  }, [episodeId]);

  if (isEpisodeLoading) {
    return <ActivityIndicator style={styles.container} />;
  }

  if (!episode) {
    return (
      <View style={styles.container}>
        <Text>{NO_INFO_TEXT}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoView}>
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
      </View>
      <Text style={styles.charactersText}>{CHARACTERS_TEXT}: </Text>
      {episode !== null && (
        <View style={styles.main}>
          <FlatList
            style={styles.flatList}
            data={allPersons}
            renderItem={({item}) => <PersonCard {...item} />}
            keyExtractor={item => item.id.toString()}
            onEndReached={handleEndReached}
            onEndReachedThreshold={5}
            ListFooterComponent={<RenderFooter isLoading={isPersonLoading} />}
          />
        </View>
      )}
    </View>
  );
};
export default EpisodeScreen;
