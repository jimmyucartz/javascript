console.log(location);
console.log(location.href);
console.log(location.ancestorOrigins);
console.log(location.pathname);
console.log(location.port);
console.log(location.protocol);
console.log(location.toString());
console.log(location.origin);
console.log(location.hash);
console.log(location.search);

//
const gotoGoogle = () => {
  location.assign("https://google.co.in");
};

const reload = () => {
  location.reload();
};

const replace = () => {
  window.location.replace("https://cnn.com");
};
