/// <reference path="../../../../typings/parse/parse.d.ts"/>
import {register, controls} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc';
import CalendarViewControl from '../calendar/calendar.vc';
import UserRepository from '../../repositories/user/user.repo';
import NavbarTemplateControl from '../../templatecontrols/navbar/navbar.tc';

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

    constructor(private userRepository: UserRepository, private navbar: NavbarTemplateControl) {
      super();
    }

  login(){
    this.context.error = '';
    Parse.User.logIn(this.context.username, this.context.password)
    .then((success) => {
        this.navbar.login();
        this.navigator.navigate(CalendarViewControl);
    }, (err: any) => {
      console.error(err);
    });
    // console.log(this.navbar.context);
    // console.log(this.navbar.context.loggedin);
    // console.log(this.navbar.context.loggedin);
  }
  navigatedTo(){
    console.log('navigate to works')
    this.navbar.hideNavbar();
  }
  
  navigatingFrom(){
    console.log('navigate from works')
    this.navbar.showNavbar();
  }
  
  logOut(){
    this.navbar.logOut();
    Parse.User.logOut();
  }

}
register.viewControl('register-vc', RegisterViewControl, [UserRepository, 'navbar']);
