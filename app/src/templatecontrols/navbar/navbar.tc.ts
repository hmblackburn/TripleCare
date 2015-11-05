import {controls, events, register, ui, web} from 'platypus';
import RegisterViewControl from '../../viewcontrols/register/register.vc';
import {DrawerController} from 'platypusui';

export default class NavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbar.tc.html');
    drawerController: controls.INamedElement<HTMLDivElement, DrawerController>;
    burg: controls.INamedElement<HTMLDivElement, any>;

    context: any = {
      showNavbar: true,
      loggedin: false
    }


    initialize(): void {
      this.hasOwnContext = true;
      this.on('navigated', (ev: events.DispatchEvent, utils: web.UrlUtils) => {
        this.drawerController.control.close();
        if (utils.pathname.indexOf('/register') === 0){
          this.context.showNavbar = false;
        } else {
          this.context.showNavbar = true;
        }
      });

      this.on('navigated', () => {
        this.drawerController.control.close();
        this.burg.element.className = "close";
      });
    };

    open() {
      this.burg.element.className = "open";
    }

    toggleLogin() {
        this.context.loggedin = !this.context.loggedin;
    }
    logOut(){
      //log user out
    }


}

register.control('navbar', NavbarTemplateControl);
