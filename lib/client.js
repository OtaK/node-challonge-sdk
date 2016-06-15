'use strict';

const request = require('request-promise');

const CHALLONGE_ROOT_URL = 'https://api.challonge.com/v1/';
class ChallongeClient {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.request = request.defaults({
            baseUrl: this.CHALLONGE_ROOT_URL
        });
    }

    call(verb, endpoint, params) {
        verb = verb.toUpperCase();
        const req = {
            uri: `${endpoint}.json`,
            method: verb,
            json: true
        };

        const reqParams = params || {};
        reqParams.api_key = this.apiKey;
        req[verb === 'GET' ? 'qs' : 'body'] = reqParams;

        return this.request(req);
    }

    get(endpoint, params) {
        return this.call('GET', endpoint, params);
    }

    post(endpoint, params) {
        return this.call('POST', endpoint, params);
    }

    put(endpoint, params) {
        return this.call('PUT', endpoint, params);
    }

    delete(endpoint, params) {
        return this.call('DELETE', endpoint, params);
    }

    patch(endpoint, params) {
        return this.call('PATCH', endpoint, params);
    }

    head(endpoint) {
        return this.call('HEAD', endpoint);
    }
}

module.exports = ChallongeClient;
