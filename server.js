const express = require("express");
const path = require("path");
const {
  syncAndSeed,
  models: { Tea, Topping, Milk },
} = require("./db/db");
const app = express();

//body parsar
app.use(express.json());

app.use("/dist", express.static(path.join(__dirname, "dist")));
app.use(express.static(__dirname + '/style.css'));


app.get("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

app.get("/api/teas", async (req, res, next) => {
  try {
    res.send(await Tea.findAll());
  } catch (e) {
    next(e);
  }
});

app.post("/api/teas", async (req, res, next) => {
  try {
    res.status(201).send(await Tea.create(req.body));
  } catch (e) {
    console.log(e);
  }
});

app.delete("/api/teas/:id", async (req, res, next) => {
  try {
    const tea = await Tea.findByPk(req.params.id);
    await tea.destroy();
    res.sendStatus(204);
  } catch (e) {
    console.log(e);
  }
});

app.get("/api/toppings", async (req, res, next) => {
  try {
    res.send(await Topping.findAll());
  } catch (e) {
    next(e);
  }
});

app.post("/api/toppings", async (req, res, next) => {
  try {
    res.status(201).send(await Topping.create(req.body));
  } catch (e) {
    next(e);
  }
});

app.delete("/api/toppings/:id", async (req, res, next) => {
  try {
    const topping = await Topping.findByPk(req.params.id);
    await topping.destroy();
    res.sendStatus(204);
  } catch (e) {
    console.log(e);
  }
});

app.get("/api/milks", async (req, res, next) => {
  try {
    res.send(await Milk.findAll());
  } catch (e) {
    next(e);
  }
});

app.post("/api/milks", async (req, res, next) => {
  try {
    res.status(201).send(await Milk.create(req.body));
  } catch (e) {
    next(e);
  }
});

app.delete("/api/milks/:id", async (req, res, next) => {
  try {
    const milk = await Milk.findByPk(req.params.id);
    await milk.destroy();
    res.sendStatus(204);
  } catch (e) {
    console.log(e);
  }
});


const init = async () => {
  try {
    await syncAndSeed();
  } catch (e) {
    next(e);
  }
};

init();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
