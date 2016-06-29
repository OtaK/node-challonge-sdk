'use strict';

const ChallongeApiResource = require('../base_resource');

class ChallongeAttachments extends ChallongeApiResource {
    index(tournamentId, matchId) {
        return this.client.get(`/tournaments/${tournamentId}/matches/${matchId}/attachments`);
    }

    create(tournamentId, matchId, attachment) {
        return this.client.post(`/tournaments/${tournamentId}/matches/${matchId}/attachments`, {
            match_attachment: attachment
        });
    }

    show(tournamentId, matchId, attachmentId) {
        return this.client.get(`/tournaments/${tournamentId}/matches/${matchId}/attachments/${attachmentId}`);
    }

    update(tournamentId, matchId, attachment) {
        return this.client.put(`/tournaments/${tournamentId}/matches/${matchId}/attachments/${attachmentId}`, {
            match_attachment: attachment
        });
    }

    destroy(tournamentId, matchId, attachmentId) {
        return this.client.delete(`/tournaments/${tournamentId}/matches/${matchId}/attachments/${attachmentId}`);
    }
}

module.exports = ChallongeAttachments;
