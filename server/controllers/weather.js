import axios from 'axios';

export const getCityWeather = async (req, res) => {
  try {
    // console.log(req);
    console.log("getCityWeather: " + req.params.city);
    const city = req.params.city;
    console.log("https://www.metaweather.com/api/location/search/?query=" + city);
    // const city = req.params.city;
    const { data:cityData} = await axios.get(
      "https://www.metaweather.com/api/location/search/?query=" + city
    );

    // console.log("cityWeatherData: ", res);
    // const data = res.data;
    console.log("cityWeatherData 16546465: ", cityData);

    if(cityData.length == 1 ){
      const { data } = await axios.get(
        "https://www.metaweather.com/api/location/" + cityData[0].woeid
      );

      res.status(200).json(data);
    } else {
      //TODO:: did you mean..?
    }
  } catch (error) {
    // console.log(error);
    res.status(404).json({ message: error.message });
  }
};

// export const createPost = async (req, res) => {
//   const post = req.body;

//   const newPost = new PostMessage(post);
//   try {
//     await newPost.save();
//     res.status(201).json(newPost);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
//};
