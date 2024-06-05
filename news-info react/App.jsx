import React, { useState } from 'react';
import Newsnavbar from './newsnavbar.jsx';
import Newsboard from './newsboard.jsx';
function App() {
  const [category,setCategory]=useState("general");
  return(<>
  
<Newsnavbar setCategory={setCategory}></Newsnavbar>
<Newsboard category={category}></Newsboard>
  </>);
}

export default App
