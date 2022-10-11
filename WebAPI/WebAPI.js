fetch("https://rickandmortyapi.com/api/character")
    .then(function (res) {
        return res.json();
    })
    .then(function (resData) {
        const apiData = document.getElementById("api-data");

        for (let i = 0; i < resData.results.length; i++) {
            apiData.innerHTML +=
                "<div class='card-container'>" +
                "<div class='card-item-txt'>" +
                resData.results[i].name +
                "</div>" +
                "<img class='card-item' src='" +
                resData.results[i].image +
                "'>" +
                "</div>";
        }
    });

const htmlOverview = document.getElementById("overview");

let overview = [
    "rick sanchez",
    "morty smith",
    "summer smith",
    "beth smith",
    "jerry smith",
    "abadango cluster princess",
    "abradolf lincler",
    "abjudicator rick",
    "agency director",
    "alan rails",
    "albert einstein",
    "alexander",
    "alien googah",
    "alien morty",
    "alien rick",
    "amish cyborg",
    "annie",
    "antenna morty",
    "antenna rick",
    "ants in my eyes johnson",
];

showList();

function showList() {
    htmlOverview.innerHTML = "";

    for (let i = 0; i < overview.length; i++) {
        htmlOverview.innerHTML += "<li>" + overview[i] + "</li>";
    }
}

function addToList() {
    const input = document.getElementById("Listing").value;
    overview.push(input);
    console.log(input);
    showList();
}

function removeFromList() {
    const input = document.getElementById("Listing").value;
    for (let i = 0; i < overview.length; i++) {
        if (input === overview[i]) {
            overview.splice(i, 1);
        }
    }
    showList();
}
