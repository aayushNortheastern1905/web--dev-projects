# Gamehub

Gamehub is a game library website created using Vite + React + TypeScript, where users can search for games and view their Metacritic scores and ratings. The website offers various filters allowing users to search for games based on genre and platform. Games can be ordered by their name, release date, creation date, ratings, Metacritic score, and more.

## Features

- Search for games
- View Metacritic scores and ratings
- Filter games by genre and platform
- Sort games by various criteria

## Data Source

The data is provided by the [RAWG.io](https://rawg.io/) API. To protect the API key, a proxy server has been created that the frontend can use to access the API endpoints of RAWG API.

## Next Steps

The next step for Gamehub is to implement the following technologies to collect user clickstream data:

- **Kafka JS**: Implement Kafka JS to manage user click stream data.
- **Apache Spark Streaming**: Utilize Apache Spark Streaming for real-time data processing.
- **Cassandra**: Integrate Cassandra as the database to store user click stream data efficiently.

## Usage

To use Gamehub locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/Gamehub.git`
2. Install dependencies: `npm install`
3. Setup .env files
4. Start the proxy server (cd server): `node index.js`
5. Start the development server (cd game-hub): `npm run dev`

Feel free to reach out to me if you have any questions or suggestions!
[LinkedIn](www.linkedin.com/in/rohan-bh-shah)
