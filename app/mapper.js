function mapAsteroids(rawAsteroids){
    const near_earth_objects = rawAsteroids.near_earth_objects;
    return Object.keys(near_earth_objects)
        .map(date => ({
            [date]: near_earth_objects[date].map(mapEachAsteroid)
        }))
}

function mapEachAsteroid(rawAsteroid){
 return  {
     id: rawAsteroid.id,
     name: rawAsteroid.name,
     diameter: rawAsteroid.estimated_diameter.meters,
     is_potentially_hazardous_asteroid: rawAsteroid.is_potentially_hazardous_asteroid,
     close_approach_date_full: rawAsteroid.close_approach_data[0].close_approach_date_full,
     relative_velocity: rawAsteroid.close_approach_data[0].relative_velocity.kilometers_per_second,
 };
}

module.exports = mapAsteroids;