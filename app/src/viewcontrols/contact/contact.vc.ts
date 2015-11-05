import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class ContactViewControl extends BaseViewControl {
    templateString: string = require('./contact.vc.html');

    context: any = {
        customer: {
            name: '',
            email: '',
            comment: '',
        }
    };
    
    pushEntry() {
        //this.context.customer is an object where name, email, comment and bundled together. Can be sent off to a repo/service
    }
}

register.viewControl('contact-vc', ContactViewControl);
