/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {  StyleSheet, View } from 'react-native';
import { CustomMap } from '../../components/maps/CustomMap';


export const MapScreen = () => {
  return(
    <View style={styles.container}>
        <CustomMap />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
 });
