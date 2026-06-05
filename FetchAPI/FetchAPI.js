// API : Application Programming Interface - 
// Fetch API : provides an interface for fetching (sending/receiving) resources. 
// It uses response and request objects.
// The fetch() method is used to fetch s resource (data).

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


const getFactS = async () => {
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response);        // JSON format
    let data = await response.json();
    factPara.innerText = data[2].text;
};

// function getFacts() {
//     fetch(URL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) =>  {
//             console.log(data);
//             factPara.innerText = data[2].text;
//         });
// }

btn.addEventListener("click", getFact);

// Terms :

// AJAX : it's a Asynchronous JS and
// JSON : Javascript obje t notation
// Json() method : returns a second pri


//  Requests and Response : 
                    