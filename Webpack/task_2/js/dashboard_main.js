import $ from 'jquery';
import '../css/main.css'; // Import the CSS

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append(
	'<button id="clickButton">Click here to get started</button>'
);
$('body').append('<p id="count">0 clicks on the button</p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Button click handler to update the counter
let count = 0;
$('#clickButton').click(() => {
	count++;
	$('#count').text(`${count} clicks on the button`);
});
