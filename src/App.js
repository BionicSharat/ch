import { doc, getDoc, updateDoc, collection } from 'firebase/firestore';
import './App.css';
import { useState, useEffect } from 'react';
import { db } from './lib/initalize-firebase';
import { citizenCollectionRef } from './lib/firestore-collections.js';

function App() {
  const [citizen, setCitizen] = useState({name: "", city: "", id: ""});
  
  const changeCitizizen = () => {
    const docRef = (doc(db, 'members', 'citizen'))
    updateDoc(docRef, citizen);
  }

  useEffect(() => {
    const getCitizen = async () => {
      const citizen2 = await getDoc(doc(db, 'members', 'citizen'));
      setCitizen(citizen2.data())
    }
    getCitizen()
  }, []);
  
  return (
    <div className="App">
      <div>
        <h1>Enter you name</h1>
        <input defaultValue={citizen.name} onChange={(e) => {setCitizen({...citizen, name: e.target.value})}} type="text" />
        <h1>Enter you city</h1>
        <input defaultValue={citizen.city} onChange={(e) => {setCitizen({...citizen, city: e.target.value})}} type="text" />
        <h1>Enter you ID</h1>
        <input defaultValue={citizen.id} onChange={(e) => {setCitizen({...citizen, id: e.target.value})}} type="text" />
        <div className="button1" onClick={() => {changeCitizizen()}}>
          <h1>Change</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
