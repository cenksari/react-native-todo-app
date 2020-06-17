import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

import Header from './components/Header';
import AddTodo from './screens/AddTodo';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isAddMode, setIsAddMode] = useState([]);

  const cancelTodoHandler = () => {
    setIsAddMode(false);
  };

  const addTodoHandler = (todo) => {
    if (todo === null) {
      alert('Invalid TODO!');
    } else if (todo.title === undefined || todo.title === '') {
      alert('Please enter TODO title!');
    } else if (todo.description === undefined || todo.description === '') {
      alert('Please enter TODO description!');
    } else {
      setTodos((currentTodos) => [...currentTodos, todo]);

      setIsAddMode(false);
    }
  };

  const removeTodoHandler = (todoId) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((item) => item.id !== todoId);
    });
  };

  return (
    <View style={styles.screen}>
      <Header title='TODO App' />
      <View style={styles.contentContainer}>
        <Text style={styles.addText}>Do you want to add new TODO item?</Text>
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.7}
          onPress={() => setIsAddMode(true)}
        >
          <Text style={styles.addButtonText}>Add new TODO</Text>
        </TouchableOpacity>
        <FlatList
          style={styles.flatList}
          keyExtractor={(item) => item.id}
          data={todos}
          renderItem={(itemData) => (
            <TodoItem
              key={itemData.item.id}
              id={itemData.item.id}
              title={itemData.item.title}
              description={itemData.item.description}
              onDelete={removeTodoHandler}
            />
          )}
        />
      </View>
      <AddTodo visible={isAddMode} onAddTodo={addTodoHandler} onCancel={cancelTodoHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  addText: {
    fontSize: 16,
    marginBottom: 20,
  },
  addButton: {
    padding: 15,
    width: '60%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ffffff',
    backgroundColor: '#147efb',
  },
  addButtonText: {
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#ffffff',
    textAlign: 'center',
  },
  flatList: {
    width: '100%',
    marginTop: 10,
  },
});
