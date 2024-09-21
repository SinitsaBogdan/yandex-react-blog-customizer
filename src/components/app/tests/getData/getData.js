import { get } from 'axios';

export async function getData() {
	try {
		const response = get('https://jsonplaceholder.typicode.com/users');
		return response.data.map((item) => item.id);
	} catch (error) {}
}
