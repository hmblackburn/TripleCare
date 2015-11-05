import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import UserRepository from '../../repositories/user/user.repo';

export default class ContactViewControl extends BaseViewControl {
    templateString: string = require('./contact.vc.html');

    context: any = {
        customer: {
            name: '',
            email: '',
            comment: '',
        }
    };
    constructor(private userRepository: UserRepository) {
        super();
    }
    saveContact() {
        let context = this.context;
        let contact = Parse.Object.extend("ContactForm");
        let Contact = new contact();
        Contact.set({
            name: context.customer.name,
            email: context.customer.email,
            comment: context.customer.comment
        });
        Contact.save();
    }
}

register.viewControl('contact-vc', ContactViewControl, [UserRepository]);
