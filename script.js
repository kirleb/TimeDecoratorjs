console.log(window.navigator.hardwareConcurrency)
let a = loggingDecorator(test, 'Timing Thing')();
appendToOutput(a);


function loggingDecorator(wrapped, name) {
  return async () => {
    console.log(`Starting Timer: ${name}`);
    console.time(name)
    const result = await wrapped.apply(this, arguments);
    console.timeEnd(name)
    console.log(`Finished Timer: ${name}`);
    return result;
  }
}


async function test() {
  let b = [...Array(4)]
  let a = new Promise((resolve) => {
    setTimeout(() => {
      b.map(() => console.log('test'));
      resolve('done!');
    }, 3000)
  });
  
  return a
}

async function appendToOutput(output){
  document
    .getElementById('output')
    .append(await output)
}