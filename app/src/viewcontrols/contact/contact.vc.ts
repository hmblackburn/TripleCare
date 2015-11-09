/// <reference path="../../../../typings/parse/parse.d.ts"/>
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
        let ContactForm = Parse.Object.extend("ContactForm");
        let contact = new ContactForm();
        contact.set({
            name: context.customer.name,
            email: context.customer.email,
            comment: context.customer.comment
        });
        contact.save().then(() => {
            this.clearContact();
        });
    }
        clearContact(): void {
        this.context.customer= false;
        this.context.customer.name='';
        this.context.customer.email='';
        this.context.customer.comment='';
    }
}

register.viewControl('contact-vc', ContactViewControl, [UserRepository]);
