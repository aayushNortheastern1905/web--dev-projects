$(document).ready(function () {
    var username = getParameterByName('username');
    $('#welcome-header').text('Welcome ' + username + '!');
});

// Function to get query parameters from the URL
function getParameterByName(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(location.search);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}