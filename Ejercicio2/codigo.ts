/*
  Arquitectura Cliente servidor
  Taller patrones de diseño  - Ejercicio 2
  Jefferson David Arteaga
*/

import * as readline from "readline";

// **Interfaz Strategy** (Define la estructura para el cálculo de intereses)
interface InterestCalculation {
    calculate(amount: number, installments: number): number;
}

// **Estrategias concretas** (Implementan diferentes fórmulas según la tarjeta)
class VisaStrategy implements InterestCalculation {
    calculate(amount: number, installments: number): number {
        const interestRate = 0.05; // 5% de interés por cuota
        return amount * (1 + interestRate * installments);
    }
}

class MasterCardStrategy implements InterestCalculation {
    calculate(amount: number, installments: number): number {
        const interestRate = 0.04; // 4% de interés por cuota
        return amount * (1 + interestRate * installments);
    }
}

class AmexStrategy implements InterestCalculation {
    calculate(amount: number, installments: number): number {
        const interestRate = 0.06; // 6% de interés por cuota
        return amount * (1 + interestRate * installments);
    }
}

// **Factory Method** para seleccionar la estrategia según la tarjeta
class CreditCardFactory {
    static createStrategy(cardBrand: string): InterestCalculation {
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
    }
}

// **Clase de contexto** (Utiliza la estrategia seleccionada)
class PaymentProcessor {
    private strategy: InterestCalculation;

    constructor(strategy: InterestCalculation) {
        this.strategy = strategy;
    }

    processPayment(amount: number, installments: number): void {
        const finalPrice = this.strategy.calculate(amount, installments);
        console.log("\n=== Resumen de la compra ===");
        console.log(`Precio al contado: $${amount.toFixed(2)}`);
        console.log(`Precio total con intereses: $${finalPrice.toFixed(2)}`);
        console.log(`Monto por cuota (${installments} cuotas): $${(finalPrice / installments).toFixed(2)}\n`);
    }
}

// **Configuración de entrada de usuario con readline**
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// **Función para obtener datos del usuario**
function askQuestion(question: string): Promise<string> {
    return new Promise(resolve => {
        rl.question(question, (answer: string) => resolve(answer));
    });
}

// **Función principal para ejecutar la aplicación**
async function main() {
    console.log("\n=== Bienvenido al sistema de pago en cuotas ===");

    try {
        const amountInput = await askQuestion("Ingrese el precio del producto: ");
        const amount = parseFloat(amountInput);
        if (isNaN(amount) || amount <= 0) throw new Error("El monto debe ser un número válido mayor a 0.");

        const installmentsInput = await askQuestion("Ingrese la cantidad de cuotas (ej: 3, 6, 12): ");
        const installments = parseInt(installmentsInput);
        if (isNaN(installments) || installments <= 0) throw new Error("Las cuotas deben ser un número entero positivo.");

        const cardBrand = await askQuestion("Ingrese su tarjeta de crédito (Visa, MasterCard, Amex): ");
        const strategy = CreditCardFactory.createStrategy(cardBrand);

        const processor = new PaymentProcessor(strategy);
        processor.processPayment(amount, installments);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }

    rl.close();
}

// **Ejecutar la aplicación**
main();
