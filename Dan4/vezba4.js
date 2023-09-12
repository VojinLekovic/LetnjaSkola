// let promise = new Promise((resolve, reject) => {

//     let sum = 1 + 2;
//     if (sum>3){
//         resolve('Success');
//     }
//     else reject('Failed');


// });
// console.log(promise);

// promise.then((message) => {
//     console.log(message)
// }
// ).catch(message => console.log(message)).finally(() => console.log('Final message'));

const xhr = new XMLHttpRequest(); //creating xmlhttpreq object

xhr.open('GET', 'https://www.google.com/', true); //configuring the req

xhr.onload = function(){
    if(xhr.status === 200){ //defining a callback function to handle the response
        //succesfull response
        const responseData = JSON.parse(xhr.responseText);
        console.log(responseData)
    } else console.error('Error:', xhr.status, xhr.statusText);
};


