import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SuccessICon } from '../svgs/Breadsvg'

export const MessageSuccess = () => {

useEffect(() => {
  const timeoutId = setTimeout(() => {
    console.log('NAVIGATE BACK AFTER SETTING TO REDUX STORE');
  }, 3000); 
  return () => clearTimeout(timeoutId);
}, []);

  return (
    <View style={styles.container}>
        <SuccessICon/>
      <Text style={styles.text}>Task Created Successfully</Text>
    </View>
  )
}

export const MessageCompleted= () => {
   
      
    return (
      <View style={styles.container}>
        <SuccessICon color='green'/>
      <Text style={[styles.text,{color:'green'}]}>Task Completed Successfully</Text>
      </View>
    )
  }

  export const MessageUpdated= () => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          console.log('NAVIGATE BACK AFTER SETTING TO REDUX STORE');
        }, 3000); 
        return () => clearTimeout(timeoutId);
      }, []);
      
    return (
      <View style={styles.container}>
          <SuccessICon/>
      <Text style={styles.text}>Task Updated Successfully</Text>
      </View>
    )
  }

  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'black',
        // backgroundColor: '#282828',
        paddingVertical: '5%',
        paddingHorizontal: '5%'
    },
    text:{
        color:'white',
        textAlign:'center',
        fontSize:20,
        marginTop:'5%'
    }
})