const Card = require('../models/card');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');
const InternalServerError = require('../errors/InternalServerError');
const BadRequestError = require('../errors/BadRequestError');

module.exports.createCard = (req, res, next) => {
  const owner = req.user._id;
  const { name, link } = req.body;

  Card.create({ name, link, owner })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные при создании карточки'));
      } else {
        next(err);
      }
    });
};

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(() => {
      next(new InternalServerError('На сервере произошла ошибка'));
    });
};

module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('По переданному id отсутствуют данные');
      } else if (req.user._id !== card.owner._id.toString()) {
        next(new ForbiddenError('Недостаточно прав на удаление карточки'));
      } else {
        card.remove()
          .then(() => res.send({ data: card }))
          .catch(next);
      }
    })
    .catch(next);
};

module.exports.putLike = (req, res, next) => {
  const { cardId } = req.params;
  const { _id } = req.user;

  Card.findByIdAndUpdate(cardId, { $addToSet: { likes: _id } }, { new: true })
    .orFail(() => { throw new NotFoundError('По переданному id отсутствуют данные'); })
    .then((card) => res.send(card))
    .catch(next);
};

module.exports.removeLike = (req, res, next) => {
  const { cardId } = req.params;
  const { _id } = req.user;

  Card.findByIdAndUpdate(cardId, { $pull: { likes: _id } }, { new: true })
    .orFail(() => { throw new NotFoundError('По переданному id отсутствуют данные'); })
    .then((card) => res.send(card))
    .catch(next);
};
