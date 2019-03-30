/**
 * @typedef {Error} ResourceNotFoundError
 */

module.exports = class ResourceNotFoundError extends Error {
    /**
     * @param {String} resource
     * @param {String} errorLocation
     */
    constructor(resource, errorLocation) {
      super(`The resource ${resource} could not be found`);
      this.errorLocation = errorLocation;
      this.code = 404;
      Error.captureStackTrace(this, this.constructor);
    }
  };
  