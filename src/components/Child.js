import React, { memo } from 'react';

const Child = (props) => {
  function changeNumber() {
    props.changeNumber(Math.random());
  }

  console.log('here');
  return (
    <div>
      <h1>Child: {props.number}</h1>
      <button onClick={changeNumber}>Click to change child number</button>
    </div>
  );
};

/*

useCallBack which is meant to help you optimize the performance

useCallBack: as long as we are only changing the local variables even though
I'm technically still passing down a function but since now I'm passing down
a new function, I'm continously passing down the same function because of useCallback
because we have memoized our callback function because the component only render if
the props are actually only render if the props are kind of coming down to it are 
actually changing and react memo is working by the power of usecallback

*/

export default memo(Child);

/*

const x = 10;
const b = 10;

console.lob(x === b); // true

////////////////

const x = {
  key: 10,
}
const b = {
  key: 10,
}

console.log(x === b); // false both b and x are not both pointing to the same spot in memory this 
// referential equality to see if are in the same place in memory 

///////////////

const x = {
  key: 10,
}
b = x;

console.log(x === b); // true both b and x are both pointing to the same spot in memory

*/
