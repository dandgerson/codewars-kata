/**
 * Function tankvol calculate remaining volume of the liquid and returns
 * volume with the integer after Math.floor();
 * @param {integer} h - hieght of the liquid
 * @param {integer} d - diameter of cylinder
 * @param {integer} vt - total volume
 */
const tankvol = (h, d, vt) => {
  const cylinder = {
    r: d / 2,
    v: vt,
    get h() {
      return this.v / (Math.PI * (this.r ** 2));
    },
  };
  const segment = {
    h,
    get angle() {
      return 2 * Math.acos((cylinder.r - this.h) / cylinder.r);
    },
    get s() {
      return (1 / 2) * (cylinder.r ** 2) * (this.angle - Math.sin(this.angle));
    },
    get v() {
      return cylinder.h * this.s;
    },
  };

  return Math.floor(segment.v);
};

module.exports = tankvol;
