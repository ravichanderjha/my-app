import { Text, View } from 'react-native';

interface Book {
  name: string;
  price: number;
}

interface ChildProps {
  name: string;
  age: number;
  myBooks?: Book[];
}

export default function Child({ name, age, myBooks }: ChildProps) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{age}</Text>
      {myBooks?.map((book, index) => (
        <Text key={index}>{book.name} - ${book.price}</Text>
      ))}
    </View>
  );
}
