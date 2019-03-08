const chainer = functions => value => functions.reduce((acc, current) => current(acc), value);

module.exports = chainer;
