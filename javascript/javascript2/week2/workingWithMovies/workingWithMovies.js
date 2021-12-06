//-----------------The movies with a short titles------------------------
const shortMovies=(movies.filter(item=>item.title.length<5))
console.log("The movies with a short titles:",shortMovies)

//----------------long movie titles--------------------
const longMovies=(movies.filter(item=>item.title.length>10))
console.log("The movies with a long titles:",longMovies)

//----------------the number of movies made between 1980-1989
const moviesBetweenYears=movies.filter(item=>item.year>=1980 && item.year<=1989)
console.log("The number of movies made between 1980-1989",moviesBetweenYears)



//Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const newMoviesWithTag = movies.map((item=>{

    let moviesWithTag={};
    moviesWithTag.title=item.title;
    moviesWithTag.year=item.year;
    moviesWithTag.rating=item.rating;
    moviesWithTag.votes=item.votes;
    moviesWithTag.running_times=item.running_times;
    moviesWithTag.tag=item.tag;
    if(item.rating>=7)
    moviesWithTag.tag="Good";
    else if (item.rating >= 4 && item.rating < 7) 
        moviesWithTag.tag = "Average";
    else if (item.rating < 4) 
        moviesWithTag.tag = "Bad";   

    return moviesWithTag
   
}))

console.log('New array that has an extra key called tag',newMoviesWithTag)


//--------------------the movies rated higher than 6 ---------------------------

const moviesRatedHigher= movies.filter(item=>item.rating>6).map(item=>item.rating)
console.log('The movies rated higher than 6',moviesRatedHigher)

//--------------------Count the total number of movies---------------------------

const keywords = ["Surfor", "Alien", "Benjamin"];

let keywordsMovieTitle = movies.filter(movie => 
    keywords.some(keyword => movie.title.toUpperCase().includes(keyword.toUpperCase()))
);

console.log('Total number of movies containing any of following keywords:',keywordsMovieTitle.length,keywordsMovieTitle);

//--------------------------movies where a word in the title is duplicated------------------------

const wordDelimiter = /[\s:-;,]+/g; 
const newSplitArray = movies.filter(item=>{
    let titleArray=item.title.split(wordDelimiter)
    let uniqeTitle= new Set(titleArray)
    if (titleArray.length != uniqeTitle.size)
       return item.title
});

console.log('List of movies with duplicated title',newSplitArray);

//------------------------Calculate the average rating of all the movies-----------

const total=(movies.map(item=>item.rating)).reduce((a,b)=> {
    return a+b
 });

console.log('Calculate the average rating of all the movies :',total/movies.length)


//--------------------------- Count the total number of Good, Average and Bad movies -------------------

let countRatingMovies = newMoviesWithTag.reduce((result, movie) => {
    if (movie.tag == "Good") {
        result.goodMovies++;
    } else if (movie.tag == "Average") {
        result.averageMovies++;
    } else {
        result.badMovies++;
    }
    return result;
}, { goodMovies: 0, averageMovies: 0, badMovies: 0 });


console.log(countRatingMovies);


