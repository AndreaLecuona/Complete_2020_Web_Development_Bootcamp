//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true, useUnifiedTopology: true});

const articlesSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("Article", articlesSchema);


app.route("/articles")
    .get(function (req, res) {
        Article.find({}, (err, foundArticles) => {
            if (!err) {
                res.send(foundArticles);
            } else {
                res.send(err);
            }
        });
    })
    .post(function (req, res) {

        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });

        newArticle.save((err) => {
            if (!err) {
                res.send("Successfully added a new article.");
            } else {
                res.send(err);
            }
        });
    })
    .delete(function (req, res) {
        Article.deleteMany({}, (err) => {
            if (!err) {
                res.send("Successfully deleted all articles.");
            } else {
                res.send(err);
            }
        });
    });




app.route("/articles/:articleTitle")
.get(function (req, res) {
    Article.findOne({title: req.params.articleTitle}, (err, foundArticle) => {
        if (!err) {
            res.send(foundArticle);
        } else {
            res.send("No matching articles for that title.");
        }
    });
})
.put(function (req, res) {
    Article.updateOne(
        {title: req.params.articleTitle},
        {title: req.body.title, content: req.body.content},
        {overwrite: true},
        (err) => {
            if(!err){
                res.send("Article updated.");
            } else {
                res.send(err);
            }
        }
    );
})
.patch(function (req, res){
    Article.updateOne(
        {title: req.params.articleTitle},
        {$set: req.body},
        (err) => {
            if(!err){
                res.send("Article's specific data updated.");
            } else {
                res.send(err);
            }
        }
    );
})
.delete(function (req, res){
    Article.deleteOne(
        {title: req.params.articleTitle},
        (err) => {
            if(!err){
                res.send("Specific article deleted");
            } else {
                res.send(err);
            }
        }
    );
});



//PORT
app.listen(3000, () => console.log("Server started con port 3000"));