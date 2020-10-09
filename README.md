## Abx Backend Assignment 

The projects attempt to achieve the **objectives** provided by POC with the links given below: 
https://github.com/airboxr/abx-backend-assignment  

## Behind The Scenes

This sections outlined how the objectives is achieved with actions and key decisions taken in every single requirements.

### 1. Remove unused tables in database.

SQL query is executed in order to remove unused table in the database and retains only the following tables:
- Genre
- Media Type 
- Track 
- Playlist
- PlaylistTrack

The query for this execution is stored in `sql/01_remove_unused_table.sql`


After removed the unused table, we will remove `AlbumId` from the `Track` table. This step prevents `typeorm-model-generator` generate album relationships as the table had already deleted.

The query for this execution is stored in `sql/02_remove_albumid_from_track.sql`

---

### 2. Generate Entities 

The command below is executed in order to generate models for TypeORM for existing SQLite databases. 

```bash
$ npm install typeorm-model-generator
$ typeorm-model-generator -h 127.0.0.1 -d abx.db -p 0 -u "" -x "" -e sqlite
```

--- 

### 3. Expand the database records

Prior to the database seeding, we are going to remove the unique constraints of `PlaylistTrack` table. 
Although the action taken is not a good practice, we would like to speed up the seeding process to avoid **unique constraint errors** while seeding 10 millions data.

We are going to use `Faker` and `typeorm-seeding` package in order to generate garbage data into the database.

```bash
$ npm install typeorm-seeding @types/faker
```

Then, we create **factories** and **seeds** to insert random data into the tables.

```
src/
├── database/               
    ├── factories/        
        ├── playlist.factory.ts     
        ├── track.factory.ts     
    ├── seeds/ 
        ├── create-playlist.seed.ts     
        ├── create-track.seed.ts
        ├── create-playlist-track.seed.ts
```

Ultimately, we execute the following commands to perform seeding. 

```bash
$ npm run seed:config
$ npm run seed:run
```

--- 

### 4. Create the Endpoints 

We are going to setup this project with **Repository Design Pattern** to break  into three layers (Controller, Service and Repository). 
The entities has its own repository and can be obtained via the database connection. 

A documentation is crafted for the endpoints created with the link given below:
https://documenter.getpostman.com/view/4516550/TVRkZ7xy

--- 



