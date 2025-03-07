/*
  Arquitectura Cliente servidor
  Taller patrones de diseño  - Ejercicio 1
  Jefferson David Arteaga
*/

import * as readline from "readline";

interface SortingStrategy {
    sort(list: number[], order: "asc" | "desc"): number[];
}

class BubbleSort implements SortingStrategy {
    sort(list: number[], order: "asc" | "desc"): number[] {
        let n = list.length;
        let sortedList = [...list];

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if ((order === "asc" && sortedList[j] > sortedList[j + 1]) || 
                    (order === "desc" && sortedList[j] < sortedList[j + 1])) {
                    [sortedList[j], sortedList[j + 1]] = [sortedList[j + 1], sortedList[j]];
                }
            }
        }
        return sortedList;
    }
}

class QuickSort implements SortingStrategy {
    sort(list: number[], order: "asc" | "desc"): number[] {
        if (list.length <= 1) return list;

        let pivot = list[Math.floor(list.length / 2)];
        let left = list.filter(x => (order === "asc" ? x < pivot : x > pivot));
        let middle = list.filter(x => x === pivot);
        let right = list.filter(x => (order === "asc" ? x > pivot : x < pivot));

        return [...this.sort(left, order), ...middle, ...this.sort(right, order)];
    }
}

class InsertionSort implements SortingStrategy {
    sort(list: number[], order: "asc" | "desc"): number[] {
        let sortedList = [...list];

        for (let i = 1; i < sortedList.length; i++) {
            let key = sortedList[i];
            let j = i - 1;
            while (j >= 0 && ((order === "asc" && sortedList[j] > key) || 
                              (order === "desc" && sortedList[j] < key))) {
                sortedList[j + 1] = sortedList[j];
                j--;
            }
            sortedList[j + 1] = key;
        }
        return sortedList;
    }
}

class SortingContext {
    private strategy: SortingStrategy;

    constructor(strategy: SortingStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: SortingStrategy) {
        this.strategy = strategy;
    }

    sort(list: number[], order: "asc" | "desc"): number[] {
        return this.strategy.sort(list, order);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question: string): Promise<string> {
    return new Promise(resolve => {
        rl.question(question, answer => resolve(answer));
    });
}

async function main() {
    const list: number[] = [34, 7, 23, 32, 5, 62];

    console.log("Select sorting algorithm:");
    console.log("1. Bubble Sort");
    console.log("2. QuickSort");
    console.log("3. Insertion Sort");

    let option = parseInt(await ask("Enter your choice: "));
    
    console.log("Select sorting order:");
    console.log("asc -> Ascending");
    console.log("desc -> Descending");

    let order = await ask("Enter order: ") as "asc" | "desc";

    let strategy: SortingStrategy;

    switch (option) {
        case 1:
            strategy = new BubbleSort();
            break;
        case 2:
            strategy = new QuickSort();
            break;
        case 3:
            strategy = new InsertionSort();
            break;
        default:
            console.error("Invalid option");
            rl.close();
            return;
    }

    const context = new SortingContext(strategy);
    const result = context.sort(list, order);

    console.log("Sorted list:", result);
    rl.close();
}

main();
