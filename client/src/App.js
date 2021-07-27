import React, {useState, useEffect} from 'react'

function App() {

  const [menus, setMenus] = useState('');

  const callAPI = () => (
    fetch("http://localhost:9000/testAPI")
        .then(res =>  res.text())
        .then(res => setMenus(res))        
  )

  useEffect(() => {
    callAPI()
  }, []);

  return (
    <div className="App"> 
        <h1>client side</h1>     
        <p>{menus}</p>
      </div>
  )
}

export default App



