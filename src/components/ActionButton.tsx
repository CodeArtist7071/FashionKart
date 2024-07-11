import React from 'react'
import { TouchableOpacity,View,Text, Button } from 'react-native'

interface ButtonProps{
    title: string;
    onPress:any;
    style:any;
    textStyle:any;
    touchStyle:any;
    
}

const ActionButton = ({title,onPress,style,touchStyle,textStyle}:ButtonProps) => {
  return (
    <View>
   <TouchableOpacity style={touchStyle} onPress={onPress}>
    <View style={style}>
        <Text style={textStyle}>{title}</Text>
    </View>
   </TouchableOpacity>
    </View>

  )
}

export default ActionButton
