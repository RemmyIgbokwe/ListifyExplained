import { View, StyleSheet, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SmallBread, SmallBriefcase, SmallEdu, SmallFlag, SmallGame, SmallGym, SmallMovie, SmallSocial } from '../../../svgs/Breadsvg'
import Icon from 'react-native-vector-icons/FontAwesome6'
import Tts from 'react-native-tts';

interface propTypes {
    category: string;
    title: string;
    description: string;
    isSelected: boolean;
    priority: string;
    time:string;
    onPress?: (data: any) => void

}
const getFormatted=(time:string)=>{
    const [hoursStr, minutesStr] = time.split(':');
const hours = parseInt(hoursStr);

// Determine if it's AM or PM based on the hour
const period = hours >= 12 ? 'PM' : 'AM';

// If hours are greater than 12, convert to 12-hour format
const displayHours = hours > 12 ? hours - 12 : hours;

// Combine hours, minutes, and period
const formattedTime = `${displayHours}:${minutesStr} ${period}`;
return formattedTime
}
export const TaskItem = ({ category, title, description, priority, onPress, isSelected,time }: propTypes) => {

    let categoryIcon = <SmallFlag />;
    let backgroundColor = "#363636"
    switch (category) {
        case "Work":
            categoryIcon = <SmallBriefcase />;
            backgroundColor = "#FF9680"
            break;
        case "Sport":
            categoryIcon = <SmallGym />;
            backgroundColor = "#80FFFF"
            break
        case "Social":
            categoryIcon = <SmallSocial />
            backgroundColor = "#FF80EB"
            break
        case "Design":
            categoryIcon = <SmallGame />
            backgroundColor = "#80FFD9"
            break
        case "Movie":
            categoryIcon = <SmallMovie />
            backgroundColor = '#80D1FF'
            break
        case "Grocery":
            categoryIcon = <SmallBread />
            backgroundColor = '#CCFF80'
            break
        case "University":
            categoryIcon = <SmallEdu />
            backgroundColor = '#809CFF'
            break
        default:
            break;
    }
    const [textToSay,setTextToSay]=useState("Hello Welcome to home")

    const handleListerinig=()=>{
        Tts?.speak(`The task title is ${title}, and the task description is ${description}`)
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight:'2%' }}>
                <View
                    style={styles.circle}
                >
                    <View
                        style={{
                            backgroundColor: isSelected ? "white" : 'transparent', width: 15,
                            aspectRatio: 1,
                            borderRadius: 30
                        }}
                    />
                </View>
                <View style={{ width: '90%' }}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.description}>
                        {description}
                    </Text>
                </View>
                <Pressable onPress={handleListerinig}>
                    <Icon
                        name="microphone-lines"
                        style={styles.buttonText}
                        size={20}
                    />
                </Pressable>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <View style={[styles.extras, { flexDirection: 'row', alignItems: 'center', backgroundColor: backgroundColor }]}>
                    <Text style={[styles.cartegory, { marginBottom: 2,color:'white' }]}>{getFormatted(time)}</Text>
                </View>
                <View style={[styles.extras, { flexDirection: 'row', alignItems: 'center', backgroundColor: backgroundColor }]}>

                    {categoryIcon}
                    <Text style={[styles.cartegory, { marginBottom: 2 }]}>{category}</Text>
                </View>

                <View style={[styles.extras, { flexDirection: 'row', alignItems: 'center' }]}>
                    <SmallFlag />
                    <Text style={styles.cartegory2}>{priority}</Text>
                </View>
            </View>
        </View>
    )
}

export const CompletedItem = ({ category, title, description, priority, isSelected,time }: propTypes) => {


    let categoryIcon = <SmallFlag />;
    let backgroundColor = "#363636"
    switch (category) {
        case "Work":
            categoryIcon = <SmallBriefcase />;
            backgroundColor = "#FF9680"
            break;
        case "Sport":
            categoryIcon = <SmallGym />;
            backgroundColor = "#80FFFF"
            break
        case "Social":
            categoryIcon = <SmallSocial />
            backgroundColor = "#FF80EB"
            break
        case "Design":
            categoryIcon = <SmallGame />
            backgroundColor = "#80FFD9"
            break
        case "Movie":
            categoryIcon = <SmallMovie />
            backgroundColor = '#80D1FF'
            break
        case "Grocery":
            categoryIcon = <SmallBread />
            backgroundColor = '#CCFF80'
            break
        case "University":
            categoryIcon = <SmallEdu />
            backgroundColor = '#809CFF'
            break
        default:
            break;
    }
    const handleListerinig=()=>{
        Tts?.speak(`The task title is ${title}, and the task description is ${description}`)
    }
    return (
        <View style={styles.container}>
               <View style={{ flexDirection: 'row', alignItems: 'center', marginRight:'2%' }}>
                <View
                    style={styles.circle}
                >
                    <View
                        style={{
                            backgroundColor: isSelected ? "white" : 'transparent', width: 15,
                            aspectRatio: 1,
                            borderRadius: 30
                        }}
                    />
                </View>
                <View style={{ width: '90%' }}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.description}>
                        {description}
                    </Text>
                </View>
                <Pressable onPress={handleListerinig}>
                    <Icon
                        name="microphone-lines"
                        style={styles.buttonText}
                        size={20}
                    />
                </Pressable>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <View style={[styles.extras, { flexDirection: 'row', alignItems: 'center', backgroundColor: backgroundColor }]}>
                    <Text style={[styles.cartegory, { marginBottom: 2,color:'white' }]}>{getFormatted(time)}</Text>
                </View>
                <View style={[styles.extras, { flexDirection: 'row', alignItems: 'center', backgroundColor: backgroundColor }]}>

                    {categoryIcon}
                    <Text style={[styles.cartegory, { marginBottom: 2 }]}>{category}</Text>
                </View>

                {/* <View style={[styles.extras, { flexDirection: 'row', alignItems: 'center' }]}>
                    <SmallFlag />
                    <Text style={styles.cartegory2}>{priority}</Text>
                </View> */}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#363636',
        borderRadius: 8,
        padding: '2%',
        marginVertical: '5%'
    },
    circle: {
        borderWidth: 1,
        borderColor: 'white',
        width: 20,
        aspectRatio: 1,
        borderRadius: 20,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '2%'
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    },
    description: {
        fontSize: 14,
        color: 'white',
        fontWeight: '300',

    },
    extras: {
        borderColor: "#8687E7",
        borderRadius: 4,
        borderWidth: 1,
        alignSelf: 'flex-start',
        paddingHorizontal: '2%',
        paddingVertical: '1%',
        marginLeft: '5%'
    },
    cartegory: {
        color: 'black',
        fontSize: 14
    },
    cartegory2: {
        color: 'white',
        fontSize: 14

    },
    buttonText: {
        color: '#FDFDFD',
        fontFamily: 'InterSemi',

        // fontSize: 16,
        // marginRight: 15,
        // paddingHorizontal: '20%',
    },
})