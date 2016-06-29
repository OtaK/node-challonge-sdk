'use strict';

const ChallongeApiResource = require('../base_resource');

const ChallongeAttachments = require('./attachments');

class ChallongeMatches extends ChallongeApiResource {
    constructor(client) {
        super(client);

        this._attachments = new ChallongeAttachments(client);
    }

    get attachments() {
        return this._attachments;
    }

    index(tournamentId, params) {
        return this.client.get(`/tournaments/${tournamentId}/matches`, params);
    }

    show(tournamentId, matchId, params) {
        return this.client.get(`/tournaments/${tournamentId}/matches/${matchId}`, params);
    }

    update(tournamentId, matchId, match) {
        return this.client.put(`/tournaments/${tournamentId}/matches/${matchId}`, { match });
    }
}

module.exports = ChallongeMatches;
