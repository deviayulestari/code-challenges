JAWABAN SOAL NO 1
1. A .this() karena this digunakan untuk menunjuk suatu variabel di dalam OOP
2. A. object
3. Pada method: 'POST' seharusnya method: 'GET' karena code merupakan function untuk get data dan pada let jsonResponse = await JSON.stringify(response); salah di pemanggilan response, seharusnya let jsonResponse = await response.json();
  codenya menjadi :  
  async function getData() {  
  try {  
    let response = await fetch('https://api-to-call.com/endpoint', {   
      method: 'GET',   
      body: JSON.stringify({id: 200}),   
      dataType: 'json'  
  });  
  let jsonResponse = await response.json();  
  return jsonResponse;  
  } catch (error) {  
    console.log(error);  
  }  
}  

4. Pada method: 'POST' seharusnya method: 'GET' karena code merupakan function untuk get data dan pada let response = await fetch('https://api-to-call.com/endpoint', 'POST', JSON.stringify({id: 200}), 'json'); seharusnya   
let response = await fetch('https://api-to-call.com/endpoint', {   
    method: 'POST',   
    body: JSON.stringify({id: 200}),   
    dataType: 'json'  
    });  
