import { useState, useEffect } from 'react'
import './App.css'

const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players'

function App () {
  const [puppyList, setPuppyList] = useState([])
  const [singleView, setSingleView] = useState([])


  useEffect(() => {
  const fetchPuppies = async () => {
  const response = await fetch(API_URL);
  const body = await response.json();
  const puppies = body.data
    
console.log(body)


  setPuppyList(puppies)

}
fetchPuppies()


}, []);

  return (
 <>
 <button type="submit">Submit</button>
 </>
)
}


export default App
