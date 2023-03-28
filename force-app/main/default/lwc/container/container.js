import { LightningElement } from 'lwc';
import modal from 'c/modal';
import headerLessModal from 'c/headerLessModal';
export default class Container extends LightningElement {
    showModal = true;
    result;
    async handleShowModal(){
        this.result = await modal.open({
            size:'large',
            description:'Accessible description of modal\'s purpose',
            content:'Passes into content api',
            headerText:'I am a dynamic header'
        });
        console.log(this.result);
    }
    async handleHeaderLessModal(){
        this.result = await headerLessModal.open({
            label:'Modal Header',
            size:'large',
            description:'Accessible description of modal\'s purpose',
            content:'Passes into content api',
        });
        console.log(this.result);
    }
}