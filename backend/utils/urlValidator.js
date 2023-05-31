const validateUrl = (url) => {
  const regex = /https?:\/\/(www)?[a-z0-9\-._~:/?#[\]@!$&'()*+,;=]*/i;
  if (regex.test(url)) {
    return url;
  }
  throw new Error('Передан некорректный url');
};

module.exports = { validateUrl };
