const url="https://www.omdbapi.com/?i=tt3896198&apikey=771dcfa1";
const key="771dcfa1"
let moviename=document.getElementById('movie-name');
let searchbtn=document.getElementById('search-btn');
let result=document.getElementById('result');


let getMovie = () =>{

    let Movie_name=moviename.value;

    let url=`https://www.omdbapi.com/?t=${Movie_name}&apikey=${key}`;

    if(Movie_name.length <= 0){
        result.innerHTML = `<h3 class="msg> Please Enter Movie Name <h/3>`;
    }
    else{

        fetch(url)
        .then((response)=>(response.json()))
        .then((data)=>{
                console.log(data);

                if(data.Response=="True"){
                    result.innerHTML=`
                    <div class="info">
                    <img src="${data.Poster}" class="poster">
                </div>
                <div class="matter">
                <h2>${data.Title}</h2>
                <div class="rating">
                    <img src="star-icon.svg" >
                    <h4>${data.imdbRating}</h4>
                </div>
                <div class="details">
                    <span>${data.Rated}</span>
                    <span>${data.Year}</span>
                    <span>${data.Runtime}</span>
                </div>
                <div class="genre">
                    <div> ${data.Genre.split(",").join("<div></div>")}
                     </div>           
                </div>
                </div>
                <h3>Plot :</h3>
                <p>${data.Plot}</p>
                <h3>Cast: </h3>
                <p>${data.Actors}</p>`;

                }

                else{
                    result.innerHTML=`<h3 class="msg">${data.error}</h3>`;
                }

        })

        .catch(()=>{
            result.innerHTML=`<h3 class="msg"> Error occured </h3>`;
        })
}

};

searchbtn.addEventListener("click",getMovie);
// window.addEventListener("load",getMovie);
