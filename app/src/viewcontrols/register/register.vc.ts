/// <reference path="../../../../typings/parse/parse.d.ts"/>
import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc';
import CalendarViewControl from '../calendar/calendar.vc';
import UserRepository from '../../repositories/user/user.repo';

export default class RegisterViewControl extends BaseViewControl {
    templateString: string = require('./register.vc.html');
    context: contexts.IRegister = {
        firstname:'',
        lastname:'',
        email:'',
        password: '',
        error: '',
        username:''
    }
    
    constructor(private userRepository: UserRepository) {
      super();
    }

  login(){
    Parse.User.logIn(this.context.username, this.context.password)
    .then((success) => {
        this.navigator.navigate(CalendarViewControl);
    });
    
  }
  
  logOut(){
    Parse.User.logOut();
  }

}
register.viewControl('register-vc', RegisterViewControl, [UserRepository]);
