import React, {useEffect, useRef, useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

export default App = () => {
  const baseURL = 'http://localhost:3001';
  const [get_id, setId] = useState(null);

  async function getAllData() {
    fetch(`${baseURL}/student`)
      .then(response => response.json())
      .then(responseJson => {
        alert('result:' + JSON.stringify(responseJson));
      })
      .catch(error => {
        console.error(error);
      });
  }

  async function getDataById() {
    console.log(get_id);
    const id = get_id;
    //console.log(id);
    console.log(typeof id);

    if (id) {
      console.log('inside if');
      fetch(`${baseURL}/student/${id}`)
        .then(response => response.json())
        .then(responseJson => {
          alert('result:' + JSON.stringify(responseJson));
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 10,
      borderWidth: 1,
      padding: 10,
    },
  });

  const buttonStyles = StyleSheet.create({
    input: {
      height: 40,
      margin: 10,
      borderWidth: 1,
      padding: 1,
    },
  });
  return (
    <View style={{flex: 1, padding: 24}}>
      <Button title="Get All Students" onPress={getAllData} />
      {console.log('')}
      <TextInput
        style={styles.input}
        onChangeText={changeText => setId(changeText)}
        defaultValue={get_id}
        placeholder="Enter ID"
        keyboardType="numeric"
      />
      <Button style={buttonStyles.input} title="Get Student" onPress={getDataById} />
    </View>
  );
};
