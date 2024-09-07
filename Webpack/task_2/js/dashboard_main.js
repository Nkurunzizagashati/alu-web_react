import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

// Add logo at the top
$('body').append('<div id="logo"></div>');

// Add other elements to the body
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count">0 clicks on the button</p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Counter function
let count = 0;
function updateCounter() {
	count++;
	$('#count').text(`${count} clicks on the button`);
}

// Debounce the click event
$('button').on('click', _.debounce(updateCounter, 500));
