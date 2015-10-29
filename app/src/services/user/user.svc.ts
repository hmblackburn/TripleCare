import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class UserService extends BaseService {
	register(email: string, password: string,
		firstname: string,
		lastname: string): async.IThenable<models.IUser> {

		return this.http.json<models.IResponse>({
			method: 'POST',
			url: this.host + '/users/register',
			data: <models.IUser>{
				email: email,
				password: password,
				firstname: firstname,
				lastname: lastname
			}
		}).then(
			(success) => {
				return <models.IUser>{
					id: success.response.data,
					email: email
				};
			},
			(error): any => {
				throw error.response.message;
			}
			);
	}
	login(email: string, password: string): async.IThenable<models.IUser> {
		return this.http.json<models.IResponse>({
			method: 'POST',
			url: this.host + '/users/login',
			data: <models.IUser>{
				email: email,
				password: password
			}
		}).then(
			(success) => {
				return <models.IUser>{
					id: success.response.data,
					email: email
				};
			},
			(error: async.AjaxError): any => {
				throw error.response.message;
			}
			);
	}
}

register.injectable('user-svc', UserService);
