function boundFuncTimer(obj, func, delay) {
  const boundFunc = func.bind(obj);
  return setTimeout(boundFunc, delay);

}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;