import {register, events, controls, ui, web} from 'platypus';

export default class DrawerTemplateControl extends ui.TemplateControl {
    templateString: string = require('./drawer.tc.html');
    
    
    context: any = {
        loggedin: false
    }
    
    intitialize(): void {
        this.hasOwnContext = true;
    }
    
    login(){
      this.context.loggedin = true;  
    }
    logOut(){
      this.context.loggedin = false;
    }
    hideDrawer(){
      
    }
    showDrawer(){
        
    }
}

register.control('drawer', DrawerTemplateControl, [], true);
