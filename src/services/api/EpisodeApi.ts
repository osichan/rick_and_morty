import axiosConfig from '../../utils/helpers/axiosConfig';
import defaultTryForAxios from '../../utils/helpers/defaultTryForAxios';
import {EpisodeTypeOrigin} from '../../utils/types/EpisodeType';
import ResponseInfoType from '../../utils/types/ResponseInfoType';

type responseToGetAllEpisodesType = {
  info: ResponseInfoType;
  results: EpisodeTypeOrigin[];
};

type requestToGetFilteredEpisodsPropsTyep = {
  name?: string;
  episode?: string;
};

const requestToGetAllEpisodes = async (query?: string) => {
  const config = await axiosConfig({
    method: 'GET',
    url: 'https://rickandmortyapi.com/api/episode',
    query: query,
  });
  const result = await defaultTryForAxios({config});
  if (result && typeof result !== 'boolean') {
    const data = result.data as responseToGetAllEpisodesType;
    return data.results.map(episode => {
      return {...episode, airDate: episode.air_date};
    });
  }
  return result;
};

const requestToGetFilteredEpisodes = async ({
  name,
  episode,
}: requestToGetFilteredEpisodsPropsTyep) => {
  let query = '?';

  if (name) {
    query += `name=${name}&`;
  }
  if (episode) {
    query += `episode=${episode}&`;
  }

  if (query !== '?') {
    query = query.slice(0, -1);
  }

  const config = await axiosConfig({
    method: 'GET',
    url: 'https://rickandmortyapi.com/api/episode',
    query,
  });

  const result = await defaultTryForAxios({config});

  if (result && typeof result !== 'boolean') {
    const data = result.data as responseToGetAllEpisodesType;
    // eslint-disable-next-line @typescript-eslint/no-shadow
    return data.results.map(episode => {
      return {...episode, airDate: episode.air_date};
    });
  }

  return result;
};

const requestToGetSingleEpisode = async (id: number) => {
  const config = await axiosConfig({
    method: 'GET',
    url: `https://rickandmortyapi.com/api/episode/${id}`,
  });
  const result = await defaultTryForAxios({config});
  if (result && typeof result !== 'boolean') {
    const data = result.data as EpisodeTypeOrigin;
    return {...data, airDate: data.air_date};
  }
  return result;
};

const requestToGetSingleEpisodeByUrl = async (url: string) => {
  const config = await axiosConfig({
    method: 'GET',
    url,
  });
  const result = await defaultTryForAxios({config});
  if (result && typeof result !== 'boolean') {
    const data = result.data as EpisodeTypeOrigin;
    return {...data, airDate: data.air_date};
  }
  return result;
};

export {
  requestToGetAllEpisodes,
  requestToGetFilteredEpisodes,
  requestToGetSingleEpisode,
  requestToGetSingleEpisodeByUrl,
};
