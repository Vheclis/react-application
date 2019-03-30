/**
 * @typedef {Error} CommunicationError
 */

module.exports = class CommunicationError extends Error {
  /**
   * @param {String} message
   * @param {String} errorLocation
   */
  constructor(message, errorLocation) {
    super(message);

    this.errorLocation = errorLocation;
    this.code = 500;

    Error.captureStackTrace(this, this.constructor);
  }
};
