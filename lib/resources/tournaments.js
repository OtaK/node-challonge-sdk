'use strict';

const ChallongeApiResource = require('../base_resource');

const ChallongeParticipants = require('./participants');
const ChallongeMatches = require('./matches');

class ChallongeTournament extends ChallongeApiResource {
    constructor(client) {
        super(client);

        this._participants = new ChallongeParticipants(this.client);
        this._matches = new ChallongeMatches(this.client);
    }

    get participants() {
        return this._participants;
    }

    get matches() {
        return this._matches;
    }

    index(params) {
        return this.client.get('/tournaments', params);
    }

    create(tournament) {
        return this.client.post('/tournaments', { tournament });
    }

    show(id, params) {
        return this.client.get(`/tournaments/${id}`, params);
    }

    update(id, tournament) {
        return this.client.put(`/tournaments/${id}`, { tournament });
    }

    destroy(id) {
        return this.client.delete(`/tournaments/${id}`);
    }

    processCheckIns(id, params) {
        return this.client.post(`/tournaments/${id}/process_check_ins`, params);
    }

    abortCheckIn(id, params) {
        return this.client.post(`/tournaments/${id}/abort_check_in`, params);
    }

    start(id, params) {
        return this.client.post(`/tournaments/${id}/start`, params);
    }

    finalize(id, params) {
        return this.client.post(`/tournaments/${id}/finalize`, params);
    }

    reset(id, params) {
        return this.client.post(`/tournaments/${id}/reset`, params);
    }
}

module.exports = ChallongeTournament;
