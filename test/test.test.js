const assert = require('assert')

describe('Worker Test', function() {

    it('returns a body that says The Sum is 4', async function () {
        let url = new URL('https://worker.example.com')
        let req = new Request(url)
        let res = await handleRequest(req)
        let body = await res.text()
        assert.equal(body, 'The Sum is 4!')
    })

    it('does addition properly', async function() {
        let res = await addition(1, 1)
        assert.equal(res, 2)
    })

})