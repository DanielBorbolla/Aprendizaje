
const fetchData = (callback) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('se llama a esta función si se cumplen las caracteristicas');
    }, 1500);
  });
  return promise;

};
setTimeout(() => {
  console.log('timer is done');
  // fetchData(text => {console.log(text)})}, 100)
  fetchData()
    .then(text => {
      console.log(text);
      return fetchData();
    })
    .then(text2 => {
      console.log('volvemos a llamar la funcion');
    });
}, 100);

console.log('esto se ejecutará primero');
console.log('JS no espera a que las otras funciones terminen para ser ejecutadas')