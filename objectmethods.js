const main = {
    data: {
      i: 0,
    },
    initiate: function (num = 0) {
      this.data.i = num;
      return this;
    },
    add: function (num) {
      this.data.i += num;
      return this;
    },
    subtract: function (num) {
      this.data.i -= num;
      return this;
    },
    multiple: function (num) {
      this.data.i *= num;
      return this;
    },
    divide: function (num) {
      this.data.i /= num;
      return this;
    },
    print: function () {
      return this.data.i;
    },
  };
  
  const value = main.initiate(10).add(6).subtract(4).divide(3).multiple(2).print();
  const value2 = main.initiate(10).multiple(3).add(6).subtract(4).divide(2).print();
  const value3 = main.multiple(5).divide(4).print()
  
  console.log(value);     
  console.log(value2)     
  console.log(value3)