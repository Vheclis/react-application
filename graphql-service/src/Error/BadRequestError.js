/**
 * @typedef {Error} BadRequestError
 */

module.exports = class BadRequestError extends Error {
    /**
     * @param {String} resource
     * @param {String} errorLocation
     */
    constructor(message, errorLocation) {
      super(message);
      this.errorLocation = errorLocation;
      this.code = 400;
      Error.captureStackTrace(this, this.constructor);
    }
  };
  