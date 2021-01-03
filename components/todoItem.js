import React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
// import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {globalStyles} from '../styles/global';
export default function TodoItem({item, pressHandler}){
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style = {globalStyles.item}>
            {
                /* <Icon
                    name="remove"
                    color="#333"
                    size={18}
                    /> */
                    <MaterialIcons name='delete' color="#333" size={18} />
                }  
            <Text style={globalStyles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}