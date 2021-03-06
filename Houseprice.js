/**
 *   @author Sean Stock (sstock6829@gmail.com)
 *   @version 0.0.1
 *   @summary Project 1 (Calculate price of a house) || created: 09.22.2017
 *   @todo Calculate the price of a house based on the nubmer of bedrooms, bathrooms, and cars that will fit in the garage
 */

"use strict";
const PROMPT = require('readline-sync');

let lotNumber, bedrooms, bathrooms, cars;
const BASE_PRICE = 50000;

/**
 * @method
 * @desc The main dispatch method
*/
function main() {
    setLotNumber();
    setBedrooms();
    setBathrooms();
    setCars();
    setPrice();
}

main();

/**
 * @method
 * @desc Mutates the lotNumber variable
 */
function setLotNumber() {
    lotNumber = PROMPT.question(`\nWhat is the house's lot number?: `)
}

/**
 * @method
 * @desc Mutates the bedrooms variable
 */
function setBedrooms() {
    bedrooms = PROMPT.question(`\nHow many bedrooms does the house have?: `)
}

/**
 * @method
 * @desc Mutates the bathrooms variable
 */
function setBathrooms() {
    bathrooms = PROMPT.question(`\nHow many bathrooms does the house have?: `)
}

/**
 * @method
 * @desc Mutates the cars variable
 */
function setCars() {
    cars = PROMPT.question(`\nHow many cars fit in the garage?: `)
}

/**
 * @method
 * @desc Calculates the total cost of the house based on values of bedrooms, bathrooms, and cars.
 */
function setPrice() {
    let costBedrooms = 17000 * bedrooms;
    let costBathrooms = 12500 * bathrooms;
    let costCars = 6000 * cars;
    let totalPrice = BASE_PRICE + costBedrooms + costBathrooms + costCars;
    printResults(totalPrice);
}

/**
 * @method
 * @desc Clears screen and displays price of the house on a user defined lot number
 * @param totalPrice - So the value can be displayed
 */
function printResults(totalPrice) {
    process.stdout.write('\x1Bc');
    console.log("\nThe price of the house on lot number " + lotNumber + " is $" + totalPrice + " ");
}
