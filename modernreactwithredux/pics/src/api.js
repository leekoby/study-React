import axios from 'axios'

const SearchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID LNkkbqXYN9HOzsPgOvx4zm33yKpuLu81aT1e5Tlrqdk'
    },
    params: {
      query: term,
    }
  });
  return response.data.results;
};
export default SearchImages;