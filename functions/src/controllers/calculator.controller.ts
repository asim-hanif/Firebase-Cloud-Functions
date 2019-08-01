// tslint:disable-next-line: no-implicit-dependencies
import { Response, Request } from "express";

export class CalculatorController {
    static sum(request: Request, response: Response) {
        const { firstOperand, secondOperand } = request.query;
        response.send({ result: Number(firstOperand) + Number(secondOperand) });
    }

    static multiply(request: Request, response: Response) {
        const { firstOperand, secondOperand } = request.query;
        response.send({ result: Number(firstOperand) * Number(secondOperand) });
    }
}