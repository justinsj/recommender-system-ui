Date.prototype.addSeconds = function (seconds) {
  return new Date(this.getTime() + seconds * 1000);
}