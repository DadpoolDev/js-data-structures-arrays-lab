// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

const copyOfDrivers = [...drivers]

function destructivelyAppendDriver(name) {
    drivers.push("Ralph");
}

function destructivelyPrependDriver(name){
    drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(name) {
    drivers.pop("Ralph");
}

function destructivelyRemoveFirstDriver(name) {
    drivers.shift("Bob");
}

function appendDriver(name) {
    return [...drivers, name];
}

function prependDriver(name) {
    return [name, ...drivers];
}

function removeLastDriver(){
    return drivers.slice(0,2);    
}

function removeFirstDriver() {
    return drivers.slice(1)
}


