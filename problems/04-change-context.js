function changeContext(func, obj) {
  const bindedFunc = func.bind(obj);
    return bindedFunc()
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;