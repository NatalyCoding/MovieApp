const basicURL = "https://api.themoviedb.org/3/",
    api_key = "?api_key=5d8eb1a2618e1fb028d08e5849faf3bf",
    trending = "trending/all/week";


document.addEventListener("DOMContentLoaded", () => {
    let url = `${basicURL}${trending}${api_key}`;
    fetch(url)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            let moviesList = document.querySelector(".trending"),
                ul = document.createElement("ul");

            ul.classList.add("trend");
            moviesList.append(ul);

            data.results.forEach((element, index, array) => {
                let movieName = element.title != undefined ? element.title : element.name,
                    movieID = element.id;
                ul.insertAdjacentHTML("beforeend", `<li><a onclick="showMovie('${movieName}', '${movieID}');" title="Click for more info">${movieName}</a></li>`);
            });
        })
});