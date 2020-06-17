import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';

import Header from '../components/Header';

const AddTodo = (props) => {
  const [enteredTodo, setEnteredTodo] = useState({});

  const handleTitleChanges = (enteredTodoTitleText) => {
    enteredTodo.title = enteredTodoTitleText;
  };

  const handleDescriptionChanges = (enteredTodoDescriptionText) => {
    enteredTodo.description = enteredTodoDescriptionText;
  };

  const addTodoHandler = () => {
    setEnteredTodo({
      id: Math.random().toString(),
      title: enteredTodo.title,
      description: enteredTodo.description,
    });

    props.onAddTodo(enteredTodo);

    setEnteredTodo({});
  };

  return (
    <Modal visible={props.visible} style={styles.modal} animationType='slide'>
      <Header title='Add new TODO' />
      <View style={styles.mainContainer}>
        <View style={styles.formLine}>
          <Text style={styles.formLabel}>TODO title</Text>
          <TextInput
            value={enteredTodo.title}
            style={styles.formInput}
            placeholder='Enter TODO title'
            onChangeText={handleTitleChanges}
          />
        </View>
        <View style={styles.formLine}>
          <Text style={styles.formLabel}>TODO description</Text>
          <TextInput
            value={enteredTodo.description}
            style={styles.formInput}
            placeholder='Enter TODO description'
            onChangeText={handleDescriptionChanges}
          />
        </View>
        <View style={styles.formLine}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.cancelButton}
              activeOpacity={0.7}
              onPress={props.onCancel}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton} activeOpacity={0.7} onPress={addTodoHandler}>
              <Text style={styles.addButtonText}>Add TODO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  mainContainer: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  formLine: {
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  formInput: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 5,
    color: '#666666',
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  addButton: {
    padding: 15,
    width: '45%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ffffff',
    backgroundColor: '#147EFB',
  },
  addButtonText: {
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cancelButton: {
    padding: 15,
    width: '45%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#f1f1f1',
    backgroundColor: '#f1f1f1',
  },
  cancelButtonText: {
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#000000',
    textAlign: 'center',
  },
});

export default AddTodo;
