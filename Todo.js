import React from "react";
import { SafeAreaView, View, Text, TextInput, Pressable, StyleSheet, StatusBar, FlatList, VirtualizedList, ScrollView } from "react-native"
import Fontisto from '@expo/vector-icons/Fontisto';
import axios from "axios"

const ToDoScreen = ({ route, navigation }) => {

  const [todo, setTodo] = React.useState([])
  const { name } = route.params;

  React.useEffect(() => {
    async function getTodo() {
      await axios.get("https://66f5fc36436827ced9759ca6.mockapi.io/todo").then(response => setTodo(response.data))
    }

    getTodo()
  }, [])

  const addToDo = () => {

  }

  const renderItem = (item) => {
    return <Text>{item.todo_name}</Text>
  }

  return <SafeAreaView style={style.container}>
    <View style={style.item}>
      <View style={{display: "flex", flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#9da2ac", borderRadius: 5}}>
        <Fontisto style={{marginLeft: 10}} name="search" size={18} color="black" />
        <TextInput style={{marginLeft: 10}} placeholder="Search"/>
      </View>
    </View>
    <View style={[style.item, style.todo]}>
      <ScrollView style={{height: 300}}>
        <FlatList
          data = {todo}
          keyExtractor={item => item.todo_id}
          renderItem = {(item) => renderItem(item)}
        />
      </ScrollView>
      <View style={{marginTop: 20}}>
        <Pressable onPress={() => addToDo()}>
          <Text>+</Text>
        </Pressable>
      </View>
    </View>
  </SafeAreaView>
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    marginTop: StatusBar.currentHeight,
  },
  item: {
    width: "90%"
  },
  todo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 96
  }
})

export default ToDoScreen;