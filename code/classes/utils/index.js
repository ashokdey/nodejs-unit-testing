const isValidMobileNumber = mobile => /^[6789]\d{9}$/.test(mobile);

module.exports = {
  isValidMobileNumber,
};
