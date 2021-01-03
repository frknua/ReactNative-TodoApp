import React, {useState} from 'react';
import {View, TextInput, Button } from 'react-native';
import {globalStyles} from '../styles/global';
export default function AddTodo({submitHandler}){
    
    const [text,setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return(
        <View>
            <TextInput 
                style = {globalStyles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            { 
                <Button onPress={() => submitHandler(text)} title='Add Todo' color='coral' />
            }
        </View>
    )
}
