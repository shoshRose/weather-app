import * as api from "../api";

//Action creators
export const getWeather = (city) => async(dispatch) => {
    try {
        console.log(city);
        const { data } = await api.fetchWeather(city);
        console.log(data);
        dispatch({ type: 'FETCH_WEATHER', payload: data });
    } catch (error) {
        console.log(error.message);
    }
    
};

// export const createPost = (post) => async(dispatch) => {
//     try {
//         const { data } = await api.createPost(post);
//         dispatch({ type: 'CREATE', payload: data });
//     } catch (error) {
//         console.log(error.message);
//     }
    
// };