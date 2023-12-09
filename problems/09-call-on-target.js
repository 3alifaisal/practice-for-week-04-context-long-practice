function callOnTarget(func, obj1, obj2) {
  const funcBind = func.bind(obj1,obj2);
  return funcBind();
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;