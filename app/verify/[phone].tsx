import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useState } from 'react';


const Page = () => {
    const { phone, signin } = useLocalSearchParams<{ phone: string; signin: string }>();
    const [code, setCode] = useState('');

    
  return (
    <View>
      <Text>page</Text>
    </View>
  )
}

export default Page