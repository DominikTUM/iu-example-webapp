"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.json());
app.use(cors_1.default());
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/random-number', (req, res) => {
    res.send(JSON.stringify({ number: Math.random() }));
});
app.post('/feed-me', (req, res) => {
    console.log(JSON.stringify(req.body));
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map