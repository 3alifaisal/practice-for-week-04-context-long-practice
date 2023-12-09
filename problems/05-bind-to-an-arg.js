function bindToAnArg(func, arg) {
  const bindedFunc = func.bind(null, arg);

  return bindedFunc;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;