import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () => {
      console.log('Connection established');
      newSocket.send('Hello Server!');
      setSocket(newSocket)
    }
    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
    }
    setSocket(newSocket);
    return () => newSocket.close();
  }, [])

  if(!socket)
  {
    return(
    <div>
      Loading...
    </div> );
  }

  return (
    <>
      hi there
    </>
  )
}

export default App