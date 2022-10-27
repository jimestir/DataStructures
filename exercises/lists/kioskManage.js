//Modify the video-rental kiosk program so that when a movie is checked out it is
//added to a list of rented movies. Display this list whenever a customer checks out
//a movie.

//variables assigment
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const fs = require('fs');
var movies = fs.readFileSync("./movies.txt", { encoding: 'utf8', flag: 'r' }).split("\r\n");
const { List } = require('../../lib/List.js')
let customers = new List();
let rentedList = new List();
let movieList = new List();
//filling movieList with movies
for (let i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}

//main function
function kioskManagement() {
    while(movieList.length>0){
        console.log(moviesDistribution())
    }
}


//secondary functions
function checkOut(name, movie, filmList, customerList) {
    if (filmList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        filmList.remove(movie);
        rentedList.append(movie);
    }
    else {
        console.log(movie + " is not available.");
    }
}

function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            console.log(list.getElement()["name"] + ", " +
                list.getElement()["movie"]);
        }
        else {
            console.log(list.getElement());
        }
    }
}
    console.log("Available movies: \n");
    displayList(movieList);
    rl.question('Insert your name:\n', function (name) {
        rl.question("What movie would you like? ", function (movie) {
            checkOut(name, movie, movieList, customers);
            console.log("\nCustomer Rentals: \n");
            displayList(customers);
            console.log("\nMovies Now Available\n");
            displayList(movieList);
            console.log("\nRented Movies\n");
            displayList(rentedList)
        });
    })


// Create a check-in function for the video-rental kiosk program so that a returned
//movies is deleted from the rented movies list and is added back to the available
//movies list.

/*function checkIn(movie) {
    if (rentedList.contains(movie)) {
        rentedList.remove(movie)
        movieList.append(movie)
    }
}*/