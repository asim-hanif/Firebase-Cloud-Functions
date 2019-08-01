// tslint:disable-next-line: no-implicit-dependencies
import * as express from "express";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { CalculatorController } from "./controllers/calculator.controller";

admin.initializeApp(functions.config().firebase);

const app = express();
app.disable("x-powered-by");

app.get("/sum", CalculatorController.sum);
app.get("/multiply", CalculatorController.multiply);
// we can add more routes here.

// we are exposing one function that is api
exports.api = functions.https.onRequest(app);