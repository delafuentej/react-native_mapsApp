/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export const LoadingScreen = () => {
  return (
    <View>
        <Text>LoadingScreen </Text>
        <Icon name="refresh" size={30} color="#900" />

    </View>
  );
};
