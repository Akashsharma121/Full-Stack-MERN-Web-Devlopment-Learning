import { useState } from 'react';
import logo from './logo.svg';
import "./App.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [value, setValue] = useState(0)

  return (
    <div className="App">
      <Navbar logoText="AkashWithCode"/>
      <div className='value'>{value}</div>
      <button onClick={()=>{setValue(value + 1)}}>click me</button>
      <Footer/>
    </div>
  );
}

export default App;
