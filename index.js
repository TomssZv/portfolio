const customCursor = document.getElementById('cursor');

var projects = document.getElementById('project-container').getElementsByClassName('project')

for (let i = 0; i < projects.length; ++i) {
	if (i === 0) {
		projects[i].style.marginRight = 'auto';
	} else if (i % 2 === 0) {
		projects[i].style.marginRight = 'auto';
	} else {
		projects[i].style.marginLeft = 'auto';
	}
	console.log(projects[i])
}

// function onMouseMove(e) {
// 	let x = e.pageX;
// 	let y = e.pageY;

// 	customCursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
// };

// function cursorClick() {
// 	console.log(customCursor.style)
// 	customCursor.style.width = '1.6rem'
// 	customCursor.style.height = '1.6rem'
// };

// addEventListener('click', () => {
// 	cursorClick()
// })

// addEventListener('mousemove', (e) => {
// 	onMouseMove(e);
// });