const { argv } = require("yargs");
const MovieModel = require("./model");

// ADD MOVIE
exports.addMovie = async (newMovie) => {
    try {
        let movie = new MovieModel(newMovie)
        await movie.save()
        console.log(`Movie added: ${argv.title} ${argv.year}`)
    }
    catch (error) {
        console.log(error)
    }
};

// LIST ALL MOVIES
exports.listOne = async () => {
    try {
        const listResult = await MovieModel.findOne(
            { title: argv.title, year: argv.year }
        )
        console.log(listResult) 
    }
    catch (error) {
        console.log(error)
    }
};

// LIST ALL MOVIES
exports.listMovie = async () => {
    try {
        if (argv.title) {
            const listResult = await MovieModel.find(
                { title: argv.title }
            )
            console.log(listResult)
        }
        else if (argv.year) {
            const listResult = await MovieModel.find(
                { year: argv.year }
            )
            console.log(listResult)
        }
        else if (argv.actor) {
            const listResult = await MovieModel.find(
                { actor: argv.actor }
            )
            console.log(listResult)
        }
        else if (argv.genre) {
            const listResult = await MovieModel.find(
                { genre: argv.genre }
            )
            console.log(listResult)
        }
        else if (argv.rating) {
            const listResult = await MovieModel.find(
                { rating: argv.rating }
            )
            console.log(listResult)
        }
        else {
            const listResult = await MovieModel.find()
            console.log(listResult)
        }
    }
    catch (error) {
        console.log(error)
    }
};

// UPDATE MOVIE
exports.updateMovie = async () => {
    try {
        if (argv.newtitle) {
            await MovieModel.updateOne(
                { title: argv.title, year: argv.year },
                { $set: { title: argv.newtitle } }
            )
            console.log(`Movie title updated: "${argv.newtitle}" (${argv.year})`)
        }
        else if (argv.newyear) {
            await MovieModel.updateOne(
                { title: argv.title, year: argv.year },
                { $set: { year: argv.newyear } }
            )
            console.log(`Movie year updated: "${argv.title}" (${argv.newyear})`)
        }
        else if (argv.newactor) {
            await MovieModel.updateOne(
                { title: argv.title, year: argv.year },
                { $set: { actor: argv.newactor } }
            )
            console.log(`Movie actor updated: ${argv.newactor} - "${argv.title}" (${argv.year})`)
        }
        else if (argv.newgenre) {
            await MovieModel.updateOne(
                { title: argv.title, year: argv.year },
                { $set: { genre: argv.newgenre } }
            )
            console.log(`Movie genre updated: ${argv.newgenre} - "${argv.title}" (${argv.year})`)
        }
        else if (argv.newrating) {
            await MovieModel.updateOne(
                { title: argv.title, year: argv.year },
                { $set: { rating: argv.newrating } }
            )
            console.log(`Movie rating updated: ${argv.newrating} - "${argv.title}" (${argv.year})`)
        }
    }
    catch (error) {
        console.log(error)
    }
};

// DELETE MOVIE
exports.deleteMovie = async () => {
    try {
        await MovieModel.deleteOne(
            { title: argv.title, year: argv.year }
        )
        console.log(`Movie "${argv.title}" (${argv.year}) deleted`) 
    }
    catch (error) {
        console.log(error)
    }
};

// DELETE ALL MOVIES  BY FILTER
exports.deleteAll = async () => {
    try {
        if (argv.title) {
            await MovieModel.deleteMany(
                { title: argv.title }
            )
            console.log(`All movies named "${argv.title}" deleted`)
        }
        else if (argv.year) {
            await MovieModel.deleteMany(
                { year: argv.year }
            )
            console.log(`All ${argv.year} movies deleted`)
        }
        else if (argv.actor) {
            await MovieModel.deleteMany(
                { actor: argv.actor }
            )
            console.log(`All movies starring ${argv.actor} deleted`)
        }
        else if (argv.genre) {
            await MovieModel.deleteMany(
                { genre: argv.genre }
            )
            console.log(`All ${argv.genre} movies deleted`)
        }
        else if (argv.rating) {
            await MovieModel.deleteMany(
                { rating: argv.rating }
            )
            console.log(`All ${argv.rating}-rated movies deleted`)
        }
        else {
            await MovieModel.deleteMany()
            console.log("All movies in database deleted")
        }
    }
    catch (error) {
        console.log(error)
    }
};