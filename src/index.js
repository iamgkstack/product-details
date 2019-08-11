import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import keys from '../src/config/keys';
import routes from '../src/config/routes';



const app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const db = keys.mongoUri;

mongoose.connect(db, {
    useNewUrlParser: true
})
.then(() => console.log('database connected successfully'))
.catch((err) => console.log(`database connection err ${err}`));

app.get('/', (req, res) => {
    res.render('index');
})

app.use('/products', routes);
const port = process.env.PORT || 3000;
const IP = process.env.IP;
app.listen(port, IP, () => {
    console.log(`server on http://localhost:${port}`);
});