/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigation/StackNavigator';
import { PremissionsChecker } from './presentation/providers/PermissionsChecker';

export const App = () => {
  return(
    <NavigationContainer>
      <PremissionsChecker>
        <StackNavigator />
      </PremissionsChecker>
    </NavigationContainer>
  );
};
