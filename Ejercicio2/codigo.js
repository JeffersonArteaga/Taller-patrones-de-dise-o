"use strict";
/*
  Arquitectura Cliente servidor
  Taller patrones de diseño  - Ejercicio 2
  Jefferson David Arteaga
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// **Estrategias concretas** (Implementan diferentes fórmulas según la tarjeta)
var VisaStrategy = /** @class */ (function () {
    function VisaStrategy() {
    }
    VisaStrategy.prototype.calculate = function (amount, installments) {
        var interestRate = 0.05; // 5% de interés por cuota
        return amount * (1 + interestRate * installments);
    };
    return VisaStrategy;
}());
var MasterCardStrategy = /** @class */ (function () {
    function MasterCardStrategy() {
    }
    MasterCardStrategy.prototype.calculate = function (amount, installments) {
        var interestRate = 0.04; // 4% de interés por cuota
        return amount * (1 + interestRate * installments);
    };
    return MasterCardStrategy;
}());
var AmexStrategy = /** @class */ (function () {
    function AmexStrategy() {
    }
    AmexStrategy.prototype.calculate = function (amount, installments) {
        var interestRate = 0.06; // 6% de interés por cuota
        return amount * (1 + interestRate * installments);
    };
    return AmexStrategy;
}());
// **Factory Method** para seleccionar la estrategia según la tarjeta
var CreditCardFactory = /** @class */ (function () {
    function CreditCardFactory() {
    }
    CreditCardFactory.createStrategy = function (cardBrand) {
        switch (cardBrand.toLowerCase()) {
            case "visa":
                return new VisaStrategy();
            case "mastercard":
                return new MasterCardStrategy();
            case "amex":
                return new AmexStrategy();
            default:
                throw new Error("Tarjeta no soportada. Por favor, elija Visa, MasterCard o Amex.");
        }
    };
    return CreditCardFactory;
}());
// **Clase de contexto** (Utiliza la estrategia seleccionada)
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor(strategy) {
        this.strategy = strategy;
    }
    PaymentProcessor.prototype.processPayment = function (amount, installments) {
        var finalPrice = this.strategy.calculate(amount, installments);
        console.log("\n=== Resumen de la compra ===");
        console.log("Precio al contado: $".concat(amount.toFixed(2)));
        console.log("Precio total con intereses: $".concat(finalPrice.toFixed(2)));
        console.log("Monto por cuota (".concat(installments, " cuotas): $").concat((finalPrice / installments).toFixed(2), "\n"));
    };
    return PaymentProcessor;
}());
// **Configuración de entrada de usuario con readline**
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// **Función para obtener datos del usuario**
function askQuestion(question) {
    return new Promise(function (resolve) {
        rl.question(question, function (answer) { return resolve(answer); });
    });
}
// **Función principal para ejecutar la aplicación**
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var amountInput, amount, installmentsInput, installments, cardBrand, strategy, processor, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("\n=== Bienvenido al sistema de pago en cuotas ===");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, askQuestion("Ingrese el precio del producto: ")];
                case 2:
                    amountInput = _a.sent();
                    amount = parseFloat(amountInput);
                    if (isNaN(amount) || amount <= 0)
                        throw new Error("El monto debe ser un número válido mayor a 0.");
                    return [4 /*yield*/, askQuestion("Ingrese la cantidad de cuotas (ej: 3, 6, 12): ")];
                case 3:
                    installmentsInput = _a.sent();
                    installments = parseInt(installmentsInput);
                    if (isNaN(installments) || installments <= 0)
                        throw new Error("Las cuotas deben ser un número entero positivo.");
                    return [4 /*yield*/, askQuestion("Ingrese su tarjeta de crédito (Visa, MasterCard, Amex): ")];
                case 4:
                    cardBrand = _a.sent();
                    strategy = CreditCardFactory.createStrategy(cardBrand);
                    processor = new PaymentProcessor(strategy);
                    processor.processPayment(amount, installments);
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error("Error: ".concat(error_1.message));
                    return [3 /*break*/, 6];
                case 6:
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
// **Ejecutar la aplicación**
main();
