console.log(window.navigator.hardwareConcurrency)
let a = loggingDecorator(hi, 'Timing Thing')();
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


async function hi() {
  let b = [...Array(4)]
  let a = new Promise((resolve, reject) => {
    setTimeout(() => {
      b.map(() => console.log('hi'));
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