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
'img': newww(),
});
// Превращаем обратно в строку
let data = JSON.stringify(parseddata);
// Пишем в файл
fs.writeFileSync('././public/animals.json', data);
    console.log(body);
    res.status(200).json({ status: 'OK' });
    };
    
        class New {
            static count = 0;
            static strName = ['cat.png','dog.jpg','mouse.jpeg','cow.jpg','hom.jpg','ara.jpg'];
            }
            
            function newww() {
            if (New.count < New.strName.length) {
            let temp = New.strName[New.count];
            New.count++;
            console.log(temp);
            return temp;
            } else {
            New.count = 0;
            return New.strName[New.count];
            }
            }