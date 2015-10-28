import {controls, events, register, ui, web} from 'platypus';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import CalendarViewControl from '../../viewcontrols/calendar/calendar.vc';
import ContactViewControl from '../../viewcontrols/contact/contact.vc';
import LoginViewControl from '../../viewcontrols/login/login.vc';
import ServicesViewControl from '../../viewcontrols/services/services.vc';
import {DrawerController} from 'platypusui';

export default class NavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbar.tc.html');
}

register.control('navbar', NavbarTemplateControl);
