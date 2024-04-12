import { useEffect, useState } from "react"

function App() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch('/movies')
      .then(r => r.json())
      .then(moviesList => {
        setMovies(moviesList)
        console.log(moviesList)
      })
  }, [])
  return <h1>Check the console for a list of movies!</h1>;
}

export default App