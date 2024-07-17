/* eslint-disable prettier/prettier */
import { check, openSettings, PERMISSIONS, request, PermissionStatus as RNPermissionStatus } from 'react-native-permissions';
import type { PermissionStatus } from '../../infrastructure/interfaces/permissions';
import { Platform } from 'react-native';

/* eslint-disable prettier/prettier */
export const requestLocationPermission = async(): Promise<PermissionStatus> => {
    let status: RNPermissionStatus = 'unavailable';

    if(Platform.OS === 'ios'){
        //request => open pop-up to ask about location permission; msg : info.plist file
        status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if( Platform.OS === 'android'){
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
        throw new Error('Unsupported Platform');
    }

    if(status === 'blocked'){
        await openSettings();
        // return await checkLocationPermission 
    }

    const permissionMapper: Record<RNPermissionStatus, PermissionStatus> = {
        granted: 'granted',
        denied: 'denied',
        blocked: 'blocked',
        limited:'limited',
        unavailable:  'unavailable',
    };
     return permissionMapper[status] ?? 'unavailable';
};

export const checkLocationPermission = async() : Promise<PermissionStatus> => {
    let status: RNPermissionStatus = 'unavailable';

    if(Platform.OS === 'ios'){
        // check => to verify if the permission has been granted
        status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if( Platform.OS === 'android'){
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
        throw new Error('Unsupported Platform');
    }

    const permissionMapper: Record<RNPermissionStatus, PermissionStatus> = {
        granted: 'granted',
        denied: 'denied',
        blocked: 'blocked',
        limited:'limited',
        unavailable:  'unavailable',
    };
     return permissionMapper[status] ?? 'unavailable';
};