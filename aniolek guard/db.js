const mongoose = require("mongoose");

const dark_guard = mongoose.Schema({
    banlı: Array,
    owner: Array,
    bot: Array
});

module.exports = mongoose.model("Shine Guard", dark_guard);
