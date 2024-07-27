/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import { Platform } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Location } from '../../../infrastructure/interfaces/location';
import { useEffect, useRef, useState } from 'react';
import { useLocationStore } from '../../store/location/useLocationStore';
import { CustomFaButton} from '../ui/CustomFaButton';



interface Props {
    initialLocation: Location;
    showsUserLocation?: boolean;
}

export const CustomMap = ({ showsUserLocation = true, initialLocation}: Props) => {

    const mapRef = useRef<MapView>();
    // cameraLocation =>so as not to return to the initialLocation each time the fab button is pressed:
    const cameraLocation = useRef<Location>(initialLocation);

    const {getLocation, lastKnownLocation, watchLocation, clearWatchLocation} = useLocationStore();

    const [isFollowingUser, setIsFollowingUser ] = useState(true);


    const moveCameraToLocation = (location: Location) =>{
        if(!mapRef.current) return;
        mapRef.current.animateCamera({center: location});
    };
    const moveToCurrentLocation = async() => {
        if(!lastKnownLocation){
            moveCameraToLocation(initialLocation);
        }
        const location = await getLocation();
        if(!location) return;
        return moveCameraToLocation(location);
    };

    //useEffect => immediately after assembly of the component start to follow the user
    useEffect(()=>{
        watchLocation();

        return ()=> {
            clearWatchLocation();
        };
    },[]);

    // move the camera for each change in lastKnownLocation
    useEffect(()=>{
        if(lastKnownLocation && isFollowingUser){
            moveCameraToLocation(lastKnownLocation);
        }
    },[lastKnownLocation, isFollowingUser]);

    return(
        <>
            <MapView
                ref={(map) => mapRef.current = map!}
                showsUserLocation={showsUserLocation}
                //onTouchStart => no automatic camera movement when the user touches the screen
                onTouchStart={()=> setIsFollowingUser(false)}
                provider={Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{ flex:1 }}
                region={{
                latitude: cameraLocation.current.latitude,
                longitude: cameraLocation.current.longitude,
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
            
            <CustomFaButton
                iconName={isFollowingUser ? 'walk-outline' : 'accessibility-outline'}
                onPress={()=> setIsFollowingUser(!isFollowingUser)}
                style={{ bottom: 90, right: 20}}
            />
             <CustomFaButton
                iconName='compass-outline'
                onPress={moveToCurrentLocation}
                style={{ bottom: 20, right: 20}}
            />

    </>
    );
};