import {controls, events, register, ui, web} from 'platypus';
import RegisterViewControl from '../../viewcontrols/register/register.vc';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import CalendarViewControl from '../../viewcontrols/calendar/calendar.vc';
import ContactViewControl from '../../viewcontrols/contact/contact.vc';
import ServicesViewControl from '../../viewcontrols/services/services.vc';
import {DrawerController} from 'platypusui';

export default class NavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbar.tc.html');
    drawerController: controls.INamedElement<HTMLDivElement, DrawerController>;
    burg: controls.INamedElement<HTMLDivElement, any>;

    context: any = {
      showNavbar: true,
      loggedin: false,
      currentPage: ''
    }


  initialize(): void {
     this.hasOwnContext = true;
     this.on('navigated', (ev: events.DispatchEvent, utils: web.UrlUtils) => {
       this.drawerController.control.close();
       this.burg.element.className = "close";
     });

      // this.on('navigated', () => {
      //   this.drawerController.control.close();
      //   this.burg.element.className = "close";
      //   if (utils.pathname.indexOf('/register') === 0){
      //     this.context.showNavbar = false;
      //    } else {
      //     this.context.showNavbar = true;
      // }
      // });
    };
   
    open() {
      this.burg.element.className = "open";
    }

    login() {
      console.log('inside navbar tc. Setting loggedin to true');
      this.context.loggedin = true;
    }
    logOut(){
      console.log('inside navbar tc. Setting loggedin to false');
      this.context.loggedin = false;
    }
    
    hideNavbar(){
      this.context.showNavbar = false;
    }

    showNavbar(){
      this.context.showNavbar = true;
    }

}
register.control('navbar', NavbarTemplateControl, [], true);
