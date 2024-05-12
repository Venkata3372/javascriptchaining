const main = function (init = 2) {
    this.i = init;
    this.add = function (i) {
      this.i += i;
      return this;
    };
   this.subtract = function (i) {
      this.i -= i;
      return this;
    };
    this.multiple = function (i) {
      this.i *= i;
      return this;
    };
   this.divide = function (i) {
      this.i /= i;
      return this;
    };
    this.print = function () {
      return this.i;
    };
  };
  
  const x1 = new main(10);
  const x2 = new main(10);
  
  const value = x1.add(6).subtract(4).multiple(3).divide(2).print();
  const value2 = x2.multiple(3).add(6).subtract(4).divide(2).print();
  const value3 = x2.multiple(5).divide(4).print()
  
  console.log(value);     
  console.log(value2);    
  console.log(value3)     