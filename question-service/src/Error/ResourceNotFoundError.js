/**
 * @typedef {Error} ResourceNotFoundError
 */

module.exports = class ResourceNotFoundError extends Error {
    /**
     * @param {String} message
     * @param {Object} additionalInfo
     */
    constructor(resource) {
      super(`The resource ${resource} could not be found`);
    
      Error.captureStackTrace(this, this.constructor);
    }
  };
  