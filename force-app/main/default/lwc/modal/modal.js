import { api } from 'lwc';
import LightningModal from 'lightning/modal'
export default class Modal extends LightningModal {
    @api content
    @api headerText;
    handleOkay(){
        this.close('okay');
    }
    handleDisableClose(){
        this.disableClose = true;
    }
}