const sinon = require('sinon');
const Hashids = require('hashids');
const { expect } = require('chai');
const QuestionFixtures = require('../../fixtures/QuestionFixtures');

const IdRepositoryFactory = require('../../../src/Repository/IdRepository');
const CommunicationError = require('../../../src/Error/CommunicationError');


suite('IdRepository', () => {
    /** @var {IdRepository} */
    let idRepository;
    let idModelMock;
    let hashids;
    beforeEach(() => {
        hashids = new Hashids();
        idModelMock  = {
            findOneAndUpdate: sinon.stub(),
        };
        idRepository = IdRepositoryFactory(idModelMock);
    });

    afterEach(() => {
        sinon.restore();
    })

    suite('getId', () => {
        const {
            questionWithIdInteger,
            requestBodyWithoutId
        } = QuestionFixtures;
        test('if passing the id, overides sent id with new hashid', (done) => {
            const typeMock = 'question';
            const idDocMock = {
                lastId: 10,
            };
            const expectedId = hashids.encode(parseInt(idDocMock.lastId, 10))
            idModelMock.findOneAndUpdate
                .withArgs({ type: typeMock }, { $inc: { lastId: 1 } })
                .resolves(idDocMock);

            idRepository.getId(typeMock, questionWithIdInteger)
                .then((newId) => {
                    expect(newId).to.equal(expectedId);
                    done();
                });
        });
        test('if passing the id type and data without id, return new hashid as string', (done) => {
            const typeMock = 'question';
            const idDocMock = {
                lastId: 10,
            };
            const expectedId = hashids.encode(parseInt(idDocMock.lastId, 10))
            idModelMock.findOneAndUpdate
                .withArgs({ type: typeMock }, { $inc: { lastId: 1 } })
                .resolves(idDocMock);
            
            idRepository.getId(typeMock, requestBodyWithoutId)
                .then((newId) => {
                    expect(newId).to.equal(expectedId);
                    done();
                });
        });
        test('if some exception is thrown inside the function they fall into catch and'
            .concat(' throw a CommunicationError'), () => {
            const typeMock = 'question';
            const errorMock = new Error('Mama tells me im ok')
            idModelMock.findOneAndUpdate
                .throws(errorMock);
                

            idRepository.getId(typeMock, requestBodyWithoutId)
                .catch((error) => {
                    sinon.assert.calledOnce(idModelMock.findOneAndUpdate);
                    expect(error instanceof CommunicationError).to.equal(true);
                    expect(error.message).to.equal('Error trying to save id doc. Error: Mama tells me im ok');
                    done();
                });
            })
    });
});
