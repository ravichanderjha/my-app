import { useState } from 'react';
import { Button, Text, View } from 'react-native';


export default function App() {

  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(prev=>prev+1)} />
    </View>
  );
}
