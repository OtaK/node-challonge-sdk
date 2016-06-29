'use strict';

const ChallongeApiResource = require('../base_resource');

class ChallongeParticipants extends ChallongeApiResource {
    index(tournamentId) {
        return this.client.get(`/tournaments/${tournamentId}/participants`);
    }

    create(tournamentId, participant) {
        return this.client.post(`/tournaments/${tournamentId}/participants`, { participant });
    }

    bulkAdd(tournamentId, participantList) {
        return this.client.post(`/tournaments/${tournamentId}/participants/bulk_add`, { participant: participantList });
    }

    show(tournamentId, participantId, params) {
        return this.client.get(`/tournaments/${tournamentId}/participants/${participantId}`, params);
    }

    update(tournamentId, participantId, participant) {
        return this.client.put(`/tournaments/${tournamentId}/participants/${participantId}`, { participant });
    }

    checkIn(tournamentId, participantId) {
        return this.client.post(`/tournaments/${tournamentId}/participants/${participantId}/check_in`);
    }

    undoCheckIn(tournamentId, participantId) {
        return this.client.post(`/tournaments/${tournamentId}/participants/${participantId}/undo_check_in`);
    }

    destroy(tournamentId, participantId) {
        return this.client.delete(`/tournaments/${tournamentId}/participants/${participantId}`);
    }

    randomize(tournamentId) {
        return this.client.post(`/tournaments/${tournamentId}/participants/randomize`);
    }
}

module.exports = ChallongeParticipants;
