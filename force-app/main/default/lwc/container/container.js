import { LightningElement } from 'lwc';
import modal from 'c/modal';
export default class Container extends LightningElement {
    showModal = true;
    result;
    async handleShowModal(){
        this.result = await modal.open({
            size:'large',
            description:'Accessible description of modal\'s purpose',
            content:'Passes into content api',
        });
        console.log(this.result);
    }
}