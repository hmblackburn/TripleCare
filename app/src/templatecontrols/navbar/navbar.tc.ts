import {register, ui} from 'platypus';

export default class NavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbar.tc.html');
}

register.control('navbar', NavbarTemplateControl);
