var mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    usecreateIndex: true,
  })
  .then(() => console.log("Bravo connecter a la base de données ykolabase"))
  .catch((err) => console.log("desoler ykola pas disponible", err));
