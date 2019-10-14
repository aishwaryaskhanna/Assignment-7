/*jslint browser */
/*global window */

//Five favourite movies
var movieArray = ["YJHD", "KKHH", "K3G", "THOR", "SIMBA"];
window.console.log(movieArray[1]);

//movies using constructor method
var movies = new Array(5);
var i = 4;
movieArray.forEach(function (element) {
    "use strict";
    movies[i] = element;
    i -= 1;
});
window.console.log(movies[0]);

//adding element to 3rd position
i = 4;
movieArray.forEach(function (element) {
    "use strict";
    movies[i] = element;
    i -= 1;
});
movies[movieArray.length] = movies[4];
movies[4] = movies[3];
movies[3] = movies[2];
movies[2] = "new movie";

window.console.log(movies.length);

//array using literal notation
movies = [movieArray[2], movieArray[3], movieArray[1], movieArray[0], movieArray[4]];
window.console.log(movies);

//array using literal notation and adding movies to make the array of length 7 --> for loop
movies = [movieArray[2], movieArray[3], movieArray[1], movieArray[0], movieArray[4], movieArray[4], movieArray[4]];

for (let index = 0; index < movies.length; index++) {
    window.console.log(movies[index]);
}

//array using literal notation and adding movies to make the array of length 7 --> for in loop
movies = [movieArray[2], movieArray[3], movieArray[1], movieArray[0], movieArray[4], movieArray[4], movieArray[4]];

for (const key in movies) {
    if (movies.hasOwnProperty(key)) {
        window.console.log(movies[key]);
    }
}

//array using literal notation and adding movies to make the array of length 7 --> sorted view
movies = [movieArray[2], movieArray[3], movieArray[1], movieArray[0], movieArray[4], movieArray[4], movieArray[4]];

for (const key in movies.sort()) {
    if (movies.hasOwnProperty(key)) {
        window.console.log(movies[key]);
    }
}

//least favourite movies
movies = [movieArray[2], movieArray[3], movieArray[1], movieArray[0], movieArray[4], movieArray[4], movieArray[4]];

var leastFavMovies = ["Amar" , "Akbar" , "Anthony"];
window.console.log("Movies I like:\n\n");
for (let index = 0; index < movies.length; index++) {
    window.console.log(movies[index]+"\n");
}
window.console.log("Movies I regret watching:\n\n");
for (let index = 0; index < leastFavMovies.length; index++) {
    window.console.log(leastFavMovies[index]+"\n");
}

//concatenated and reverse sorted movies
window.console.log("Reverse sorted movies :\n");
movies = [movieArray[2], movieArray[3], movieArray[1], movieArray[0], movieArray[4], movieArray[4], movieArray[4]];
var leastFavMovies = ["Amar" , "Akbar" , "Anthony"];
movies = movies.concat(leastFavMovies).sort().reverse();
for (let index = 0; index < movies.length; index++) {
    window.console.log(movies[index]+"\n");
}

//last item of the reverse sorted array
window.console.log("Last item of array:\n");
movies = [movieArray[2], movieArray[3], movieArray[1], movieArray[0], movieArray[4], movieArray[4], movieArray[4]];
var leastFavMovies = ["Amar" , "Akbar" , "Anthony"];
movies = movies.concat(leastFavMovies).sort().reverse();
window.console.log(movies.slice(movies.length-1)[0]);




