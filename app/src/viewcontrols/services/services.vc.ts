import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class ServicesViewControl extends BaseViewControl {
    templateString: string = require('./services.vc.html');

    context: any = {
        
    };
}

register.viewControl('services-vc', ServicesViewControl);
