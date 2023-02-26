import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import SearchImage from './api'
function App() {
  const [images, setImages] = useState([])


  const handleSubmit = async (term) => {
    const result = await SearchImage(term)
    setImages(result)
  }
  return <div>
    <SearchBar onSubmit={handleSubmit} />
    <ImageList images={images} />
  </div>
}

export default App;