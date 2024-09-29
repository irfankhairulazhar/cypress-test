const pdf = require('pdf-parse');

function parsePdf(pdfBuffer) {
  return pdf(pdfBuffer).then((data) => {
    return data.text;
  });
}

module.exports = {
  parsePdf,
};
