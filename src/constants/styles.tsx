import { StyleSheet } from "react-native";
import { black, white } from "./color";

export const customTheme = StyleSheet.create({
    OutlinebuttonStyle:{
        width:'100%',
     borderRadius:30,
     height:50,
     borderWidth:1,
     color:white,
    },
    dark_text:{
      color:black
    },
    light_text:{
     color:white
    }
})