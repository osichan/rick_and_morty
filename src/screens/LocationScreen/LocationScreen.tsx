import {NavigationProp, RouteProp} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import PersonCard from '../../components/PersonCard/PersonCard';
import RenderFooter from '../../components/RenderFooter/RenderFooter';
import {requestToGetSingleLocationByUrl} from '../../services/api/LocationApi';
import {requestToGetSinglePersonByUrl} from '../../services/api/PersonApi';
import {
  CHARACTERS_TEXT,
  CREATED_AT_TEXT,
  NO_INFO_TEXT,
} from '../../utils/constants/strings/English';
import LocationType from '../../utils/types/LocationType';
import PersonType from '../../utils/types/PersonType';
import styles from './styles';

type LocationCardPropsType = {
  navigation: NavigationProp<any, any>;
  route: RouteProp<Record<string, {locationUrl: string}>, string>;
};

const LocationScreen = ({
  route: {
    params: {locationUrl},
  },
}: LocationCardPropsType) => {
  const [location, setLoction] = useState<LocationType | null>(null);
  const [allPersons, setAllPersons] = useState<PersonType[]>([]);
  const [isPersonLoading, setIsPersonLoading] = useState<boolean>(true);
  const [isLoctionLoading, setIsLoctionLoading] = useState<boolean>(false);
  const personNumber = useRef<number>(0);

  const fetchDataPerson = async () => {
    setIsPersonLoading(true);
    if (location === null || !isPersonLoading) {
      return;
    }
    const result = await requestToGetSinglePersonByUrl(
      location.residents[personNumber.current],
    );

    if (result !== undefined) {
      setAllPersons(prevPersons => [...prevPersons, result]);
      personNumber.current = personNumber.current + 1;
    }
    setIsPersonLoading(false);
  };

  const handleEndReached = async () => {
    if (
      !isLoctionLoading &&
      personNumber.current + 1 !== location?.residents.length
    ) {
      await fetchDataPerson();
    }
  };

  useEffect(() => {
    const fetchDataLocation = async () => {
      setIsLoctionLoading(true);
      const locationData = await requestToGetSingleLocationByUrl(locationUrl);
      if (locationData !== undefined) {
        setLoction(locationData);
      }
      setIsLoctionLoading(false);
    };
    fetchDataLocation();
  }, [locationUrl]);

  if (isLoctionLoading) {
    return <ActivityIndicator style={styles.container} />;
  }

  if (!location) {
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
          <Text style={styles.nameText}>{location.name}</Text>
          <View style={styles.airDateView}>
            <Text style={styles.airDateText}>{location.type}</Text>
          </View>
          <View style={styles.createdView}>
            <Text style={styles.createdHeaderText}>{CREATED_AT_TEXT}: </Text>
            <Text style={styles.createdText}>
              {location.created.split('T')[0]}
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.charactersText}>{CHARACTERS_TEXT}: </Text>
      <View style={styles.main}>
        <FlatList
          style={styles.flatList}
          data={allPersons}
          renderItem={({item}) => <PersonCard {...item} />}
          keyExtractor={(item, index) => item.id.toString() + index}
          onEndReached={handleEndReached}
          onEndReachedThreshold={5}
          ListFooterComponent={<RenderFooter isLoading={isPersonLoading} />}
        />
      </View>
    </View>
  );
};

export default LocationScreen;
