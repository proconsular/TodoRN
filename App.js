/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import {View, StatusBar, StyleSheet, Text, ScrollView, AsyncStorage, Button} from 'react-native';
import {Task} from './src/components/task.component';
import { Form } from './src/components/form.component';

const App: () => React$Node = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    _retrieveData().then((data) => {
      setTasks(data.filter(t => t !== null))
    })
  }, [])

  const submit = (text) => {
    let ts = [...tasks, {timestamp: Date.now(), done: false, name: text}]
    _storeData(ts)
    setTasks(ts)
  }

  const removeTask = (task) => {
    let ts = Object.assign([], tasks)
    let index = ts.indexOf(task)
    delete ts[index]
    setTasks(ts)
    _storeData(ts)
  }

  const setDone = (index, done) => {
    let ts = Object.assign([], tasks)
    ts[index].done = done
    _storeData(ts)
    setTasks(ts)
  }

  const clearAll = () => {
    setTasks([])
    _storeData([])
  }

  const sortTasks = (a, b) => {
    if (a && b) {
      if (a.timestamp < b.timestamp)
        return 1
      if (a.timestamp > b.timestamp)
        return -1
    }
    return 0
  }

  return (
    <>
      <View>
        <View style={{height: 20, backgroundColor: '#19e'}} >
          <StatusBar barStyle="default" />
        </View>
        <ScrollView style={style.main}>
          <View style={style.titlebar}>
            <Text style={style.title}>Todos</Text>
            <Button 
              title="Clear All"
              onPress={clearAll}
            />
          </View>
          <View style={style.container}>
            <Form submit={submit} />
            {tasks && tasks.sort(sortTasks).map((task, id) => {
              if (task)
                return <Task key={task.timestamp} task={task} setDone={(done) => setDone(id, done)} remove={removeTask} />
            })}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('tasks');
    if (value) {
      return JSON.parse(value)
    }
  } catch (error) {
    console.log(error)
  }
}; 

const _storeData = async (tasks) => {
  try {
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks.filter(t => t !== null)));
  } catch (error) {
    console.log(error)
  }
};

const style = StyleSheet.create({
  main: {
    backgroundColor: '#111',
    height: '100%',
    padding: 24,
    // paddingTop: 36,
  },
  title: {
    color: '#eee',
    fontSize: 36,
  },
  container: {
    paddingTop: 12,
  },
  titlebar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  }
});

export default App;
