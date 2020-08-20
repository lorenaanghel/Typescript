"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = 8080;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.get("/sum/:number1/:number2", (request, response) => {
    let number1 = parseInt(request.params.number1);
    let number2 = parseInt(request.params.number2);
    let result = number1 + number2;
    response.send(number1 + " + " + number2 + " = " + result);
});
app.get("/sub/:number1/:number2", (request, response) => {
    let number1 = parseInt(request.params.number1);
    let number2 = parseInt(request.params.number2);
    let result = number1 - number2;
    response.send(number1 + " - " + number2 + " = " + result);
});
app.get("/mul/:number1/:number2", (request, response) => {
    let number1 = parseInt(request.params.number1);
    let number2 = parseInt(request.params.number2);
    let result = number1 * number2;
    response.send(number1 + " * " + number2 + " = " + result);
});
app.get("/div/:number1/:number2", (request, response) => {
    let number1 = parseInt(request.params.number1);
    let number2 = parseInt(request.params.number2);
    let result = number1 / number2;
    response.send(number1 + " / " + number2 + " = " + result);
});
app.post("/exponential", (request, response) => {
    let numbers = {
        base: request.body.base ? request.body.base : "N/A",
        exp: request.body.exp ? request.body.exp : "N/A",
    };
    let result = Math.pow(numbers.base, numbers.exp);
    response.json(numbers.base + " ^ " + numbers.exp + " = " + result);
});
app.post("/log", (request, response) => {
    let number = request.body.number ? request.body.number : "N/A";
    let result = Math.log(number);
    response.json(`log(${number}) = ${result}`);
});
app.post("/sqrt", (request, response) => {
    let number = request.body.number ? request.body.number : "N/A";
    let result = Math.sqrt(number);
    response.json("sqrt(" + number + ") = " + result);
});
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map