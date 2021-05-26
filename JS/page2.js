var movie1 = {
    Movie: "/IMAGES/movie1trailer.mp4",
    title:  "The Equaliser"
}
var movie2 = {
    Movie: "/IMAGES/movie2trailer.mp4",
    title: "Black Panther"
}
var movie3 = {
    Movie: "/IMAGES/movie3trailer.mp4",
    title: "Bad Boys for Life"
}
var movie4 = {
    Movie: "/IMAGES/movie4trailer.mp4",
    title: "Matrix"
}
var movie5 = {
    Movie: "/IMAGES/movie5trailer.mp4",
    title: "Mission : Impossible Fallout"
}
var movie6 = {
    Movie: "/IMAGES/movie6trailer.mp4",
    title: "Star Wars The last Jedi"
}
var movie7 = {
    Movie: "/IMAGES/movie7trailer.mp4",
    title: "The avengers"
}


var querystring = decodeURIComponent(window.location.search);
querystring = querystring.substring(1);

if(querystring == movie1.Movie){
    document.getElementById("vidId").src = movie1.Movie;

} else if(querystring == movie2.Movie){
    document.getElementById("vidId").src = movie2.Movie;
} else if(querystring == movie3.Movie){
    document.getElementById("vidId").src = movie3.Movie;
} else if(querystring == movie4.Movie){
    document.getElementById("vidId").src = movie4.Movie;
} else if(querystring == movie5.Movie){
    document.getElementById("vidId").src = movie5.Movie;
} else if(querystring == movie6.Movie){
    document.getElementById("vidId").src = movie6.Movie;
} else if(querystring == movie7.Movie){
    document.getElementById("vidId").src = movie7.Movie;
}