const request = require('promise-request');

const CHALLONGE_ROOT_URL = 'https://api.challonge.com/v1/';
class ChallongeClient {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.request = request.defaults({
            baseUrl: CHALLONGE_ROOT_URL
        });
    }

    call(verb, endpoint, params) {
        const ucVerb = verb.toUpperCase();
        const req = {
            uri: `${endpoint}.json`,
            method: ucVerb,
            json: true
        };

        const reqParams = params || {};
        reqParams.api_key = this.apiKey;
        req[ucVerb === 'GET' ? 'qs' : 'body'] = reqParams;

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
