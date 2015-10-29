import {controls, events, register, ui, web} from 'platypus';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import CalendarViewControl from '../../viewcontrols/calendar/calendar.vc';
import ContactViewControl from '../../viewcontrols/contact/contact.vc';
import LoginViewControl from '../../viewcontrols/login/login.vc';
import ServicesViewControl from '../../viewcontrols/services/services.vc';
import {DrawerController} from 'platypusui';

export default class NavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbar.tc.html');
    drawerController: controls.INamedElement<HTMLDivElement, DrawerController>;

    context: any = {
      showNavbar: true,
      homeView: HomeViewControl,
      calView: CalendarViewControl,
      contactView: ContactViewControl,
      servView: ServicesViewControl,
      loginView:LoginViewControl,
      loggedin: false
    }

    initialize(): void {
      this.on('navigated', (ev: events.DispatchEvent, utils: web.UrlUtils) => {
        this.drawerController.control.close();
      });
    }

    toggleLogin() {
        this.context.loggedin = !this.context.loggedin;
    }
    logOut(){
      //log user out
      
    }
}

register.control('navbar', NavbarTemplateControl);
