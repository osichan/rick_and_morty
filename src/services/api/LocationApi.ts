import axiosConfig from '../../utils/helpers/axiosConfig';
import defaultTryForAxios from '../../utils/helpers/defaultTryForAxios';
import LocationType from '../../utils/types/LocationType';
import ResponseInfoType from '../../utils/types/ResponseInfoType';

type responseToGetAllEpisodesType = {
  info: ResponseInfoType;
  results: LocationType[];
};

type requestToGetFilteredLocationsPropsTyep = {
  name?: string;
  type?: string;
  dimension?: string;
};

const requestToGetAllLocations = async (query?: string) => {
  const config = await axiosConfig({
    method: 'GET',
    url: 'https://rickandmortyapi.com/api/location',
    query: query,
  });
  const result = await defaultTryForAxios({config});
  if (result && typeof result !== 'boolean') {
    return result.data as responseToGetAllEpisodesType;
  }
  return result;
};

const requestToGetFilteredLocations = async ({
  name,
  type,
  dimension,
}: requestToGetFilteredLocationsPropsTyep) => {
  let query = '?';

  if (name) {
    query += `name=${name}&`;
  }
  if (type) {
    query += `type=${type}&`;
  }
  if (dimension) {
    query += `dimension=${dimension}&`;
  }

  if (query !== '?') {
    query = query.slice(0, -1);
  }

  const config = await axiosConfig({
    method: 'GET',
    url: 'https://rickandmortyapi.com/api/location',
    query,
  });

  const result = await defaultTryForAxios({config});

  if (result && typeof result !== 'boolean') {
    return result.data as responseToGetAllEpisodesType;
  }

  return result;
};

const requestToGetSingleLocation = async (id: number) => {
  const config = await axiosConfig({
    method: 'GET',
    url: `https://rickandmortyapi.com/api/location/${id}`,
  });
  const result = await defaultTryForAxios({config});
  if (result && typeof result !== 'boolean') {
    return result.data as LocationType;
  }
  return result;
};

const requestToGetSingleLocationByUrl = async (url: string) => {
  const config = await axiosConfig({
    method: 'GET',
    url,
  });
  const result = await defaultTryForAxios({config});
  if (result && typeof result !== 'boolean') {
    return result.data as LocationType;
  }
  return result;
};

export {
  requestToGetAllLocations,
  requestToGetFilteredLocations,
  requestToGetSingleLocation,
  requestToGetSingleLocationByUrl,
};
