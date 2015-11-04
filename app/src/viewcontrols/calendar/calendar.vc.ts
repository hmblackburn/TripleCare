import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class CalendarViewControl extends BaseViewControl {
    templateString: string = require('./calendar.vc.html');

    context: any = {
        
    };
}

register.viewControl('calendar-vc', CalendarViewControl);
