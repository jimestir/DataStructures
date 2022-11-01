//Modify the video-rental kiosk program so that when a movie is checked out it is
//added to a list of rented movies. Display this list whenever a customer checks out
//a movie.

//variables assignment
const fs = require('fs');
var movies = fs.readFileSync("./movies.txt", { encoding: 'utf8', flag: 'r' }).split("\r\n");
const { List } = require('../../lib/List.js');
let customers = new List();
let rentedList = new List();
let movieList = new List();
const prompt = require('prompt-sync')({ sigint: true });
//filling movieList with movies
for (let i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}

//main function
function kioskManagement() {
    let userAction = prompt('Select a Number and press enter:1. Rent a movie 2. Return a movie ')
    userAction = Number(userAction)
    let userWantToRent = true
    if (userAction == 1) {
        while (movieList.length() > 0 && userWantToRent) {
            moviesDistribution()
            let userAction2 = prompt('Would you like to rent another movie? 1.Yes   2.No   3.I want to return a movie')
            userAction2 = Number(userAction2)
            if (userAction2 == 2) {
                userWantToRent = false
                console.log('thanks for the visit')
            } if (userAction2 == 3) {
                returnedMovie()
            }
        }
    }
    if (userAction == 2) {
        returnedMovie()
    } if (movieList.length() < 0) {
        console.log('No more available movies')
    }
}
kioskManagement()


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

function moviesDistribution() {
    console.log("Available movies:");
    displayList(movieList);
    const name = prompt('Insert your name:');
    const movieToRent = prompt("What movie would you like?");
    if (movieList.contains(movieToRent)) {
        checkOut(name, movieToRent, movieList, customers);
        console.log("Customer Rentals:");
        displayList(customers);
        console.log("Movies Now Available");
        displayList(movieList);
        console.log("Rented Movies");
        displayList(rentedList)
    } else {
        console.log("that movie doesn't exist")
    }
}

// Create a check-in function for the video-rental kiosk program so that a returned
//movies is deleted from the rented movies list and is added back to the available
//movies list.

function returnedMovie() {
    const rentedMovie = prompt('What movie are you returning?')
    let wantsToReturn = true
    while (wantsToReturn && movieList.length() > 0) {
        if (rentedList.contains(rentedMovie)) {
            rentedList.remove(rentedMovie)
            movieList.append(rentedMovie)
            console.log('Your movie is returned!')
            let anotherMov = prompt('Would you like to return another movie? 1. Yes   2.No')
            anotherMov = Number(anotherMov)
            if (anotherMov == 2) {
                wantsToReturn = false
            }
        }
    }
}

