import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class LoginViewControl extends BaseViewControl {
    templateString: string = require('./login.vc.html');

    context: any = {};
}

register.viewControl('login-vc', LoginViewControl);
