import {Dispatch, MutableRefObject, SetStateAction} from 'react';
import {requestToGetAllPersons} from '../../services/api/PersonApi';
import PersonType from '../../utils/types/PersonType';

type fetchDataPersonPropsType = {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setAllPersons: Dispatch<SetStateAction<PersonType[]>>;
  page: MutableRefObject<number>;
};

export const fetchDataPerson = async ({
  setIsLoading,
  setAllPersons,
  page,
}: fetchDataPersonPropsType) => {
  setIsLoading(true);
  const result = await requestToGetAllPersons(`page=${page.current}`);
  if (result !== undefined) {
    setAllPersons(prevPersons => [...prevPersons, ...result.results]);
    page.current = page.current + 1;
  }
  setIsLoading(false);
};
