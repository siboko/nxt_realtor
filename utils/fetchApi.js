import axios from 'axios'


export const baseUrl ='https://bayut.p.rapidapi.com'




 export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'f891105a24msh948bbf380b3369fp1bf76ajsnc61f10cd7384',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
            
    })

    return data;
 }