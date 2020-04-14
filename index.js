

const queryEndpoint = 'https://www.googleapis.com/youtube/v3/search';

function sendRequest(searchWord, callback) {
    let queryParams = {
        part: 'snippet',
        key: 'AIzaSyAROW-3VQEqRj_dwg8Gmexm7JxWO335gBI',
        q: searchWord
    };

    $.getJSON(queryEndpoint, queryParams, callback)
}


function handleResponse() {
    $('.results').removeClass('hidden');
    console.log('got a response')
}

function clickOnSearch() {
    $('.search-form').submit(function(event) {
        event.preventDefault();
        let searchTerm = $('.search-form').find('input[name="search-text"]').val();
        $('.search-form').find('.search-text').val('')
        console.log('clicked', searchTerm);
        sendRequest(searchTerm, handleResponse);
    })
}

$(clickOnSearch);