# Airboxr FTE Backend Assignment

## Instructions

This is a skeleton-code repo for you to attempt your assignment. Some libraries you'll need are already installed and you're free to install any additional libraries as you see fit. You may also refer to any resource to help you in your attempt. To get started, simply clone this repo locally and run:

```
npm install
npm run start
```

You should then be able to do a GET request on http://localhost:3000/ and receive a "Hello World!" response.

Feel free to ask any questions and clear any doubts you have with your POC at Airboxr. Once you're confident to start attempting it, estimate the amount of time it'll take you and let your POC know of it.

## Environment

This project is intialzed using:

- [Typescript](https://www.typescriptlang.org/)
- [NestJS](https://docs.nestjs.com/)
- [Typeorm](https://github.com/typeorm/typeorm)

## Objectives

- Setup the sample database
  You'll be starting with the publicly available database called [Chinook](https://github.com/lerocha/chinook-database). This is what you need to do to setup the database as required:

  1. Download the sqlite version of the db
  2. Using SQL or a db browser of your choice like [this](https://sqlitebrowser.org/), modify the db such that only retains the following tables: Genre, MediaType, Track, Playlist and Track
  3. Rename the sqlite database file to "abx.db" and place it in this project's root directory (replace the existing auto-generated one)

- Generate entities using the [typeorm-model-generator](https://www.npmjs.com/package/typeorm-model-generator)

- Expand the database records by generating sample records in addition to the ones that already exist. In the end, there should be these many records for the following tables:

  - Track ~ 1million
  - Playlist ~ 100k
  - Track ~10million

- Create the following API endpoints:
  1. get Track by name
  2. get Track by playlist name & track name
  3. get number of tracks for a playlist name

## BONUS

Track and improve performance of your APIs:

1. Tracking how much time your API requests typically take to return a response
2. Come up with a way to minimize response time for your APIs

## Submission

Present your work by pushing it to a Github repository that's publicly accessible and share the link. Also, present a small write up to your POC at Airboxr explaining the key decisions you took to get to your solution. If you attempt the bonus objectives, you should also share API response times before and after your performance improvements.
