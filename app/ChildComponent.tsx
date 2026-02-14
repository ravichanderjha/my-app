import { Text, View } from 'react-native';

export default function ChildComponent({ name, age, isStudent, MyBooks }: any) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Text>{isStudent ? "Yes" : "No"}</Text>

      {MyBooks.map((book: any) => (
        <Text key={book.title}>
          {book.title} by {book.author}
        </Text>
      ))}

    </View>
  );
}
