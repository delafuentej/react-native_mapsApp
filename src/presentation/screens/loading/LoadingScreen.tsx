/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { ActivityIndicator, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export const LoadingScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={30} color='black' />

    </View>
  );
};
