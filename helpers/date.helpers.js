Date.prototype.addSeconds = function (seconds) {
  const timestamp = this.getTime()
  timestamp += seconds;
  return new Date(timestamp);
}