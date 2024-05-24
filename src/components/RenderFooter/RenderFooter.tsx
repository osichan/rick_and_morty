import React from 'react';
import {ActivityIndicator} from 'react-native';
import {LightGrey} from '../../utils/styles/colors';
import styles from './styles';

const RenderFooter = ({isLoading}: {isLoading: boolean}) => {
  if (!isLoading) {
    return null;
  }
  return (
    <ActivityIndicator size="large" color={LightGrey} style={styles.footer} />
  );
};

export default RenderFooter;
