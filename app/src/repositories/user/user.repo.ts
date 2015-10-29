import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import UserService from '../../services/user/user.svc';

export default class UserRepository extends BaseRepository {
    userid: number = 0;
    email: string;

    constructor(private userService: UserService) {
        super();
    }

    login(email: string, password: string): async.IThenable<boolean> {
        return this.userService.login(email, password).then((user) => {
            this.userid = user.id;
            this.email = user.email;
            return true;
        });
    }

    register(email: string, password: string, firstname: string, lastname: string): async.IThenable<boolean> {
        return this.userService.register(email, password, firstname, lastname).then((user) => {
            this.userid = user.id;
            this.email = user.email;
            return true;
        });
    }
}

register.injectable('user-repo', UserRepository, [UserService]);