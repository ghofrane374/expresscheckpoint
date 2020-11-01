const express = require("express");
const parser = require("body-parser");
const path = require("path")
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use("/", (req, res, next) => {
    const d = new Date()
    if ((d.getDay() < 1 || d.getDay() > 5) || (d.getHours() < 9 || d.getHours() > 17) || (d.getHours() == 17 && d.getMinutes() > 0)) {

        res.render("notavailaible")
    }
    else
        next();
})
app.get('/service', (req, res, next) => { res.render("service") })
app.get('/contact', (req, res, next) => { res.render("contact") })
app.use('/', (req, res, next) => { res.render("home") })




app.listen(3000, () => { console.log(`Example app listening on port 3000`) });

