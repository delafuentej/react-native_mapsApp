/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {  Platform, StyleSheet, View } from 'react-native';
import { CustomMap } from '../../components/maps/CustomMap';
import { useLocationStore } from '../../store/location/useLocationStore';
import { LoadingScreen } from '../loading/LoadingScreen';
import { useEffect } from 'react';
import { getCurrentLocation } from '../../../actions/location/location';


export const MapScreen = () => {
   const {lastKnownLocation, getLocation} = useLocationStore();
    // getCurrentLocation().then((location)=>{
    //   console.log(`${Platform.OS}: latitude:${location.latitude}  longitude: ${location.longitude}`);
    // });
   useEffect(()=>{
     if(lastKnownLocation === null){
       getLocation();
     }
   }, [])

   if( lastKnownLocation === null){
     return(<LoadingScreen />);
  }
  return(
    <View style={styles.container}>
         <CustomMap
            initialLocation={lastKnownLocation}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
 });
