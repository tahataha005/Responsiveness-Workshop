// const response = fetch("https://jsonplaceholder.typicode.com/users");

// console.log(response);

// let users = [];

// chaining method
fetch("https://jsonplaceholder.typicode.com/users").then(function (res) {
  res.json().then(function (data) {
    // console.log(data);
    // users = data;
  });
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (resolved) {
    return resolved.json();
  })
  .then(function (data) {
    // console.log(data);
  });

// async/await method

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  return data;
}

const users = getUsers();

console.log(users);

// ===============================
function callback() {}

function then(param) {
  param();
}

// const x = 1;
// func(1);

// func("hello");
// then(function () {});
