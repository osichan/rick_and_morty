import React, {useEffect, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import PersonCard from '../../components/PersonCard/PersonCard';
import RenderFooter from '../../components/RenderFooter/RenderFooter';
import {HOME_HEADER_TEXT} from '../../utils/constants/strings/English';
import PersonType from '../../utils/types/PersonType';
import {fetchDataPerson} from './helpers';
import styles from './styles';
import IconSvg from '../../assets/svg/IconSvg';

const HomeScreen = () => {
  const [allPersons, setAllPersons] = useState<PersonType[]>([]);
  const page = useRef<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchDataPerson({
      setIsLoading,
      setAllPersons,
      page,
    });
  }, []);

  const handleEndReached = async () => {
    if (!isLoading) {
      await fetchDataPerson({
        setIsLoading,
        setAllPersons,
        page,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconSvg styles={styles.icon} />
        <Text style={styles.headerText}>{HOME_HEADER_TEXT}</Text>
      </View>
      <View style={styles.main}>
        <FlatList
          style={styles.flatList}
          data={allPersons}
          renderItem={({item}) => <PersonCard {...item} />}
          keyExtractor={item => item.id.toString()}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          ListFooterComponent={<RenderFooter isLoading={isLoading} />}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
