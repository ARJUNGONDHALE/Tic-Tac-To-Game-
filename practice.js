function data(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data = ", data);
      resolve(200);
    }, 2000);
  });
}

//this is async function
//await only used  inside the async function
(async function () {
  console.log("gating data 1");
  await data(1); //stop other exicution to complite this exicution
  console.log("gating data 2");
  await data(2);
  console.log("gating data 3");
  await data(3);
  console.log("gating data 4");
  await data(4);
})();
