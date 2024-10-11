import React from "react";
import { SafeAreaView, View, Text, TextInput, Pressable, StyleSheet, StatusBar, FlatList, Image, ScrollView } from "react-native"
import Fontisto from '@expo/vector-icons/Fontisto';
import axios from "axios"
import AntDesign from '@expo/vector-icons/AntDesign';

const ToDoScreen = ({ route, navigation }) => {

  const [todo, setTodo] = React.useState([])
  const { name } = route.params;

  React.useEffect(() => {
    async function getTodo() {
      await axios.get("https://66f5fc36436827ced9759ca6.mockapi.io/todo").then(response => setTodo(response.data))
    }
    getTodo()
  })

  const addToDo = () => {
    navigation.navigate("AddJob")
  }

  const renderItem = (item) => {
    return <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10, backgroundColor: "#d2d5d8", padding: 10, borderRadius: 20}}>
      <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
        <AntDesign name="checksquareo" size={24} color="#369f5b" />
        <Text style={{marginLeft: 20}}>{item.todo_name}</Text>
      </View>
      <View>
        <AntDesign name="edit" size={24} color="#e06f70" />
      </View>
    </View>
  }

  return <SafeAreaView style={style.container}>
    <View style={style.item}>
      <View style={{display: "flex", flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#9da2ac", borderRadius: 5, marginTop: 20}}>
        <Fontisto style={{marginLeft: 10}} name="search" size={18} color="black" />
        <TextInput style={{marginLeft: 10, width: "100%", height: "100%", padding: 8}} placeholder="Search"/>
      </View>
    </View>
    <View style={[style.item, style.todo]}>
      <ScrollView style={{height: 400, width: "100%"}}>
      <FlatList
        data={todo}
        keyExtractor={item => item.todo_id.toString()}
        renderItem={({ item }) => renderItem(item)}
      />
      </ScrollView>
      <View style={{marginTop: 20, backgroundColor: "#00bdd6", borderRadius: "50%"}}>
        <Pressable onPress={() => addToDo()}>
          <Text style={{color: "white", fontSize: 30, padding: 10, paddingLeft: 20, paddingRight: 20}}>+</Text>
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