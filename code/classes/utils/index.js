// Regex to check if the mobile number is valid Indian mobile number or not
const isValidMobileNumber = mobile => /^[6789]\d{9}$/.test(mobile);

module.exports = {
  isValidMobileNumber,
};
