import Axios from "axios";

export const getContent = async () => {
  const content = await Axios.get('http://localhost:3001/content')
  
  return {
    type: 'SET_CONTENT',
    content
  }
};