import {NavigationProp, RouteProp} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import LocationCard from '../../components/LocationCard/LocationCard';
import RenderFooter from '../../components/RenderFooter/RenderFooter';
import {requestToGetSingleEpisodeByUrl} from '../../services/api/EpisodeApi';
import {requestToGetSinglePerson} from '../../services/api/PersonApi';
import {
  ALIVE_TEXT,
  CREATED_AT_TEXT,
  DEAD_TEXT,
  EPISODES_TEXT,
  GENDER_TEXT,
  NO_INFO_TEXT,
  TYPE_TEXT,
} from '../../utils/constants/strings/English';
import {DarkRed, LightGreen} from '../../utils/styles/colors';
import EpisodeType from '../../utils/types/EpisodeType';
import PersonType from '../../utils/types/PersonType';
import styles from './styles';

type PersonScreenPropsType = {
  navigation: NavigationProp<any, any>;
  route: RouteProp<Record<string, {personId: number}>, string>;
};

const PersonScreen = ({
  route: {
    params: {personId},
  },
}: PersonScreenPropsType) => {
  const [person, setPerson] = useState<PersonType | null>(null);
  const [isPersonLoading, setIsPersonLoading] = useState<boolean>(true);
  const [isEpisodeLoading, setIsEpisodeLoading] = useState<boolean>(true);
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const episodeNumber = useRef<number>(0);

  const fetchDataEpisode = async () => {
    setIsEpisodeLoading(true);
    if (person === null || !isEpisodeLoading) {
      return;
    }
    const result = await requestToGetSingleEpisodeByUrl(
      person.episode[episodeNumber.current],
    );

    if (result !== undefined) {
      setEpisodes(prevEpisodes => [...prevEpisodes, result]);
      episodeNumber.current = episodeNumber.current + 1;
    }
    setIsEpisodeLoading(false);
  };

  const handleEndReached = async () => {
    if (
      !isPersonLoading &&
      episodeNumber.current + 1 !== person?.episode.length
    ) {
      await fetchDataEpisode();
    }
  };

  useEffect(() => {
    const fetchDataPerson = async () => {
      setIsPersonLoading(true);
      const personData = await requestToGetSinglePerson(personId);
      if (personData !== undefined) {
        setPerson(personData);
      }
      setIsPersonLoading(false);
    };
    fetchDataPerson();
  }, [personId]);

  if (isPersonLoading) {
    return <ActivityIndicator style={styles.container} />;
  }

  if (!person) {
    return (
      <View style={styles.container}>
        <Text>{NO_INFO_TEXT}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.infoView}>
        <Image source={{uri: person.image}} style={styles.personImage} />
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
          <View style={styles.textInfoView}>
            <Text style={styles.infoHeaderText}>{TYPE_TEXT}: </Text>
            <Text style={styles.infoText}>
              {person.type ? person.type : NO_INFO_TEXT}
            </Text>
          </View>
          <View style={styles.textInfoView}>
            <Text style={styles.infoHeaderText}>{GENDER_TEXT}: </Text>
            <Text style={styles.infoText}>{person.gender}</Text>
          </View>
        </View>
      </View>
      <View style={styles.createdView}>
        <Text style={styles.infoHeaderText}>{CREATED_AT_TEXT}: </Text>
        <Text style={styles.infoText}>{person.created.split('T')[0]}</Text>
      </View>
      <LocationCard
        name={person.origin.name}
        url={person.origin.url}
        isCurrentLocation={false}
      />
      <LocationCard
        name={person.location.name}
        url={person.location.url}
        isCurrentLocation={true}
      />
      {person !== null && (
        <View style={styles.episodeView}>
          <Text style={styles.episodeText}>{EPISODES_TEXT}: </Text>
          <FlatList
            data={episodes}
            renderItem={({item}) => <EpisodeCard {...item} />}
            keyExtractor={item => item.id.toString()}
            onEndReached={handleEndReached}
            onEndReachedThreshold={5}
            ListFooterComponent={<RenderFooter isLoading={isEpisodeLoading} />}
          />
        </View>
      )}
    </View>
  );
};

export default PersonScreen;
