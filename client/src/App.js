import React, {useState, useEffect} from 'react'
import Axios from 'axios'

function App() {

  const [menus, setMenus] = useState([]);

  
  useEffect(() => {
    fetchMenus()
  }, []);


  const fetchMenus = async() => {
    const response = await Axios("http://localhost:9000/testAPI");
    console.log(response.data) 
    setMenus(response.data)   
  }

  return (
    <div className="App"> 
        <h1>client side</h1>     
        {
          menus && menus.map(menu => {
            return(
              <p>{menu.name}</p>
            )
          })
        }        
      </div>
  )
}

export default App



