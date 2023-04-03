function padZero(size, str) {
  let zero = '';
  for(let i = 0; i < size; i++) zero += '0';
  str = zero + str;
  return str.slice(-size)
}

module.exports = { padZero }