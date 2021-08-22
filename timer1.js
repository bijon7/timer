const inputArray = process.argv.slice (2);

let alarmInput = function(inputArray) {

for(let i = 0; i < inputArray.length; i++) {

  if (inputArray[i] === null || inputArray[i] === NaN) {
    return false;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, inputArray[i] * 1000);
}

}

alarmInput(inputArray);
