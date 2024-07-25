/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import { Platform } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


export const CustomMap = () => {
    return(
        <>
            <MapView
                provider={Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{ flex:1 }}
                region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
             }}
            >
                <Marker 
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title='Test'
                    description='Test'
                    image={require('../../../assets/custom-marker.png')}
                />
            </MapView>
    </>
    );
};