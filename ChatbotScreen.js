import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

const ChatbotScreen = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [reply, setReply] = useState('');

  const sendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:5000/chat', {
        message: inputMessage,
      });
      setReply(response.data.reply);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{reply}</Text>
      <TextInput
        style={{ height: 40, width: 200, borderWidth: 1, marginBottom: 10 }}
        placeholder="Type a message"
        onChangeText={setInputMessage}
        value={inputMessage}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

export default ChatbotScreen;
