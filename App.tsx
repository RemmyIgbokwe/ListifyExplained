import {
  StatusBar,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './src/Navigations/BottomTabs';
import Onboarding from './src/screens/OnboardingScreen';
import StackNavigator from './src/Navigations/StackNavigator';
import ReduxProvider from './src/services/reduxProvider';

function App(){



  return (
   <SafeAreaProvider>

<StatusBar  barStyle={'dark-content'}/>
<ReduxProvider>
<NavigationContainer>
 {/* <BottomTab/> */}
 {/* <Onboarding/> */}
 <StackNavigator/>
</NavigationContainer>
</ReduxProvider>
   </SafeAreaProvider>

  );
}


export default App;
