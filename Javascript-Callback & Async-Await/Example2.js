// // Async-Await :
 
// function api(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);            
//         },2000);
//     });
// }

// async function getWeatherData() {
//     await api();
//     await api();
// }

// Using Async-Await
function getData(dataId, getNextData) {
    return new Promise((resolve, rejcet) => {
        setTimeout(() => {
            console.log("data", dataId);
        }, 2000);
    });
}

async function getAllData(){
    console.log("getting data1.......");
    await getData(1);
    console.log("getting data1.......");
    await getData(2);
    console.log("getting data1.......");
    await getData(3);
    console.log("getting data1.......");
    await getData(4);
    console.log("getting data1.......");
    await getData(5);
    console.log("getting data1.......");
}