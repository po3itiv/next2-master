export default function search (array,enter,setNewArray){
    let oleg = JSON.stringify("./public/animals.json", );
    console.log(JSON.parse(oleg));

    let searchElements = [];


    

    if (searchByName(array, enter).length != 0) {
        searchElements = searchByName(array, enter);
    } else if (searchByAge(array, enter).length != 0) {
        searchElements = searchByAge(array, enter);
    } else if (searchByBreed(array, enter).length != 0) {
        searchElements = searchByBreed(array, enter);
    }


    if (Object.keys(searchElements).length !==0){
        setNewArray([...searchElements]);
    }else{
        setNewArray([]);
    }
}

function searchByName(array, enter){
    let oleg = JSON.stringify("./public/animals.json", );
    console.log(JSON.parse(oleg));

    const searchElements = array.filter(elem => (elem.content).toUpperCase().indexOf(enter.toUpperCase())!==-1);

    return searchElements;
}
function searchByAge(array, enter){
    let oleg = JSON.stringify("./public/animals.json", );
    console.log(JSON.parse(oleg));

    const searchElements = array.filter(elem => (elem.age).toUpperCase().indexOf(enter.toUpperCase())!==-1);
    return searchElements;
}
function searchByBreed(array, enter){
    let oleg = JSON.stringify("./public/animals.json", );
    console.log(JSON.parse(oleg));

    const searchElements = array.filter(elem => (elem.header).toUpperCase().indexOf(enter.toUpperCase())!==-1);
    return searchElements;
}