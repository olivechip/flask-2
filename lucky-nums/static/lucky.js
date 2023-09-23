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

    resetFields();
    callAPI(data);
}

// ** resetFields: clears all values and prepares for the next render

function resetFields(){
    $('form:input').val('');
    $("#lucky-results").empty();
}

// ** callAPI: AJAX call to API, transition response to handleResponse

async function callAPI(data){
    try {
        const resp = await axios.post('/api/get-lucky-num', data);
        console.log(resp);
        handleResponse(resp);
    } catch (error){
        console.log("Error", error);
        console.error(error.response.data);
    }
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
    const $results = document.querySelector("#lucky-results");
    const luckyMessage = `Your lucky number is ${resp.data.num.num}. ${resp.data.num.fact}`;
    const yearMessage = `Your birth year ${resp.data.year.year} fact is ${resp.data.year.fact}`;

    $results.append(luckyMessage);
    $results.append(yearMessage);
}


$("#lucky-form").on("submit", processForm);