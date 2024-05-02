import React, { Fragment, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Image, Keyboard, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import DrawerSvg from "../svgs/svgs";
import ProfileSvg from "../svgs/Profile";
import Icon from 'react-native-vector-icons/FontAwesome6'
import BottomSheet, { BottomSheetView, SCREEN_HEIGHT } from '@gorhom/bottom-sheet';
import { ScrollView, TextInput, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Calendar as RNCalendar } from 'react-native-calendars'

import { BottomSheetModalContext } from "@gorhom/bottom-sheet/lib/typescript/contexts";
import { changeBottomVisibility, setBottomVisibility } from "../store/bottomSheetSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/reduxStore";
import Timer from "../svgs/Timersvg";
import LabelSvg from "../svgs/Label";
import FlagSvg from "../svgs/Flag";
import Sender from "../svgs/Send";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { format, parseISO } from "date-fns";
import { Bread, Briefcase, Design, DropDown, Health, MegaPhone, Movie, Uni, Weight } from "../svgs/Breadsvg";
import { CompletedItem, TaskItem } from "../components/BottomTabs/Tasks/TaskItem";
import { StackNavigationProp } from "@react-navigation/stack";
import { TaskList } from "../data/TaskData";
import { MyTask, addNewTask, completeTaskFunction } from "../store/taskSlice";
import { STORAGE_KEYS, persistStorage } from "../services/storage";
import { MessageCompleted, MessageSuccess } from "./MessageScreen";
import Voice from '@react-native-voice/voice';
import CalendarSVG from "../svgs/Calendarsvd";
import DatePicker from "react-native-date-picker";
interface Props {
    onDateSelected: (val: any) => void
}



interface Task {
    category: string;
    date: string;
    description: string;
    id: number;
    priority: string;
    stage: string;
    title: string;
}

// Define the type of the navigation prop
type RootStackParamList = {
    DetailedTask: { task: MyTask };
    // Add other screens if needed
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DetailedTask'>;
const Home = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>()

    const { reduxTaskDetails } = useSelector((state: RootState) => state.taskReducer)

    const noRes = false
    const [isFocused, setIsFocused] = useState(false); // State to track focus
    const [isFocused2, setIsFocused2] = useState(false);
    const handleBlur = () => setIsFocused(false);
    const handleFocus = () => setIsFocused(true);
    const handleBlur2 = () => setIsFocused2(false);
    const handleFocus2 = () => setIsFocused2(true);
    const [isOpened, setIsOpened] = useState(false)
    const [openPriority, setOpenPriority] = useState(false)
    const [showBottom, setShowBottom] = useState(false)
    const [toDate, setToDate] = React.useState('')
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [selectedPriority, setSelectedPriority] = useState("")
    const [selectedCategories, setSelectedCategories] = useState("")

    const [openCategories, setOpenCategories] = useState(false)
    const [isMic, setIsMic] = useState(false)
    const snapPoints = ["40%"]
    const handleOpenPress = (isMic?: boolean) => {
        if (isMic) { setIsMic(isMic) } else {
            setIsMic(false)
        }
        setShowBottom(true)
        bottomSheetRef.current?.expand();
        changeBottomVisibility(true)
    };
    const { bottomOpen } = useSelector((state: RootState) => state.bottomVisible)

    const handleClosePress = () => {
        changeBottomVisibility(false)

        bottomSheetRef.current?.close()
        setIsOpened(false)

        // Use ?. for safe optional chaining
    };
    const onToDateNexted = (date: any) => {
        setIsOpened(false)
    }
    const Calendar = ({ onDateSelected }: Props) => {


        return (
            <Fragment>


                <RNCalendar
                    onDayPress={(day) => {
                        onDateSelected?.(day)

                    }}

                    style={{
                        borderTopWidth: 0.5,
                        borderLeftWidth: 0.5,
                        borderRightWidth: 0.5,
                        borderColor: 'gray',
                        backgroundColor: '#363636',
                        borderRadius: 13,
                        borderBottomEndRadius: 0,
                        borderBottomStartRadius: 0,
                        paddingHorizontal: 16,
                    }}
                    markedDates={{
                        [toDate]: { selected: true, disableTouchEvent: true, }
                    }}
                    enableSwipeMonths={true}
                    theme={{
                        calendarBackground: 'transparent',
                        textSectionTitleColor: 'gray',
                        todayTextColor: 'white',
                        dayTextColor: 'white',
                        textDayFontWeight: '500',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: 'bold',
                        monthTextColor: 'white',
                        arrowColor: 'white',
                        todayBackgroundColor: 'grey',
                        selectedDayTextColor: 'white',
                        selectedDayBackgroundColor: '#8687E7',
                    }}

                />
                <View style={style.buttons}>
                    <Text onPress={() => { setToDate(''); setIsOpened(false) }} style={style.buttonText}>
                        Skip
                    </Text>
                    <Pressable style={style.button} onPress={onToDateNexted}>
                        <Text style={style.buttonText}> Next</Text>
                    </Pressable>
                </View>
            </Fragment>
        )
    }

    const [taskDetails, setTaskDetails] = useState({
        id: "",
        title: '',
        description: '',
        date: '',
        priority: '',
        stage: '',
        category: '',
        time: ''
    })

    useEffect(() => {
        setTaskDetails({
            ...taskDetails,
            id: taskDetails.title + taskDetails.date + taskDetails.priority + taskDetails.description + taskDetails.category,
            stage: 'TO DO'
        })
    }, [taskDetails.title, taskDetails.date, taskDetails.priority, taskDetails.description, taskDetails.category])
    const formatDate = (dateString: string) => {
        // Parse the date string into a Date object
        const date = parseISO(dateString);

        // Format the date using date-fns
        const formattedDate = format(date, 'd MMM yyyy');

        return formattedDate;
    };

    const onToDateSelected = (date: any) => {
        setToDate(date.dateString);
        setTaskDetails({ ...taskDetails, date: date.dateString })
        // setToDate(formatDate(date?.dateString))
        // setIsOpened(false)
    }

    const Priority = [
        { id: 1, name: "1" },
        { id: 2, name: "2" },
        { id: 3, name: "3" },

    ];
    const Categories1 = [

        {
            id: 2,
            name: "Work",
            icon: <Briefcase />
        },
        {
            id: 3,
            name: "Sport",
            icon: <Weight />
        },
        {
            id: 6,
            name: "Social",
            icon: <MegaPhone />
        },
    ]

    const Categories2 = [
        {
            id: 4,
            name: "Design",
            icon: <Design />
        },
        {
            id: 7,
            name: "Movie",
            icon: <Movie />
        },


        {
            id: 1,
            name: "Grocery",
            icon: <Bread />
        },
    ]

    const Categories3 = [
        {
            id: 5,
            name: "University",
            icon: <Uni />
        },
    ]
    const Proritwo = [
        { id: 4, name: "4" },
        { id: 5, name: "5" }
    ]

    const today = new Date().toISOString().slice(0, 10);

    // const todayTasks = reduxTaskDetails?.filter(task => task?.date === today && task?.stage !== 'COMPLETED');
    const todayTasks = reduxTaskDetails
        ?.filter(task => task?.date === today && task?.stage !== 'COMPLETED')
        .sort((a, b) => Number(a.priority) - Number(b.priority));

    console.log(todayTasks, "TASKER")
    const todayCompletedTasks = reduxTaskDetails?.filter(task => task?.date === today && task?.stage === 'COMPLETED');
    const [selectedTast, setSelectedTask] = useState<MyTask | undefined>()
    const handleOnSelect = (data: any) => {

        setSelectedTask(data)
    }
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [showSuccessModal, setShowSucessModal] = useState(false)
    const [showCompletionModal, setShowCompletionModal] = useState(false)
    const [isListening, setIsListening] = useState(false);
    const [isListening2, setIsListening2] = useState(false);
    const [recognizedText, setRecognizedText] = useState('')

    const saveTask = async (data: MyTask) => {
        changeBottomVisibility(false)
        setShowBottom(false)
        addNewTask(taskDetails)
        setShowSucessModal(true)
        setTaskDetails({
            ...taskDetails, id: "",
            title: '',
            description: '',
            date: '',
            priority: '',
            stage: '',
            category: ''
        })
        setSelectedCategories('')
        setSelectedPriority('')
        setToDate('')
    }
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowSucessModal(false)
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, [showSuccessModal]);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowCompletionModal(false)
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, [showCompletionModal]);

    useEffect(() => {
        console.log("SETTING TASK NOT SEBT", reduxTaskDetails)

        const setTasksInAsync = async () => {
            await persistStorage.setItem(STORAGE_KEYS.SAVED_TASKS, reduxTaskDetails)

        }

        if (reduxTaskDetails.length > 0) {
            setTasksInAsync()
        }
    }, [reduxTaskDetails])
    const handleComplete = () => {
        // @ts-ignore
        completeTaskFunction(selectedTast?.id)
        setShowCompletionModal(true)
        setSelectedTask(undefined)
    }

    useEffect(() => {
        Voice.onSpeechStart = onSpeechStart;
        Voice.onSpeechEnd = stopListening;
        Voice.onSpeechResults = onSpeechResults;
        Voice.onSpeechError = (error) => console.log("Error speech: ", error)
        return () => {
            Voice.destroy().then(Voice.removeAllListeners)
        }
    }, [])

    const startListening = async () => {
        setIsListening(true)
        try {
            await Voice.start('en-US');
        } catch (err) {
            console.log("ERROR FROM LISTENING", err)
        }
    }
    const startListening2 = async () => {
        setIsListening2(true)
        try {
            await Voice.start('en-US');
        } catch (err) {
            console.log("ERROR FROM LISTENING", err)
        }
    }
    const stopListening = async () => {
        try {
            Voice.removeAllListeners();
            await Voice.stop()
            setIsListening(false)
            setIsListening2(false)
        } catch (err) {
            console.log("Eror in stop listening", err)
        }
    }

    const onSpeechStart = (event: any) => {
        console.log('Recording Started...', event)
    }

    // const onSpeechEnd = (event: any) => {
    //     console.log('Recording Ended...', event)
    // }

    const onSpeechResults = (event: any) => {
        console.log("EVENT ON SPEECH RESULT", event)
        const text = event.value[0];
        setTaskDetails({ ...taskDetails, title: text })
        setRecognizedText(text)
    }

    const fixDate =(date:string)=>{
        const selectedDate = new Date(date);
        // Get the hours and minutes from the Date object
        const hours = selectedDate.getHours();
        const minutes = selectedDate.getMinutes();
        const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
        return formattedTime
    }

    return (

        <View style={style.container} >

            <Modal visible={isOpened} transparent style={{}}>
                <Pressable style={{ justifyContent: 'center', flex: 1, backgroundColor: 'rgba(255,255,255,0.3)', paddingHorizontal: '5%' }} onPress={() => setIsOpened(false)}>

                    <Calendar onDateSelected={onToDateSelected} />

                </Pressable>

            </Modal>
            <Modal visible={openPriority} transparent style={{}}>
                <Pressable style={{ justifyContent: 'center', flex: 1, backgroundColor: 'rgba(255,255,255,0.3)', paddingHorizontal: '5%' }} onPress={() => setOpenPriority(false)}>

                    <View style={{ backgroundColor: '#363636', height: '40%', paddingTop: '5%', borderRadius: 8 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={style.taskHeader}>Task Priority</Text>
                            <View style={{
                                backgroundColor: 'white',
                                width: '95%',
                                height: '3%',
                                marginVertical: '5%',
                                opacity: 0.2
                            }} />
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>


                                {Priority.map((value, index) =>
                                    <Pressable onPress={() => setSelectedPriority(value.name)} key={index} style={[style.priorityBox, { backgroundColor: selectedPriority === value.name ? '#8687E7' : '#272727' }]}>
                                        <FlagSvg />
                                        <Text style={[style.text1, { marginBottom: 0 }]}>{value.name}</Text>
                                    </Pressable>
                                )}
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5%' }}>


                                {Proritwo.map((value, index) =>
                                    <Pressable onPress={() => setSelectedPriority(value.name)} key={index} style={[style.priorityBox, { backgroundColor: selectedPriority === value.name ? '#8687E7' : '#272727' }]}>
                                        <FlagSvg />
                                        <Text style={[style.text1, { marginBottom: 0 }]}>{value.name}</Text>
                                    </Pressable>
                                )}
                            </View>
                        </View>


                        <View style={[style.buttons, { marginTop: '5%', marginBottom: '1%', paddingHorizontal: '7%' }]}>
                            <Text onPress={() => { setSelectedPriority(''); setOpenPriority(false) }} style={[style.buttonText, { paddingLeft: '5%' }]}>
                                Cancel
                            </Text>
                            <Pressable style={style.button} onPress={() => {
                                setTaskDetails({ ...taskDetails, priority: selectedPriority })
                                setOpenPriority(false)
                            }}>
                                <Text style={style.buttonText}> Save</Text>
                            </Pressable>
                        </View>

                    </View>

                </Pressable>

            </Modal>

            <DatePicker
                modal
                open={open}
                mode="time"
                date={date}
                onConfirm={(date: any) => {
                    const selectedDate = new Date(date);
                    // Get the hours and minutes from the Date object
                    const hours = selectedDate.getHours();
                    const minutes = selectedDate.getMinutes();
                    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

                    console.log(formattedTime, "selected")
                    
                    setTaskDetails({ ...taskDetails, time: formattedTime })
                    setDate(date)
                    setOpen(false)
                }}
                onCancel={() => {
                    setOpen(false)
                    setOpen(false)
                }}
            />
            <Modal visible={openCategories} transparent style={{}}>
                <Pressable style={{ justifyContent: 'center', flex: 1, backgroundColor: 'rgba(255,255,255,0.3)', paddingHorizontal: '5%' }} onPress={() => setOpenCategories(false)}>

                    <View style={{ backgroundColor: '#363636', paddingVertical: '5%', borderRadius: 8 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={style.taskHeader}>Choose Category</Text>
                            <View style={{
                                backgroundColor: 'white',
                                width: '95%',
                                height: '3%',
                                marginVertical: '5%',
                                opacity: 0.2
                            }} />
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>


                                {Categories1.map((value, index) =>
                                    <Pressable onPress={() => setSelectedCategories(value.name)} key={index} style={[style.priorityBox, { backgroundColor: selectedCategories === value.name ? '#8687E7' : '#272727' }]}>
                                        {value.icon}
                                        <Text style={[style.text1, { marginBottom: 0 }]}>{value.name}</Text>
                                    </Pressable>
                                )}
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5%' }}>


                                {Categories2.map((value, index) =>
                                    <Pressable onPress={() => setSelectedCategories(value.name)} key={index} style={[style.priorityBox, { backgroundColor: selectedCategories === value.name ? '#8687E7' : '#272727' }]}>
                                        {value.icon}
                                        <Text style={[style.text1, { marginBottom: 0 }]}>{value.name}</Text>
                                    </Pressable>
                                )}
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5%' }}>


                                {Categories3.map((value, index) =>
                                    <Pressable onPress={() => setSelectedCategories(value.name)} key={index} style={[style.priorityBox, { backgroundColor: selectedCategories === value.name ? '#8687E7' : '#272727' }]}>
                                        {value.icon}
                                        <Text style={[style.text1, { marginBottom: 0 }]}>{value.name}</Text>
                                    </Pressable>
                                )}
                            </View>
                        </View>


                        <View style={[style.buttons, { marginTop: '5%', marginBottom: '1%', paddingHorizontal: '7%' }]}>
                            <Text onPress={() => setOpenCategories(false)} style={[style.buttonText, { paddingLeft: '2%' }]}>
                                Cancel
                            </Text>
                            <Pressable style={style.button} onPress={() => {
                                setTaskDetails({ ...taskDetails, category: selectedCategories })
                                setOpenCategories(false)
                            }}>
                                <Text style={[style.buttonText]}> Save</Text>
                            </Pressable>
                        </View>

                    </View>

                </Pressable>

            </Modal>
            <Modal visible={showSuccessModal} transparent style={{}}>
                <MessageSuccess />
            </Modal>
            <Modal visible={showCompletionModal} transparent style={{}}>
                <MessageCompleted />
            </Modal>
            {/* <Modal visible={false} transparent style={{}}>
               <MessageFailed/>

            </Modal> */}


            <ScrollView contentContainerStyle={{ paddingBottom: '100%' }} showsVerticalScrollIndicator={false}>

                <Pressable onPress={handleClosePress} style={{ height: SCREEN_HEIGHT, opacity: 1, }} >

                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '5%' }}>
                            <DrawerSvg />
                            <Text style={{ color: 'white' }}>Welcome Home</Text>
                            <ProfileSvg />
                        </View>

                        {reduxTaskDetails.length <= 0 || !todayTasks.length || !todayCompletedTasks ?
                            <View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
                                    <Image source={require('../../Assets/EmptyHome.png')} />
                                    <View>
                                        <Text style={style.text1}>
                                            What do you want to do today?
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Pressable style={style.button} onPress={() => {
                                        setTaskDetails({
                                            ...taskDetails, id: "",
                                            title: '',
                                            description: '',
                                            date: '',
                                            priority: '',
                                            stage: '',
                                            category: ''
                                        })
                                        setSelectedCategories('')
                                        setSelectedPriority('')
                                        setToDate('')
                                        handleOpenPress(true)
                                    }
                                    }  >

                                        <Icon
                                            name={isListening ? "stop" : "microphone-lines"}
                                            style={style.buttonText}
                                            size={20}
                                        />
                                    </Pressable>

                                    <Pressable style={style.button} onPress={() => handleOpenPress()} >
                                        <Icon
                                            name="pen-to-square"
                                            style={style.buttonText}
                                            size={20}
                                        />
                                    </Pressable>
                                </View>
                            </View>
                            :
                            <View>
                                <View style={{}}>
                                    <View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                                            <View style={style.head}>
                                                <Text style={style.headText}>
                                                    Today
                                                </Text>
                                                <DropDown />
                                            </View>
                                            {selectedTast && selectedTast.stage !== "COMPLETED" &&
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                                    <Pressable style={[style.headButton, { paddingHorizontal: '8%', backgroundColor: 'green', borderWidth: 0 }]} onPress={handleComplete}>
                                                        <Text style={[style.headText, { marginRight: 0, }]}>
                                                            Complete Task
                                                        </Text>

                                                    </Pressable>
                                                    <Pressable style={[style.headButton, { paddingHorizontal: '8%' }]} onPress={() => navigation.navigate("DetailedTask", { task: selectedTast })}>
                                                        <Text style={[style.headText, { marginRight: 0 }]}>
                                                            Edit
                                                        </Text>

                                                    </Pressable>


                                                </View>
                                            }
                                        </View>
                                        {/* <TaskItem category={"Work"} title={"Create the apk for Basalt"} description={"Make APk build and send to Nikki"} isSelected={true} priority={"1"} /> */}
                                        {todayTasks.map(task => (

                                            <Pressable key={task.id} onPress={() => { selectedTast?.id === task.id ? setSelectedTask(undefined) : handleOnSelect(task) }}>

                                                <TaskItem
                                                    key={task.id}
                                                    category={task.category}
                                                    title={task.title}
                                                    description={task.description}

                                                    isSelected={selectedTast ? selectedTast?.id === task.id : false}
                                                    priority={task.priority} time={task.time}
                                                />
                                            </Pressable>

                                        ))}
                                    </View>
                                    <View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <View style={style.head}>
                                                <Text style={style.headText}>
                                                    Completed
                                                </Text>
                                                <DropDown />
                                            </View>

                                            {selectedTast && selectedTast.stage === "COMPLETED" &&
                                                <Pressable style={[style.headButton, { paddingHorizontal: '8%' }]} onPress={() => navigation.navigate("DetailedTask", { task: selectedTast })}>
                                                    <Text style={[style.headText, { marginRight: 0 }]}>
                                                        Edit
                                                    </Text>

                                                </Pressable>
                                            }
                                        </View>
                                        {/* <CompletedItem category={"Work"} title={"Create the apk for Basalt"} description={"Make APk build and send to Nikki"} isSelected={false} priority={"1"} /> */}
                                        {todayCompletedTasks.map(task => (

                                            <Pressable key={task.id} onPress={() => { selectedTast?.id === task.id ? setSelectedTask(undefined) : handleOnSelect(task) }}>
                                                <CompletedItem
                                                    key={task.id}
                                                    category={task.category}
                                                    title={task.title}
                                                    description={task.description}

                                                    isSelected={selectedTast ? selectedTast?.id === task.id : false}
                                                    priority={task.priority} time={task.time}                                                />
                                            </Pressable>
                                        ))}
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '10%' }}>
                                    <Pressable style={style.button} onPress={() =>
                                        handleOpenPress(true)
                                    }  >

                                        <Icon
                                            name={isListening ? "stop" : "microphone-lines"}
                                            style={style.buttonText}
                                            size={20}
                                        />
                                    </Pressable>

                                    <Pressable style={style.button} onPress={() => handleOpenPress()} >
                                        <Icon
                                            name="pen-to-square"
                                            style={style.buttonText}
                                            size={20}
                                        />
                                    </Pressable>
                                </View>
                            </View>
                        }


                    </View>
                </Pressable>
            </ScrollView>
            {showBottom &&
                <BottomSheet
                    ref={bottomSheetRef}
                    snapPoints={snapPoints}
                    onClose={() => { changeBottomVisibility(false) }}
                    enablePanDownToClose
                    backgroundStyle={{ backgroundColor: '#363636', }}
                    containerStyle={{ backgroundColor: 'transparent' }}

                >

                    <Pressable style={style.bottomSheevView} onPress={() => Keyboard.dismiss()}  >
                        <Text style={style.taskHeader}>Add Task</Text>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <BottomSheetView>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'space-between' }}>
                                    <TextInput
                                        placeholder="Task Title"
                                        onChangeText={(text) => setTaskDetails({ ...taskDetails, title: text })}
                                        value={taskDetails.title}
                                        style={[style.Tasktitle, { borderWidth: !isFocused ? 0 : 1, width: isMic ? '90%' : '100%' }]}
                                        onBlur={handleBlur}
                                        onFocus={handleFocus}
                                        placeholderTextColor={"#AFAFAF"}
                                    />
                                    {isMic &&
                                        <Icon
                                            name={isListening ? "stop" : "microphone-lines"}
                                            style={[style.buttonText, { paddingHorizontal: 0, marginTop: '4%' }]}
                                            size={20}
                                            onPress={() => {
                                                isListening ? stopListening() : startListening()
                                            }}
                                        />
                                    }
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'space-between' }}>
                                    <TextInput
                                        placeholder="Task Description"
                                        onChangeText={(text) => setTaskDetails({ ...taskDetails, description: text })}
                                        value={taskDetails.description}
                                        style={[style.Tasktitle, { borderWidth: !isFocused2 ? 0 : 1, width: isMic ? '90%' : '100%' }]}
                                        onBlur={handleBlur2}
                                        onFocus={handleFocus2}
                                        placeholderTextColor={'#AFAFAF'}
                                    />
                                    {isMic &&
                                        <Icon
                                            name={isListening2 ? "stop" : "microphone-lines"}
                                            style={[style.buttonText, { paddingHorizontal: 0, marginTop: '4%' }]}
                                            size={20}
                                            onPress={() => {
                                                isListening2 ? stopListening() : startListening2()
                                            }}
                                        />
                                    }
                                </View>
                                <View>
                                    {toDate && <Text style={{ color: 'white', marginLeft: '4%', marginBottom: '3%' }}>Selected Date: {toDate}</Text>}
                                    {date&&taskDetails.time && <Text style={{ color: 'white', marginLeft: '4%', marginBottom: '3%' }}>Selected Time: {fixDate(date.toString())}</Text>}

                                    <View style={{ marginLeft: '4%', marginBottom: '3%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                                        {selectedCategories && <Text style={{ color: 'white' }}>Category: {selectedCategories}</Text>}
                                        {selectedPriority && <Text style={{ color: 'white' }}>Priority: {selectedPriority}</Text>}
                                    </View>

                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'space-evenly' }}>
                                        <Timer onPress={() => {

                                            setOpen(true)

                                        }} />
                                        <CalendarSVG onPress={() => {

                                            setIsOpened(true)

                                        }} />
                                        <LabelSvg onPress={() => {
                                            setOpenCategories(true)
                                        }} />

                                        <FlagSvg onPress={() => {
                                            setOpenPriority(true)
                                        }} />
                                    </View>
                                    {taskDetails.description && taskDetails.title && toDate &&
                                        <Sender onPress={() => { saveTask(taskDetails) }} />
                                    }
                                </View>
                            </BottomSheetView>
                        </ScrollView>
                    </Pressable>

                </BottomSheet>
            }
        </View>

    )
}

export default Home;

const style = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor: 'black',
        // backgroundColor: '#282828',
        paddingBottom: '27%',
        paddingHorizontal: '5%'
    },
    text1: {
        color: 'white',
        fontSize: 16,
        marginBottom: 30
    },
    text2: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16
    },
    buttonText: {
        color: '#FDFDFD',
        fontFamily: 'InterSemi',
        // fontSize: 16,
        padding: 15,
        paddingHorizontal: '20%',
    },
    button: {
        backgroundColor: '#8875FF',
        borderRadius: 10,
        alignItems: 'center',
        // marginTop:'20%'
        // flex: 1,
    },
    bottomSheevView: {
        paddingHorizontal: '10%',
        paddingVertical: '5%'
    },
    taskHeader: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
    Tasktitle: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginTop: '5%',
        color: "white",
        // margin
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop:'5%',
        backgroundColor: '#363636',
        borderRadius: 13,
        borderTopEndRadius: 0,
        borderTopStartRadius: 0,
        padding: '5%'
        // position: 'absolute',
        // bottom: '5%',
        // left: '7%',
        // right: '7%',
    },
    priorityBox: {
        borderWidth: 1,
        paddingVertical: '2%',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: '5%'
    },
    head: {
        backgroundColor: "#363636",
        marginTop: '5%',
        paddingHorizontal: '2%',
        paddingVertical: '3%',
        alignSelf: 'flex-start',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'

    },
    headButton: {
        backgroundColor: "transparent",
        marginTop: '5%',
        paddingHorizontal: '2%',
        paddingVertical: '3%',
        alignSelf: 'flex-start',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#8687E7',
        borderWidth: 1

    },
    headText: {
        color: 'white',
        fontSize: 12,
        marginRight: '2%'
    }
})