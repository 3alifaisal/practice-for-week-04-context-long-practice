function allTheArgs(func, ...args) {
  // Return a new function that uses call to invoke the original function with the specified arguments
  return function (...additionalArgs) {
    return func( ...args, ...additionalArgs);
  };
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;