import React, { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import CalendarStrip from 'react-native-calendar-strip';
import { TaskList } from "../data/TaskData";
import { CompletedItem, TaskItem } from "../components/BottomTabs/Tasks/TaskItem";
import Icon from 'react-native-vector-icons/FontAwesome6'
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { RootState } from "../store/reduxStore";
import { MyTask } from "../store/taskSlice";

interface Task {
    category: string;
    date: string;
    description: string;
    id: number;
    priority: string;
    stage: string;
    title: string;
}
type RootStackParamList = {
    DetailedTask: { task: MyTask };
    // Add other screens if needed
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DetailedTask'>;
const List = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>()
    const todayDate=new Date().toISOString().slice(0, 10);
    const [selectedDate, setSelectedDate] = useState(todayDate)
    const [selectedMenu, setSelectedMenu] = useState('To Do')
    const today = new Date().toISOString().slice(0, 10);
    const { reduxTaskDetails } = useSelector((state: RootState) => state.taskReducer)

    const todayTasks = reduxTaskDetails.filter(task => task.date === selectedDate && task.stage !== 'COMPLETED');
    console.log(todayTasks, "tsd Date",)
    function formatDate(selectedDate: string | number | Date) {
        const date = new Date(selectedDate);
        const options = { year: 'numeric', month: 'long', day: 'numeric' } as Intl.DateTimeFormatOptions;
        const formattedDate = date.toLocaleDateString('en-US', options);
        return formattedDate;
    }
    const todayCompletedTasks = reduxTaskDetails.filter(task => task.date === selectedDate && task.stage === 'COMPLETED');
    const [selectedTast, setSelectedTask] = useState<MyTask | undefined>()
    const handleOnSelect = (data: any) => {
        console.log(data)
        setSelectedTask(data)
    }
    return (
        <View style={style.container}>

            <CalendarStrip
                scrollable
                style={{ height: 100, paddingTop: 20, paddingBottom: 10, borderRadius: 4 }}
                calendarColor={'#363636'}
                calendarHeaderStyle={{ color: 'white' }}
                dateNumberStyle={{ color: 'white' }}
                dateNameStyle={{ color: 'white' }}
                iconContainer={{ flex: 0.1, }}
                calendarAnimation={{ type: 'sequence', duration: 30 }}
                daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: '#8687E7', }}
                dayContainerStyle={{ backgroundColor: '#272727', borderRadius: 5, }}
                highlightDateNumberStyle={{ color: '#8687E7' }}
                highlightDateNameStyle={{ color: '#8687E7' }}
                onDateSelected={(date) => {
                    setSelectedDate(date.format().split('T')[0])
                }}
                selectedDate={new Date()}
            />

            <View style={style.header}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }} >
                    <Pressable onPress={() => setSelectedMenu('To Do')} style={[style.button, { backgroundColor: selectedMenu === "To Do" ? '#8875FF' : 'transparent', borderColor: selectedMenu === "To Do" ? "transparent" : 'white', borderWidth: 1 }]}>
                        <Text style={style.buttonText}> To Do</Text>
                    </Pressable>
                    <Pressable onPress={() => setSelectedMenu('Completed')} style={[style.button, { backgroundColor: selectedMenu === "Completed" ? '#8875FF' : 'transparent', borderColor: selectedMenu === "Completed" ? "transparent" : 'white', borderWidth: 1 }]}>
                        <Text style={style.buttonText}> Completed</Text>
                    </Pressable>

                </View>
            </View>

            <ScrollView style={{ marginBottom: '25%' }}>
                {selectedMenu === "To Do" &&
                    <>
                        {todayTasks.length <= 0 ?

                            <View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
                                    <Image source={require('../../Assets/EmptyHome.png')} />
                                    <View>
                                        <Text style={style.text1}>
                                            You have no tasks on {formatDate(selectedDate)}
                                        </Text>
                                    </View>
                                </View>

                            </View>
                            :
                            <>

                                {todayTasks.map(task => (

                                    <Pressable key={task.id} onPress={() => { selectedTast?.id === task.id ? setSelectedTask(undefined) : handleOnSelect(task) }}>

                                        <TaskItem
                                            key={task.id}
                                            category={task.category}
                                            title={task.title}
                                            description={task.description}
time={task.time}
                                            isSelected={selectedTast ? selectedTast?.id === task.id : false}
                                            priority={task.priority}

                                        />
                                    </Pressable>

                                ))}

                            </>
                        }
                    </>
                }
                {selectedTast && selectedTast.stage !== "COMPLETED" &&
                    <Pressable style={[style.headButton, { paddingHorizontal: '8%' }]} onPress={() => navigation.navigate("DetailedTask", { task: selectedTast })}>
                        <Text style={[style.headText, { marginRight: 0 }]}>
                            Edit
                        </Text>

                    </Pressable>
                }


                {selectedMenu === "Completed" &&

                    <>
                        {todayCompletedTasks.length <= 0 ?

                            <View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
                                    <Image source={require('../../Assets/EmptyHome.png')} />
                                    <View>
                                        <Text style={style.text1}>
                                            You have no completed tasks on {formatDate(selectedDate)}
                                        </Text>
                                    </View>
                                </View>

                            </View>
                            :
                            <>
                                {todayCompletedTasks.map(task => (

                                    <Pressable key={task.id} onPress={() => { selectedTast?.id === task.id ? setSelectedTask(undefined) : handleOnSelect(task) }}>
                                        <CompletedItem
                                            key={task.id}
                                            category={task.category}
                                            title={task.title}
                                            description={task.description}
time={task.time}
                                            isSelected={selectedTast ? selectedTast?.id === task.id : false}
                                            priority={task.priority}
                                        />
                                    </Pressable>
                                ))}
                            </>
                        }
                    </>
                }
            </ScrollView>
        </View>
    )
}

export default List;

const style = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor: 'black',
        // backgroundColor: '#282828',
        paddingVertical: '5%',
        paddingHorizontal: '5%'
    },
    header: {
        backgroundColor: '#979797',
        marginVertical: '5%',
        borderRadius: 4,
        paddingVertical: '3%'
    },
    button: {

        width: '40%',
        alignItems: 'center',
        paddingVertical: '3%',
        borderRadius: 8
    },
    buttonText: {
        color: "white",
        fontSize: 16
    },
    text1: {
        color: 'white',
        fontSize: 16,
        marginBottom: 30
    },
    buttonTextS: {
        color: '#FDFDFD',
        fontFamily: 'InterSemi',
        // fontSize: 16,
        padding: 15,
        paddingHorizontal: '20%',
    },
    buttonS: {
        backgroundColor: '#8875FF',
        borderRadius: 10,
        alignItems: 'center',
        // marginTop:'20%'
        // flex: 1,
    },
    headButton: {
        backgroundColor: "transparent",
        marginTop: '5%',
        paddingHorizontal: '2%',
        paddingVertical: '3%',
        alignSelf: 'flex-end',
        borderRadius: 8,
        // flexDirection:'row',
        // alignItems:'flex-end',
        borderColor: '#8687E7',
        borderWidth: 1

    },
    headText: {
        color: 'white',
        fontSize: 16,
        marginRight: '2%'
    }
})