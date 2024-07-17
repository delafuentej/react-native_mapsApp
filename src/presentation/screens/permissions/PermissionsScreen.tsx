/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../../config/theme/globalStyles';
import { usePermissionStore } from '../../store/permissions/usePermissionStore';

// store consumption component:
export const PermissionsScreen = () => {
    const { locationStatus, requestLocationPermission} = usePermissionStore();
  return (
    <View style= {globalStyles.centerContainer}>
        <Text>Location </Text>
        <Pressable 
          style={globalStyles.btnPrimary}
          onPress={requestLocationPermission}
          >
          <Text style={globalStyles.textBtn}>Enable Location </Text>
        </Pressable>
        <Text>Current Status: {locationStatus} </Text>

    </View>
  );
};
