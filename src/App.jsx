import { Message } from './components/message/Message.jsx';

export const App = () => {
  const appText = 'lalala'
  return (
    <div className="App">
      <Message text={appText} />
    </div>
  );
}
