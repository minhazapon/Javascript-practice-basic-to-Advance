

const getData = () => {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

  xhr.onload = () => {

   let data = xhr.response;
   console.log(JSON.parse(data))


  }


  xhr.send();


}


getData();