# Mongoose-CLI for Code Nation


## Requirements
- .env file with MongoDB URI
- dotenv 
- Mongoose
- Yargs


## How to Use


#### Add a Movie

Each movie must include a **title** and the **year** it was released. 

```node src/app.js --add --title "Avatar" --year 2009```

Optional properties: 

- **actor:** ```--actor"Zoe Saldana"```
- **genre:** ```--genre"Fantasy"```
- **rating:** ```--rating"PG-13"```


#### Find a Movie

Find and list a specific movie using the its given **title** and **year:** 

```node src/app.js --listOne --title "Avatar" --year 2009```


#### Find Movies by Property

Find and list multiple movies with filtered search results.

- Find by **title:** ```node src/app.js --list --title "Avatar"```
- Find by **year:** ```node src/app.js --list --year 2009```
- Find by **actor:** ```node src/app.js --list --actor "Zoe Saldana"```
- Find by **genre:** ```node src/app.js --list --genre "Fantasy"```
- Find by **rating:** ```node src/app.js --list --rating="PG-13"```


#### Update a Movie

Update a movie's property. You may only update one property at a time.

```node src/app.js --update --title="Avatar" --year 2009 --newproperty="<newvalue>"```

- Update **title:** ```--newtitle "Avatar"```
- Update **year:** ```--newyear 2009```
- Update **actor:** ```--newactor "Sam Worthington"```
- Update **genre:** ```--newgenre "Action"```
- Update **rating:** ```--newrating "15"```


#### Delete a Movie

Delete a specific movie using the its given **title** and **year:** 

```node src/app.js --delete --title "Avatar" --year 2009```


#### Delete Movies by Property

Delete multiple movies by property filter. You may only use one filter at a time.

- Delete by **title:** ```node src/app.js --deleteAll --title "Avatar"```
- Delete by **year:** ```node src/app.js --deleteAll --year 2009```
- Delete by **actor:** ```node src/app.js --deleteAll --actor "Zoe Saldana"```
- Delete by **genre:** ```node src/app.js --deleteAll --genre "Fantasy"```
- Delete by **rating:** ```node src/app.js --deleteAll --rating "PG-13"```


#### Delete All Movies

Delete all movies in the database:

```node src/app.js --deleteAll```