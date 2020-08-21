"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const sumURL = "http://localhost:8080/sum/12/4";
const substrURL = "http://localhost:8080/substraction/256/12";
const multiplyURL = "http://localhost:8080/multiply/5/3";
const divURL = "http://localhost:8080/div/562/14";
node_fetch_1.default(sumURL)
    .then((body) => body.text())
    .then((json) => console.log(json));
node_fetch_1.default(substrURL)
    .then((body) => body.text())
    .then((json) => console.log(json));
node_fetch_1.default(multiplyURL)
    .then((body) => body.text())
    .then((json) => console.log(json));
node_fetch_1.default(divURL)
    .then((body) => body.text())
    .then((json) => console.log(json));
//# sourceMappingURL=index.js.map