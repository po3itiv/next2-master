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
        console.log(searchElements);
    
        setNewArray([...searchElements]);
    }
    
}

function searchByName(array, enter){
    let oleg = JSON.stringify("./public/animals.json", );
    console.log(JSON.parse(oleg));
    const searchElements = [];    
    for(let i=0;i<array.length;i++){
        if((array[i].content).toUpperCase().indexOf(enter.toUpperCase())!==-1){
        searchElements.push(array[i]);
        console.log(searchElements);
        }
        }
    return searchElements;
}
function searchByAge(array, enter){
    let oleg = JSON.stringify("./public/animals.json", );
    console.log(JSON.parse(oleg));
    const searchElements = [];    
    for(let i=0;i<array.length;i++){
        if((array[i].age).toUpperCase().indexOf(enter.toUpperCase())!==-1){
        searchElements.push(array[i]);
        }
        }
    return searchElements;
}
function searchByBreed(array, enter){
    let oleg = JSON.stringify("./public/animals.json", );
    console.log(JSON.parse(oleg));
    const searchElements = [];    
    for(let i=0;i<array.length;i++){
        if((array[i].header).toUpperCase().indexOf(enter.toUpperCase())!==-1){
        searchElements.push(array[i]);
        }
        }
    return searchElements;
}