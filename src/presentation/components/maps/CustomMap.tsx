/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import { Platform } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Location } from '../../../infrastructure/interfaces/location';
import { FAB } from '../ui/FAB';



interface Props {
    initialLocation: Location;
    showsUserLocation?: boolean;
}

export const CustomMap = ({ showsUserLocation = true, initialLocation}: Props) => {
    return(
        <>
            <MapView
                showsUserLocation={showsUserLocation}
                provider={Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{ flex:1 }}
                region={{
                latitude: initialLocation.latitude,
                longitude: initialLocation.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
             }}
            >
                {/* <Marker 
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title='Test'
                    description='Test'
                    image={require('../../../assets/custom-marker.png')}
                /> */}
            </MapView>
            <FAB 
                iconName='compass-outline'
                onPress={()=> {}}
                style={{bottom: 20, right: 20}}
            />

    </>
    );
};