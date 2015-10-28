import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class ContactViewControl extends BaseViewControl {
    templateString: string = require('./contact.vc.html');

    context: any = {};
}

register.viewControl('contact-vc', ContactViewControl);
