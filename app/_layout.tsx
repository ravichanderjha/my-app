import { Text, View } from 'react-native';
import Child from './Child';

export default function App() {

  const nameIs = "prakash jha";
  const ageIs = 28;
  const myBooks = [
    { name: "book1", price: 100 },
    { name: "book2", price: 200 },
    { name: "book3", price: 300 }
  ];
  
  return (
    <View>
      <Text>App component</Text>
      <Child name={nameIs} age={ageIs} myBooks={myBooks} />
    </View>
  );
}
