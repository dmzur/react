import { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { MessageList } from './components/MessageList/MessageList';
import { AUTHOR } from './constants';

export const App = () => {
  const [messages, setMessages] = useState([]);
  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].author === AUTHOR.user) {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.bot,
          value: 'tralala',
        });
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [messages]);

  return <>
    <MessageList messages={messages} />
    <Form addMessage={addMessage} />
  </>

};
