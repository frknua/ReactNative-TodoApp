import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, LogBox } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import {globalStyles} from './styles/global';

export default function App(){

  LogBox.ignoreLogs(['Remote debugger']);

  const [todos,setTodos] = useState([
    {text: 'buy coffee', key: 1},
    {text: 'create an app', key: 2},
    {text: 'play on the switch', key: 3}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }
  
  const submitHandler = (text) => {

    if(text.length > 3)
    {
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.floor(Math.random() * 100) * 1},
          ...prevTodos
        ];
      });
    }  
    else{
        Alert.alert("OOPS!","Todos must be over 3 chars long",
        [
          {
            text:"Understood",
            onPress:() => console.log("alert closed!")
          }
        ]);
    }
  }
   
  return(
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log("dismissed keyboard!");
    }}>
    <View style={globalStyles.container}>
      <Header />
      <View style={globalStyles.content}>
        <AddTodo submitHandler = {submitHandler} />
        <View style={globalStyles.list}>
          <FlatList
            data ={todos}
            keyExtractor={item => item.key.toString()}
            renderItem={({item}) => (
              <TodoItem item = {item } pressHandler = {pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}



