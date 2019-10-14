/*jslint browser */
/*global window */

//Five favourite movies
window.console.log("Step 1\n\n");
var movieArray = ["YJHD", "KKHH", "K3G", "THOR", "SIMBA"];
window.console.log(movieArray[1]);

window.console.log("Step 2\n\n");
//movies using constructor method
var movies = new Array(5);
var i = 4;
movieArray.forEach(function (element) {
    "use strict";
    movies[i] = element;
    i -= 1;
});
window.console.log(movies[0]);

window.console.log("Step 3\n\n");
//adding element to 3rd position
i = 4;
movieArray.forEach(function (element) {
    "use strict";
    movies[i] = element;
    i -= 1;
});
movies.splice(2,0,"New Movie");
window.console.log(movies.length);

window.console.log("Step 4\n\n");
//array using literal notation
movies = [movieArray[2], movieArray[3], movieArray[1], movieArray[0], movieArray[4]];
window.console.log(movies);

window.console.log("Step 5\n\n");
//array using literal notation and adding movies to make the array of length 7 --> for loop
movies = [movieArray[2], movieArray[3], movieArray[1], movieArray[0], movieArray[4], movieArray[4], movieArray[4]];

for (let index = 0; index < movies.length; index++) {
    window.console.log(movies[index]);
}

window.console.log("Step 6\n\n");
//array using literal notation and adding movies to make the array of length 7 --> for in loop
movies = [movieArray[2], movieArray[3], movieArray[1], movieArray[0], movieArray[4], movieArray[4], movieArray[4]];

for (const key in movies) {
    if (movies.hasOwnProperty(key)) {
        window.console.log(movies[key]);
    }
}
window.console.log("Step 7\n\n");
//array using literal notation and adding movies to make the array of length 7 --> sorted view
movies = [movieArray[2], movieArray[3], movieArray[1], movieArray[0], movieArray[4], movieArray[4], movieArray[4]];

for (const key in movies.sort()) {
    if (movies.hasOwnProperty(key)) {
        window.console.log(movies[key]);
    }
}

window.console.log("Step 8\n\n");
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

window.console.log("Step 9\n\n");
//concatenated and reverse sorted movies
window.console.log("Reverse sorted movies :\n");
movies = [movieArray[2], movieArray[3], movieArray[1], movieArray[0], movieArray[4], movieArray[4], movieArray[4]];
var leastFavMovies = ["Amar" , "Akbar" , "Anthony"];
movies = movies.concat(leastFavMovies).sort().reverse();
for (let index = 0; index < movies.length; index++) {
    window.console.log(movies[index]+"\n");
}

window.console.log("Step 10\n\n");
//last item of the reverse sorted array
window.console.log("Last item of array:\n");
movies = [movieArray[2], movieArray[3], movieArray[1], movieArray[0], movieArray[4], movieArray[4], movieArray[4]];
var leastFavMovies = ["Amar" , "Akbar" , "Anthony"];
movies = movies.concat(leastFavMovies).sort().reverse();
window.console.log(movies.slice(movies.length-1)[0]);




