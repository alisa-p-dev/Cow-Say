
const userInfo = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hello I'm ${userInfo.firstName} from campus ${userInfo.campus}`,
    e: "oO",
    T: "U "
}));