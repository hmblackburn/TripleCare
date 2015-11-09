import {controls, events, register, ui, web} from 'platypus';
import RegisterViewControl from '../../viewcontrols/register/register.vc';
import {DrawerController} from 'platypusui';

export default class NavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbar.tc.html');
    drawerController: controls.INamedElement<HTMLDivElement, DrawerController>;
    burg: controls.INamedElement<HTMLDivElement, any>;

    protected static _inject: any = {
        config: web.IBrowserConfig
    };
    config: web.IBrowserConfig;

    context: any = {
      showNavbar: true,
      loggedin: false
    }


  initialize(): void {
     this.hasOwnContext = true;
     this.on('navigated', (ev: events.DispatchEvent, utils: web.UrlUtils) => {
       this.drawerController.control.close();
       this.burg.element.className = "close";
       this.toggleNavbar();
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

    loaded() {
      console.log(this.config);
      console.log(this.config.baseUrl);
      this.toggleNavbar();
    }


    open() {
      this.burg.element.className = "open";
    }

    toggleNavbar() {
        //this.context.showNavbar = !this.context.showNavbar;
        // window.onunload = unloadPage;
        // function unloadPage() {
        //   this.context.showNavbar = !this.context.showNavbar;
        // }
        console.log(this.config.baseUrl);
        if (this.config.baseUrl.indexOf('/register') === 0){
          this.context.showNavbar = false;
         } else {
          this.context.showNavbar = true;
        }

    }
    logOut(){
       this.context.loggedin = !this.context.loggedin;
    }


}

register.control('navbar', NavbarTemplateControl);
