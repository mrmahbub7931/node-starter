import { use, useEffect, useState } from 'react'
import apiClient from './api/connect'

function App() {
  // const [msg, setMsg] = useState('');

  // useEffect(() => {
  //   apiClient.get('/status')
  //     .then(response => {
        
  //       setMsg(response.data.message);
  //     })
  //     .catch(error => {
  //       console.error('There was an error!', error);
  //     });
  // }, []);

  return (
    <>
      <div className='text-center mt-20'>
        <h1 className='text-3xl text-red-600'>Test App</h1>
      </div>
    </>
  )
}

export default App
