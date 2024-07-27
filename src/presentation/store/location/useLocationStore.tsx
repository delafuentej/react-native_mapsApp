/* eslint-disable prettier/prettier */
import { create } from 'zustand';
import { Location } from '../../../infrastructure/interfaces/location';
import { clearWatchLocation, getCurrentLocation, watchCurrentLocation } from '../../../actions/location/location';


interface LocationState {
    lastKnownLocation: Location | null;
    // userLocations => variable that collects by locations that the user has passed by:
    userLocationsHistory: Location[];
    watchId: number | null;
    getLocation: ()=> Promise<Location|null>;
    watchLocation: ()=> void;
    clearWatchLocation: ()=> void;
}

export const useLocationStore = create<LocationState>()((set, get) =>({
    lastKnownLocation: null,
    userLocationsHistory : [],
    watchId: null,

    getLocation: async() => {
        const location = await getCurrentLocation();
        set({lastKnownLocation: location});
        return location;
    },
   watchLocation: ()=> {
    //obtaining the last value of the state:
     const watchId = get().watchId;
    if( watchId !== null){
        get().clearWatchLocation();
    }
    const id = watchCurrentLocation((location)=>{
        set({
            lastKnownLocation: location,
            userLocationsHistory: [...get().userLocationsHistory, location],
        });
    });
    set({watchId: id});
    
   },
   clearWatchLocation: ()=> {
    const watchId = get().watchId;
    if( watchId !== null){
        clearWatchLocation(watchId);
   }
},

}));
