let fact = document.querySelector('#fact');
    let factText = document.querySelector('#factText');
    let inputNumber = document.querySelector('#inputNumber');
    inputNumber.addEventListener('input',getFactFetch)

    function getFactFetch (){
       let number = inputNumber.value;
        fetch('http://numbersapi.com/'+ number)
        .then(response =>response.text())
        .then(data => {
            if(number!= ''){
                fact.style.display = 'block';
                factText.innerText = data; 
            }
            console.log(data);
        })
        .catch(err =>console.log(err));
    }