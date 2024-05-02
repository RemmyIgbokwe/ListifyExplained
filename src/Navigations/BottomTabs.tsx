import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import List from "../screens/List";
import Manage from "../screens/Manage";
import CustomBottomTab from "../components/BottomTabs/CustomBottomTab";
import BottomVisibilityContext, { BottomVisibilityProvider } from "../context/BottomSheetContext";
import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reduxStore";
import { Alert } from "react-native";
import { TaskList } from "../data/TaskData";
import { STORAGE_KEYS, persistStorage } from "../services/storage";

const Tab=createBottomTabNavigator()

export default function BottomTab(){
    const {isTabBarVisible}=useContext(BottomVisibilityContext)
    const {bottomOpen}=useSelector((state:RootState)=>state.bottomVisible)


      
return(

    <Tab.Navigator screenOptions={
    {
        tabBarStyle:{
            // backgroundColor:'red'
            
        },
        tabBarHideOnKeyboard:true
    }
    } 
    tabBar={props=><CustomBottomTab {...props} isBottomSheetVisible={bottomOpen}/>} 
    
    >
        <Tab.Group 
        screenOptions={{
            headerShown:false,
            tabBarStyle:{
                backgroundColor:'green',
            }
        }}
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Calendar" component={List}/>

            {/* <Tab.Screen name="Manage" component={Manage}   />
            <Tab.Screen name="Profile" component={Manage}/> */}


        </Tab.Group>
    </Tab.Navigator>
  
)
}