const asyncTask = new Promise((resolve, reject)=>{
    try {
        // Sending request to a database
        // Waiting for a response.
        // Result arrived
        resolve('Success: 100 rows found.');
        // throw new Error('Connection failed.');
    } catch (error) {
        // If something goes wrong in the process
        reject(error);
    }
});

asyncTask
    .then(result=>console.log(result))
    .catch(error=> console.log(error));

// async function main() {
//     try {
//         const result = await asyncTask;
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
//
// main();
