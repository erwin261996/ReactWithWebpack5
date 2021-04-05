import { useState } from 'react';
import "./App.css"
import "./App.scss"

const App = () => {
    const [ name, setName ] = useState('');

    return (
        <div className="app">
            <label htmlFor="name">Nombre: {name}</label><br/>
            <input type="text"
                id="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
        </div>
    )
}

export default App;