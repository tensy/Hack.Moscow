import api from './api';


export function getTasks(that, data = {}) {
	return new Promise((resolve) => {
		const handlerSuccess = (other, res) => {
			resolve(res.result.users);
		};

		const handlerError = (other, res) => {
			resolve(res);
		};

		api(that, 'tasks.get', data, handlerSuccess, handlerError);
	});
}

export function editTasks(that, data = {}) {
	return new Promise((resolve) => {
		const handlerSuccess = (other, res) => {
			resolve(res);
		};

		const handlerError = (other, res) => {
			resolve(res);
		};

		api(that, 'tasks.edit', data, handlerSuccess, handlerError);
	});
}
