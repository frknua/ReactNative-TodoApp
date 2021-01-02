import React from 'react';
import {StyleSheet,Text, TouchableOpacity, View } from 'react-native';
// import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
export default function TodoItem({item, pressHandler}){
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style = {styles.item}>
            {
                /* <Icon
                    name="remove"
                    color="#333"
                    size={18}
                    /> */
                    <MaterialIcons name='delete' color="#333" size={18} />
                }  
            <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
        color:'#000',
        flexDirection:'row'
    },
    itemText:{
        marginLeft:10
    }
})