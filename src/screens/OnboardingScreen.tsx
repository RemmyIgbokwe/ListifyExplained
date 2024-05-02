import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Screen";
import Animated, { FadeInLeft, SlideInLeft } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation,NavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { STORAGE_KEYS, persistStorage } from "../services/storage";

// Define the type of the navigation prop
type RootStackParamList = {
    HomeTab: undefined;
    // Add other screens if needed
  };
  
  type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeTab'>;
  
const Onboarding = () => {
    const navigation=useNavigation<HomeScreenNavigationProp>()
    const onboardingSteps = [
        {
            icon: require('../../Assets/first.png'),
            title: 'Manage your tasks',
            description:
                ' You can easily manage all of your daily tasks in RemList for free.',
        },
        {
            icon:require('../../Assets/second.png'),
            title: 'Create daily routine',
            description:
                ' In RemList  you can create your personalized routine to stay productive. ',
        },
        {
            icon: require('../../Assets/third.png'),
            title: 'Organaize your tasks',
            description:
                ' You can organize your daily tasks by adding your tasks into separate categories',
        },
    ];

    const [step, setStep] = useState(0);
    const data = onboardingSteps[step];

    const onContinue = () => {
        const isLastScreen = step === onboardingSteps.length - 1;
        if (isLastScreen) {
            endOnboarding();
        } else {
            setStep(step + 1);
        }
    };

    const onReverse = () => {
        const isFirstScreen = step === 0;
        if (isFirstScreen) {
            endOnboarding();
        } else {
            setStep(step - 1);
        }
    };

    const endOnboarding = async () => {


    await    persistStorage.set(STORAGE_KEYS.ONBOARDED_USER,true)
navigation.navigate("HomeTab")
        // router.back()
    };
    return (
        <View style={style.container}>

            <Text style={style.skipText}></Text>
            <View style={{ alignItems: 'center', marginTop: '5%' }}>
                <Image source={data.icon} />

                <View style={style.stepContainer}>
                    {onboardingSteps.map((dat, index) => (
                        <View
                            key={index}
                            style={[
                                style.stepIndicator,
                                { backgroundColor: index === step ? '#fff' : 'grey' },
                            ]}
                        />
                    ))}
                </View>

                <View style={style.Headers}>

                    {/* <Text style={style.HeaderText}>Manage your tasks</Text> */}
                    <Animated.Text entering={SlideInLeft} style={style.HeaderText}>
                        {data.title}
                    </Animated.Text>
                    <View style={{ marginHorizontal: '10%', marginTop: '5%' }}>
                        {/* <Text style={style.subHeader}>You can easily manage all of your daily tasks in DoMe for free</Text> */}
                        <Animated.Text
                            entering={FadeInLeft.delay(300)}
                            style={style.subHeader}>
                            {data.description}
                        </Animated.Text>
                    </View>

                  

                </View>
            </View>

            <View style={style.buttons}>
                <Text onPress={endOnboarding} style={style.buttonText}>
                    Skip
                </Text>
                <Pressable style={style.button} onPress={onContinue}>
                    <Text style={style.buttonText}> Next</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Onboarding;

const style = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor: '#282828',
        paddingVertical: '5%',
        paddingHorizontal: '5%'
    },
    skipText: {
        color: '#FFFFFF',
        fontSize: 17
    },
    Headers: {
        marginTop: '10%',

        alignItems: 'center'
    },
    HeaderText: {
        fontSize: 32,
        color: "#FFFFFF",
        fontWeight: 'bold',

    },
    subHeader: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,

    },

    buttonText: {
        color: '#FDFDFD',
        fontFamily: 'InterSemi',
        fontSize: 16,
        padding: 15,
        paddingHorizontal: 25,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        position: 'absolute',
        bottom: '5%',
        left: '7%',
        right: '7%',
    },
    stepIndicator: {
        flex: 1,
        height: 3,
        backgroundColor: 'gray',

        borderRadius: 10,
    },
    stepContainer: {
        flexDirection: 'row',
        gap: 8,
        width: '30%',
        marginTop: '10%'
    },
    button: {
        backgroundColor: '#8875FF',
        borderRadius: 10,
        alignItems: 'center',
        flex: 1,
    },
})