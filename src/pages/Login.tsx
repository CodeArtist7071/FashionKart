import React from 'react'
import {ImageBackground, KeyboardAvoidingView, StyleSheet, useWindowDimensions, View} from 'react-native'
import ActionButton from '../components/ActionButton'
import { white } from '../constants/color'
import { useTheme } from '@react-navigation/native'
import { customTheme } from '../constants/styles'


const Login = () => {
    
  return (
   <View style={{height:'100%',width:'100%',backgroundColor:'green'}}>
    {/* <ImageBackground src='../assets/whole.jpg'> */}
        <KeyboardAvoidingView>
            <View style={styles.buttonDiv}>
                <ActionButton title={'Login'} onPress={undefined} style={customTheme.OutlinebuttonStyle} textStyle={styles.text} touchStyle={undefined} />
                <ActionButton title={'SignUp'} onPress={undefined} style={customTheme.OutlinebuttonStyle} textStyle={styles.text} touchStyle={undefined} />
             </View>
        </KeyboardAvoidingView>
    {/* </ImageBackground> */}
   </View>
  )
}

export default Login
const styles = StyleSheet.create({
    buttonDiv:{
      position:'absolute',
      width:'90%',
      top:200,
      marginHorizontal:'auto',
      gap:10,
      alignSelf:'center',
      backgroundColor:'blue'
    },
    text:{
     color:white,
     textAlign:'center',
     lineHeight:40
    }
})
