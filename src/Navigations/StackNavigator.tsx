import {createStackNavigator} from '@react-navigation/stack';
import {NavigationProp} from '@react-navigation/native';
import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import Onboarding from '../screens/OnboardingScreen';
import BottomTab from './BottomTabs';
import DetailedTask from '../screens/DetailedTask';
import {  MessageSuccess } from '../screens/MessageScreen';
import { STORAGE_KEYS, persistStorage } from '../services/storage';
import { addNewTask, setTaskFunction } from '../store/taskSlice';


const Stack = createStackNavigator();

const StackNavigator =() => {
  const [onboardedUser,setOnBoardedUser]=useState(false)
  const getOnboarder=async ()=>{
    const onboardedUser=await persistStorage.getBoolean(STORAGE_KEYS.ONBOARDED_USER)
    const savedTasks=await persistStorage.getItem(STORAGE_KEYS.SAVED_TASKS)
    if(savedTasks){
      setTaskFunction(savedTasks)
    
      console.log(typeof savedTasks,"TASK SAVED IS ")
    }
    if (onboardedUser)setOnBoardedUser(true)
  }
  useEffect(()=>{
getOnboarder()
  },[])
console.log(onboardedUser)
return(
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
   
      }}
    >
{!onboardedUser?<>
  <Stack.Screen name="Onboarding" component={Onboarding} />
 <Stack.Screen name='HomeTab' component={BottomTab} />
 {/* @ts-ignore */}
 <Stack.Screen name='DetailedTask' component={DetailedTask}/>
 <Stack.Screen name='MessageSuccess' component={MessageSuccess}/>

</> :
<>
<Stack.Screen name='HomeTab' component={BottomTab} />
 {/* @ts-ignore */}
 <Stack.Screen name='DetailedTask' component={DetailedTask}/>
 <Stack.Screen name='MessageSuccess' component={MessageSuccess}/>
 
</>

}

    </Stack.Navigator>
)
}
export default StackNavigator;