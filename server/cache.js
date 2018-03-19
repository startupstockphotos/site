const { Transform } = require('stream')
const cache = require('memory-cache')

/**
 * @see https://zeit.co/blog/streaming-server-rendering-at-spectrum
 */
module.exports = {
  cache,
  createCache (path, maxAge) {
    const chunks = []

    return new Transform({
      transform (data, enc, cb) {
        chunks.push(data)
        cb(null, data)
      },
      flush (cb) {
        cache.put(path, Buffer.concat(chunks), maxAge)
        cb()
      }
    })
  }
}
