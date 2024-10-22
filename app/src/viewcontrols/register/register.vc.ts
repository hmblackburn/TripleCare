/// <reference path="../../../../typings/parse/parse.d.ts"/>
import {register, controls} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc';
import CalendarViewControl from '../calendar/calendar.vc';
import UserRepository from '../../repositories/user/user.repo';
import NavbarTemplateControl from '../../templatecontrols/navbar/navbar.tc';
import DrawerTemplateControl from '../../templatecontrols/drawer/drawer.tc';
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


    constructor(private userRepository: UserRepository, private navbar: NavbarTemplateControl, private drawer: DrawerTemplateControl) {
      super();
    }

  login(){
    this.context.error = '';
    Parse.User.logIn(this.context.username, this.context.password)
    .then((success) => {
        this.navbar.login();
        this.drawer.login();
        this.navigator.navigate(CalendarViewControl);
    }, (err: any) => {
      console.error(err);
    });
  }
  navigatedTo(){
    console.log('navigate to works')
    this.navbar.hideNavbar();
    this.navbar.hideDrawer();
  }
  
  navigatingFrom(){
    console.log('navigate from works')
    this.navbar.showNavbar();
    this.navbar.showDrawer();
  }
  
  logOut(){
    this.navbar.logOut();
    this.drawer.logOut();
    Parse.User.logOut();
  }

}
register.viewControl('register-vc', RegisterViewControl, [UserRepository, 'navbar', 'drawer']);
