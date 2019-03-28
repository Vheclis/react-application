const Hashids = require('hashids');
const logger = require('../Utils/Logger');
const CommunicationError = require('../Error/CommunicationError');

const hashids = new Hashids();
/**
 * @typedef {Object} IdRepository
 * @property {function(type: String, data: Object): Promise<Number>} getId
 */

/**
 * @param {IdModel} idModel
 * @constructor
 */
function IdRepository(idModel) {
  return {
    /**
     * @param {String} type
     * @param {Object} data
     * @returns {Promise<String>}
     */
    async getId(type, data) {
      logger.trace('Entered IdRepository::getId', type);
      try {
        const idDoc = await idModel.findOneAndUpdate({ type }, { $inc: { lastId: 1 } });
        return hashids.encode(parseInt(idDoc.lastId, 10));
      } catch (error) {
        logger.error('IdRepository::getId error trying to save id doc.', error);
        throw new CommunicationError(`Error trying to save id doc. ${error}`);
      }
    },
  };
}

module.exports = IdRepository;
