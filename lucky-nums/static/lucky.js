/** processForm: get data from form and make AJAX call to our API. */

function processForm(evt) {
    evt.preventDefault();

    const $name = document.querySelector('#name');
    const $year = document.querySelector('#year');
    const $email = document.querySelector('#email');
    const $color = document.querySelector('#color');

    let data = {
        "name": $name.value,
        "year": $year.value,
        "email": $email.value,
        "color": $color.value
    }

    console.log(data)
    callAPI(data);
}

// ** callAPI: AJAX call to API, transition response to handleResponse

async function callAPI(data){
    try {
        const resp = await axios.post('http://localhost/api/get-lucky-num', data);
        console.log(resp);
        handleResponse(resp);
    } catch (error){
        console.log("Error", error);
    }
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
    const $results = document.querySelector("#lucky-results");
    const luckyMessage = `Your lucky number is ${resp.data.num.num}. ${resp.data.num.fact}`;
    const yearMessage = `Your birth year ${resp.data.year.year} fact is ${resp.data.year.fact}`;

    $results.append("<p>" + luckyMessage + "</p>");
    $results.append("<p>" + yearMessage + "</p>");
}


$("#lucky-form").on("submit", processForm);
