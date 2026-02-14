import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ChildComponent from './ChildComponent';

export default function App() {
  const [count, setCounter] = useState(0);
  
  const handleIncrement = () => {
    console.log('Current count before increment:', count);
    setCounter(prev => {
      const newValue = prev + 1;
      console.log('New count:', newValue);
      return newValue;
    });
  };

  const name = "prakash";
  const age = 22;
  const isStudent = true;
  const MyBooks = [
    { title: "Book 1", author: "Author 1" }, 
    { title: "Book 2", author: "Author 2" }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: {count}</Text>
      <Button title="Increment" onPress={handleIncrement} />
      <ChildComponent 
        name={name} 
        age={age} 
        isStudent={isStudent} 
        MyBooks={MyBooks} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
