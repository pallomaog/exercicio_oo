function Pokemon(name, type) {
    this.name = name;
    this.type = type;

    let _level = 1;

    this.getLevel = function () {
        return _level;
    }

    this.setLevel = function (newLevel) {
        if (typeof newLevel === 'number' && newLevel >= 1) {
            _level = newLevel;
        }
    }

    this.attack = function () {
        return 'This Pokémon is attacking!';
    }
}

function FirePokemon(name) {
    Pokemon.call(this, name, 'Fire');

    this.attack = function () {
        return 'Ember Attack!';
    }
}

function WaterPokemon(name) {
    Pokemon.call(this, name, 'Water');

    this.attack = function () {
        return 'Water Gun Attack!';
    }
}

function GrassPokemon(name) {
    Pokemon.call(this, name, 'Grass');

    this.attack = function () {
        return 'Vine Whip Attack!';
    }
}

const charmander = new FirePokemon('Charmander');
charmander.setLevel(10);
console.log(`Name: ${charmander.name}, Type: ${charmander.type}, Level: ${charmander.getLevel()}`);
console.log(charmander.attack());

const squirtle = new WaterPokemon('Squirtle');
squirtle.setLevel(8);
console.log(`Name: ${squirtle.name}, Type: ${squirtle.type}, Level: ${squirtle.getLevel()}`);
console.log(squirtle.attack());

const bulbasaur = new GrassPokemon('Bulbasaur');
bulbasaur.setLevel(6);
console.log(`Name: ${bulbasaur.name}, Type: ${bulbasaur.type}, Level: ${bulbasaur.getLevel()}`);
console.log(bulbasaur.attack());

