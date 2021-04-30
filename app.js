const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const books = [];

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));


app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res, next) => {
    res.render('index', {pageTitle: 'Add Book'});
});

app.get('/books', (req, res, next) => {
    res.render('books', {pageTitle: 'Book', books: books});
});

app.post('/add-book', (req, res, next) => {
    books.push({name: req.body.book_title});
    books.push({author: req.body.book_author});
    books.push({summary: req.body.book_summary});
    res.redirect('/books');
});

app.listen(5000);