/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigation/StackNavigator';

const App = () => {
  return(
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default App;