function transformAsteroids(rawAsteroids, filter, count) {
    const asteroids_per_day_map = rawAsteroids.near_earth_objects;
    return Object.keys(asteroids_per_day_map)
        .map(date => ({
            date: [date],
            meteors: asteroids_per_day_map[date].map(mapEachAsteroid)
                .filter(filter)
                .slice(0, count)
        }))
}

function mapEachAsteroid(rawAsteroid) {
    return {
        id: rawAsteroid.id,
        name: rawAsteroid.name,
        diameter: rawAsteroid.estimated_diameter.meters,
        is_potentially_hazardous_asteroid: rawAsteroid.is_potentially_hazardous_asteroid,
        close_approach_date_full: rawAsteroid.close_approach_data[0].close_approach_date_full,
        relative_velocity: rawAsteroid.close_approach_data[0].relative_velocity.kilometers_per_second,
    };
}

module.exports = transformAsteroids;