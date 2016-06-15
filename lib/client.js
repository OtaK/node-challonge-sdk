'use strict';

const request = require('request-promise');

const CHALLONGE_ROOT_URL = 'https://api.challonge.com/v1';
class ChallongeClient {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    api(verb, endpoint, params) {
        const ucVerb = verb.toUpperCase();
        const req = {
            uri: `${CHALLONGE_ROOT_URL}${endpoint}.json`,
            method: ucVerb,
            json: true
        };

        const reqParams = params || {};
        reqParams.api_key = this.apiKey;
        req[ucVerb === 'GET' ? 'qs' : 'body'] = reqParams;

        return request(req);
    }

    get(endpoint, params) {
        return this.api('GET', endpoint, params);
    }

    post(endpoint, params) {
        return this.api('POST', endpoint, params);
    }

    put(endpoint, params) {
        return this.api('PUT', endpoint, params);
    }

    delete(endpoint, params) {
        return this.api('DELETE', endpoint, params);
    }

    patch(endpoint, params) {
        return this.api('PATCH', endpoint, params);
    }

    head(endpoint) {
        return this.api('HEAD', endpoint);
    }
}

module.exports = ChallongeClient;
