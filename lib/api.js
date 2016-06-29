'use strict';

const ChallongeClient = require('./client');
const ChallongeTournament = require('./resources/tournaments');

class ChallongeApi {
    constructor(apiKey) {
        this.client = new ChallongeClient(apiKey);

        this._tournaments = new ChallongeTournament(this.client);
    }

    get tournaments() {
        return this._tournaments;
    }
}

module.exports = ChallongeApi;
