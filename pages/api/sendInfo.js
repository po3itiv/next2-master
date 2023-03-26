export default (req, res) => {
    const body = JSON.parse(req.body);
    const fs = require('fs');
let rawdata = fs.readFileSync('././public/animals.json'); 
let parseddata= JSON.parse(rawdata); // парсим и получаем JS объект из строки
// Здесь совершаем операции с объектом JS


parseddata.push({
"header":body.name,
"age": body.age,
'content': body.breed,
'img': jopa(),
});
// Превращаем обратно в строку
let data = JSON.stringify(parseddata);
// Пишем в файл
fs.writeFileSync('././public/animals.json', data);
    console.log(body);
    res.status(200).json({ status: 'OK' });
    };
    
        class Jopa {
            static count = 0;
            static strName = ['cat.png','dog.jpg','mouse.jpeg','cow.jpg','hom.jpg','ara.jpg'];
            }
            
            function jopa() {
            if (Jopa.count < Jopa.strName.length) {
            let temp = Jopa.strName[Jopa.count];
            Jopa.count++;
            console.log(temp);
            return temp;
            } else {
            Jopa.count = 0;
            return Jopa.strName[Jopa.count];
            }
            }