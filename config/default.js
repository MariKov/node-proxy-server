module.exports = {
  nasaClient: {
    apiKey: process.env.API_KEY,
    baseUrl: "https://api.nasa.gov",
    asteroidsPath: "/neo/rest/v1/feed",
    marsPhotosPath: "/mars-photos/api/v1/rovers/curiosity/photos"
  }
}