import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";

const app = express();
const port = 3000;

app.use(morgan("combined"));


app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './src/resourse/views');


app.get("/", (req, res) => {
    res.render('home')
})



app.listen(port, () => {
    console.log(`Start app at ${port}`);
})