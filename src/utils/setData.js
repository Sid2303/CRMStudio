import employees from '../assets/data/employees.js';
import leaves from '../assets/data/leaves.js';
import appointments from '../assets/data/appointmentsList.js';
import notes from '../assets/data/notes.js';
import todos from '../assets/data/todolist.js';

export default function setData() {
	localStorage.setItem('employees', JSON.stringify(employees));
	localStorage.setItem('leaves', JSON.stringify(leaves));
	localStorage.setItem('appointments', JSON.stringify(appointments));
	localStorage.setItem('notes', JSON.stringify(notes));
	localStorage.setItem('todos', JSON.stringify(todos));
}
