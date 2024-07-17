/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { PropsWithChildren, useEffect } from "react"
import { AppState } from "react-native";
import { usePermissionStore } from "../store/permissions/usePermissionStore";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../navigation/StackNavigator";


export const PremissionsChecker = ({children}: PropsWithChildren) =>{

    const{locationStatus, checkLocationPermission } = usePermissionStore();
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    // triggering a series of processes

    useEffect(()=> {
        if (locationStatus=== 'granted'){
            navigation.navigate('MapScreen');
        }else if(locationStatus !== 'undetermined'){
            navigation.navigate('PermissionsScreen');
        }
    },[locationStatus]);

    
    useEffect(()=> {
        checkLocationPermission();
    },[]);

    useEffect(()=>{
        // subscription => to keep an eye on any changes in AppState
        const subscription = AppState.addEventListener('change', (nextAppState)=>{
            // console.log('AppState', AppState);
            // review the permissions
            if (nextAppState === 'active'){
                checkLocationPermission();
            }
        });
        return () =>{
            subscription.remove();
        }
    },[]);


    return(
        <>
            {children}
        </>
    );
}