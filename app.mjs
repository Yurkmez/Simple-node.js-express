import express from 'express';
import morgan from 'morgan';
const app = express();
const PORT = 5000;

// const logger = (req, res, next) => {
//     console.log(req.method, req.path);
//     next();
// };

// app.use(logger);

// Вместо этой ф-ции можно воспользоваться ф-цией логгирования
// запросов из библиотеки npm
// ________ morgan (HTTP request logger middleware for node.js) ______________
// app.use(morgan('combined'));

app.use(morgan('tiny'));

// __________________________________________________________
// Middleware function
// app.use((req, res, next) => {
//     let data = '';
//     // Переменная "data" - зарезервированное название переменной
//     // Если определить, например, как "date", работать не будет!
//     // А вот "chunk" - можно обозначaть иначе (ch, ky, ...)
//     req.on('data', (chunk) => (data += chunk));

//     // req.on('end', () => console.log(JSON.parse(data)));
//     // Но можем ли мы, полученный объект использовать? Да.
//     req.on('end', () => {
//         const parseJson = JSON.parse(data);
//         req.body = parseJson;
//         next();
//     });
// });
// ______________________________________

// Но вместо выше представленной ф-ции можно воспользоваться
// методом express

app.use(express.json());

app.use((req, res) => {
    console.log(req.body);
    return res.send('This is express server');
});

app.listen(PORT, () => console.log(`Server is launched on port ${PORT}`));
