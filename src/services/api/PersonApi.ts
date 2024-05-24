import axiosConfig from '../../utils/helpers/axiosConfig';
import defaultTryForAxios from '../../utils/helpers/defaultTryForAxios';
import PersonType from '../../utils/types/PersonType';
import ResponseInfoType from '../../utils/types/ResponseInfoType';

type responseToGetAllPersonsType = {
  info: ResponseInfoType;
  results: PersonType[];
};

type requestToGetFilteredPersonsPropsTyep = {
  name?: string;
  status?: 'alive' | 'dead' | 'unknown';
  species?: string;
  type?: string;
  gender?: 'female' | 'male' | 'genderless' | 'unknown';
};

const requestToGetAllPersons = async (query?: string) => {
  const config = await axiosConfig({
    method: 'GET',
    url: 'https://rickandmortyapi.com/api/character',
    query: query,
  });
  const result = await defaultTryForAxios({config});
  if (result && typeof result !== 'boolean') {
    return result.data as responseToGetAllPersonsType;
  }
  return result;
};

const requestToGetFilteredPersons = async ({
  name,
  status,
  species,
  type,
  gender,
}: requestToGetFilteredPersonsPropsTyep) => {
  let query = '?';

  if (name) {
    query += `name=${name}&`;
  }
  if (status) {
    query += `status=${status}&`;
  }
  if (species) {
    query += `species=${species}&`;
  }
  if (type) {
    query += `type=${type}&`;
  }
  if (gender) {
    query += `gender=${gender}&`;
  }

  if (query !== '?') {
    query = query.slice(0, -1);
  }

  const config = await axiosConfig({
    method: 'GET',
    url: 'https://rickandmortyapi.com/api/character',
    query,
  });

  const result = await defaultTryForAxios({config});

  if (result && typeof result !== 'boolean') {
    return result.data as responseToGetAllPersonsType;
  }

  return result;
};

const requestToGetSinglePerson = async (id: number) => {
  const config = await axiosConfig({
    method: 'GET',
    url: `https://rickandmortyapi.com/api/character/${id}`,
  });
  const result = await defaultTryForAxios({config});
  if (result && typeof result !== 'boolean') {
    return result.data as PersonType;
  }
  return result;
};

const requestToGetSinglePersonByUrl = async (url: string) => {
  const config = await axiosConfig({
    method: 'GET',
    url,
  });
  const result = await defaultTryForAxios({config});
  if (result && typeof result !== 'boolean') {
    return result.data as PersonType;
  }
  return result;
};

export {
  requestToGetAllPersons,
  requestToGetFilteredPersons,
  requestToGetSinglePerson,
  requestToGetSinglePersonByUrl,
};
