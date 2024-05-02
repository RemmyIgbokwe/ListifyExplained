import { Keyboard, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { RouteProp, useNavigation } from '@react-navigation/native';
import { Backbutton, Bread, Briefcase, DeleteIcon, Design, MegaPhone, Movie, SmallBread, SmallBriefcase, SmallEdu, SmallFlag, SmallGame, SmallGym, SmallMovie, SmallSocial, Uni, Weight } from '../svgs/Breadsvg';
import Timer from '../svgs/Timersvg';
import LabelSvg from '../svgs/Label';
import FlagSvg from '../svgs/Flag';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { toDate } from 'date-fns';
import Sender from '../svgs/Send';
import { Calendar as RNCalendar } from 'react-native-calendars'
import { MyTask, editTaskFunction } from '../store/taskSlice';
import { MessageUpdated } from './MessageScreen';


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

type DetailedTaskRouteProp = RouteProp<RootStackParamList, 'DetailedTask'>;
interface Props {
    route: DetailedTaskRouteProp;
  
}
interface newP{
    onDateSelected: (val: any) => void
}

const DetailedTask: React.FC<Props> = ({ route }) => {
    const navigation = useNavigation()
    const task = route.params.task
    const [taskDetails, setTaskDetails] = useState({
        title: task.title,
        description: task.description,
        date:task.date,
        priority:task.priority,
        stage:task.stage,
        category:task.category,
        id:task.id
    })
    let categoryIcon = <SmallFlag />;
    let backgroundColor = "#363636"
    const [showBottom, setShowBottom] = useState(false)
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = ["40%"]
    const [isFocused, setIsFocused] = useState(false); // State to track focus
    const [isFocused2, setIsFocused2] = useState(false);
    const handleBlur = () => setIsFocused(false);
    const handleFocus = () => setIsFocused(true);
    const handleBlur2 = () => setIsFocused2(false);
    const handleFocus2 = () => setIsFocused2(true);
    const [selectedPriority, setSelectedPriority] = useState("")
    const [selectedCategories, setSelectedCategories] = useState("")
    const [toDate, setToDate] = React.useState('')
    const [isOpened, setIsOpened] = useState(false)
    const [openPriority, setOpenPriority] = useState(false)
    const [openCategories, setOpenCategories] = useState(false)
  
    switch (taskDetails.category) {
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
    const[editTask,setEditTask]=useState(false)
    const onToDateSelected = (date: any) => {
        setTaskDetails({...taskDetails,date:date.dateString})
        setToDate(date.dateString);
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
    const onToDateNexted = (date: any) => {

        // setToDate(formatDate(date?.dateString))
        setIsOpened(false)
    }
    const Calendar = ({ onDateSelected }: newP) => {


        return (
            <Fragment>


                <RNCalendar
                    onDayPress={(day) => {
                        console.log('selected day', day)
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
                        [taskDetails.date]: { selected: true, disableTouchEvent: true, }
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
                <View style={styles.buttons}>
                    <Text onPress={() => { setToDate(''); setIsOpened(false) }} style={styles.buttonText}>
                        Skip
                    </Text>
                    <Pressable style={styles.buttonIn} onPress={onToDateNexted}>
                        <Text style={styles.buttonText}> Next</Text>
                    </Pressable>
                </View>
            </Fragment>
        )
    }
    useEffect(()=>{
if(!!editTask){
    setShowBottom(true)
}else{
    setShowBottom(false)
}
    },[editTask])

    const [openEditedModal,setOpemEditedModal]=useState(false)

    const doEditTask = async () => {
      
        setEditTask(false)

        editTaskFunction(task.id,taskDetails)
        setOpemEditedModal(true)
        navigation.goBack()
    }
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setOpemEditedModal(false)
        }, 3000); 
        return () => clearTimeout(timeoutId);
      }, [openEditedModal]);
    console.log(task)
    return (
        <View style={styles.container}>

<Modal visible={isOpened} transparent style={{}}>
                <Pressable style={{ justifyContent: 'center', flex: 1, backgroundColor: 'rgba(255,255,255,0.3)', paddingHorizontal: '5%' }} onPress={() => setIsOpened(false)}>

                    <Calendar onDateSelected={onToDateSelected} />

                </Pressable>

            </Modal>
            <Modal visible={openPriority} transparent style={{}}>
                <Pressable style={{ justifyContent: 'center', flex: 1, backgroundColor: 'rgba(255,255,255,0.3)', paddingHorizontal: '5%' }} onPress={() => setOpenPriority(false)}>

                    <View style={{ backgroundColor: '#363636', height: '40%', paddingTop: '5%', borderRadius: 8 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.taskHeader}>Task Priority</Text>
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
                                    <Pressable onPress={() =>    setTaskDetails({...taskDetails,priority:value.name})} key={index} style={[styles.priorityBox, { backgroundColor: taskDetails.priority === value.name ? '#8687E7' : '#272727' }]}>
                                        <FlagSvg />
                                        <Text style={[styles.text1, { marginBottom: 0 }]}>{value.name}</Text>
                                    </Pressable>
                                )}
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5%' }}>


                                {Proritwo.map((value, index) =>
                                    <Pressable onPress={() => setTaskDetails({...taskDetails,priority:value.name})} key={index} style={[styles.priorityBox, { backgroundColor: taskDetails.priority === value.name ? '#8687E7' : '#272727' }]}>
                                        <FlagSvg />
                                        <Text style={[styles.text1, { marginBottom: 0 }]}>{value.name}</Text>
                                    </Pressable>
                                )}
                            </View>
                        </View>


                        <View style={[styles.buttons, { marginTop: '5%', marginBottom: '1%', paddingHorizontal: '7%' }]}>
                            <Text onPress={() => {  setOpenPriority(false) }} style={[styles.buttonText, { paddingLeft: '5%' }]}>
                                Cancel
                            </Text>
                            <Pressable style={styles.buttonIn} onPress={() => setOpenPriority(false)}>
                                <Text style={styles.buttonText}> Save</Text>
                            </Pressable>
                        </View>

                    </View>

                </Pressable>

            </Modal>
            <Modal visible={openCategories} transparent style={{}}>
                <Pressable style={{ justifyContent: 'center', flex: 1, backgroundColor: 'rgba(255,255,255,0.3)', paddingHorizontal: '5%' }} onPress={() => setOpenCategories(false)}>

                    <View style={{ backgroundColor: '#363636', paddingVertical: '5%', borderRadius: 8 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.taskHeader}>Choose Category</Text>
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
                                    <Pressable onPress={() =>{
                                        setTaskDetails({...taskDetails,category:value.name})
                                       
                                        }} key={index} style={[styles.priorityBox, { backgroundColor: taskDetails.category === value.name ? '#8687E7' : '#272727' }]}>
                                        {value.icon}
                                        <Text style={[styles.text1, { marginBottom: 0 }]}>{value.name}</Text>
                                    </Pressable>
                                )}
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5%' }}>


                                {Categories2.map((value, index) =>
                                    <Pressable onPress={() =>    setTaskDetails({...taskDetails,category:value.name})} key={index} style={[styles.priorityBox, { backgroundColor: taskDetails.category === value.name ? '#8687E7' : '#272727' }]}>
                                        {value.icon}
                                        <Text style={[styles.text1, { marginBottom: 0 }]}>{value.name}</Text>
                                    </Pressable>
                                )}
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5%' }}>


                                {Categories3.map((value, index) =>
                                    <Pressable onPress={() =>    setTaskDetails({...taskDetails,category:value.name})} key={index} style={[styles.priorityBox, { backgroundColor: taskDetails.category === value.name ? '#8687E7' : '#272727' }]}>
                                        {value.icon}
                                        <Text style={[styles.text1, { marginBottom: 0 }]}>{value.name}</Text>
                                    </Pressable>
                                )}
                            </View>
                        </View>


                        <View style={[styles.buttons, { marginTop: '5%', marginBottom: '1%', paddingHorizontal: '7%' }]}>
                            <Text onPress={() => setOpenCategories(false)} style={[styles.buttonText, { paddingLeft: '2%' }]}>
                                Cancel
                            </Text>
                            <Pressable style={styles.buttonIn} onPress={() => setOpenCategories(false)}>
                                <Text style={[styles.buttonText]}> Save</Text>
                            </Pressable>
                        </View>

                    </View>

                </Pressable>

            </Modal>
            <Modal visible={openEditedModal} transparent style={{}}>
               <MessageUpdated/>
            </Modal>
        <ScrollView showsVerticalScrollIndicator={false}>
            
            <View>
            <Backbutton onPress={() => navigation.goBack()} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '5%' }}>
                <View
                    style={styles.circle}
                >
                    <View
                        style={{
                            backgroundColor: 'transparent', width: 15,
                            aspectRatio: 1,
                            borderRadius: 30
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.title}>{taskDetails.title}</Text>
                    <Text style={styles.description}>{taskDetails.description}</Text>

                </View>
            </View>

            <View style={styles.icons}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Timer />
                    <Text style={[styles.title, { fontWeight: '400', fontSize: 14, marginLeft: '1%' }]}>Task Time</Text>
                </View>
                <View style={{ backgroundColor: "#363636", paddingHorizontal: '2%', paddingVertical: '3%', borderRadius: 8 }}>
                    <Text style={[styles.title, { fontWeight: '400', fontSize: 14, }]}>{taskDetails.date}</Text>
                </View>
            </View>

            <View style={styles.icons}>
                <View style={{ flexDirection: 'row',  }}>
                    <LabelSvg />
                    <Text style={[styles.title, { fontWeight: '400', fontSize: 14, marginBottom: '2%', marginLeft: '1%' }]}>Task Category</Text>
                </View>
                <View style={{ backgroundColor: backgroundColor, paddingHorizontal: '2%', paddingVertical: '3%', borderRadius: 8,flexDirection:'row',alignItems:'center' }}>
                    {categoryIcon}
                    <Text style={[styles.title, { fontWeight: '400', fontSize: 14,color:'black' }]}>{taskDetails.category}</Text>
                </View>
            </View>

            <View style={styles.icons}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <FlagSvg />
                    <Text style={[styles.title, { fontWeight: '400', fontSize: 14, marginLeft: '1%' }]}>Task Priority</Text>
                </View>
                <View style={{ backgroundColor: "#363636", paddingHorizontal: '2%', paddingVertical: '3%', borderRadius: 8 }}>
                    <Text style={[styles.title, { fontWeight: '400', fontSize: 14, }]}>{taskDetails.priority}</Text>
                </View>
            </View>



            <View style={styles.icons}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <FlagSvg />
                    <Text style={[styles.title, { fontWeight: '400', fontSize: 14, marginLeft: '1%' }]}>Stage</Text>
                </View>
                <View style={{ backgroundColor:task.stage==="COMPLETED"?'#66CC41': "#363636", paddingHorizontal: '2%', paddingVertical: '3%', borderRadius: 8 }}>
                    <Text style={[styles.title, { fontWeight: '400', fontSize: 14, }]}>{taskDetails.stage}</Text>
                </View>
            </View>


            <View style={styles.icons}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <DeleteIcon />
                    <Text style={[styles.title, { fontWeight: '400', fontSize: 16, marginLeft: '5%', color: '#FF4949' }]}>
                        Delete
                    </Text>
                </View>

            </View>
            </View>
            <View>
            <Pressable style={[styles.button,{backgroundColor:editTask?'#282828':'#8875FF', borderColor:editTask?"#8687E7":'transparent',borderWidth:1}]} onPress={()=>setEditTask(!editTask)} >
                          <Text style={[styles.description,{fontWeight:'500'}]}>
                          {editTask?'Save my task':'Edit my task'}
                            </Text>
            </Pressable>
            </View>

           
        </ScrollView>

        {showBottom &&
                <BottomSheet
                    ref={bottomSheetRef}
                    snapPoints={snapPoints}
                    // onClose={() => { changeBottomVisibility(false) }}
                    enablePanDownToClose
                    backgroundStyle={{ backgroundColor: '#363636', }}
                    containerStyle={{ backgroundColor: 'transparent' }}

                >

                    <Pressable style={styles.bottomSheevView} onPress={() => Keyboard.dismiss()}  >
                        <Text style={styles.taskHeader}>Edit Task</Text>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <BottomSheetView>
                                <TextInput
                                    placeholder="Task Title"
                                    onChangeText={(text) => setTaskDetails({ ...taskDetails, title: text })}
                                    value={taskDetails.title}
                                    style={[styles.Tasktitle, { borderWidth: !isFocused ? 0 : 1 }]}
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                    placeholderTextColor={"#AFAFAF"}
                                />

                                <TextInput
                                    placeholder="Task Description"
                                    onChangeText={(text) => setTaskDetails({ ...taskDetails, description: text })}
                                    value={taskDetails.description}
                                    style={[styles.Tasktitle, { borderWidth: !isFocused2 ? 0 : 1, marginBottom: '5%' }]}
                                    onBlur={handleBlur2}
                                    onFocus={handleFocus2}
                                    placeholderTextColor={'#AFAFAF'}
                                />
                                <View>
                                    {taskDetails.date && <Text style={{ color: 'white', marginLeft: '4%', marginBottom: '3%' }}>Selected Date: {taskDetails.date}</Text>}
                                    <View style={{ marginLeft: '4%', marginBottom: '3%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                                        {taskDetails.category && <Text style={{ color: 'white' }}>Category: {taskDetails.category}</Text>}
                                        {taskDetails.priority && <Text style={{ color: 'white' }}>Priority: {taskDetails.priority}</Text>}
                                    </View>

                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'space-evenly' }}>
                                        <Timer onPress={() => {

                                            setIsOpened(true)

                                        }} />
                                        <LabelSvg onPress={() => {
                                            setOpenCategories(true)
                                        }} />

                                        <FlagSvg onPress={() => {
                                            setOpenPriority(true)
                                        }} />
                                    </View>
                                    {taskDetails.description && taskDetails.title && taskDetails.date &&
                                        <Sender onPress={()=>{
                                            doEditTask()
                                        }} />
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

export default DetailedTask

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor: 'black',
        // backgroundColor: '#282828',
        paddingVertical: '5%',
        paddingHorizontal: '5%'
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
        fontSize: 18,
        fontWeight: '600'
    },
    description: {
        fontSize: 16,
        color: 'white',
        fontWeight: '300',

    },
    icons: {
        marginVertical: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        // backgroundColor: '#8875FF',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical:'5%',
        marginTop:'20%'
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
    buttonIn: {
        backgroundColor: '#8875FF',
        borderRadius: 10,
        alignItems: 'center',
        // marginTop:'20%'
        // flex: 1,
    },
    priorityBox: {
        borderWidth: 1,
        paddingVertical: '2%',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: '5%'
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
})