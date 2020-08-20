const mongoose = require("mongoose");
try {
  mongoose.connect(`mongodb+srv://joeljose:joelpare168@cluster0-c2snh.mongodb.net/rice_and_grills?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.set("useFindAndModify", false);
  console.log("Database running");
} catch (e) {
  console.log(e);
}
