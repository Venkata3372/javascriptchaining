function factoryfun(num) {
    let i = num;
    return {
      add: function (num) {
        i += num;
        return this;
      },
      subtract: function (num) {
        i -= num;
        return this;
      },
      multiple: function (num) {
        i *= num;
        return this;
      },
      divide: function (num) {
        i /= num;
        return this;
      },
      power:function(num){
        i=Math.pow(i,num)
        return this
      },
     print() {
        return i;
      },
    };
  }
  
  const x1 = factoryfun(10);
  const x2 = factoryfun(10);
  
  const value = x1.add(6).subtract(4).multiple(3).divide(2).power(5).print();
  const value2 = x2.multiple(3).add(6).subtract(4).divide(2).power(5).print();
  const value3 = x2.multiple(5).power(5).print()
  
  console.log(value);     //18
  console.log(value2);    //16
  console.log(value3)     //20