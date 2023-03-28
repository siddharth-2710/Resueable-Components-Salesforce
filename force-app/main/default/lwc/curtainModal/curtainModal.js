import { LightningElement } from 'lwc';

export default class CurtainModal extends LightningElement {
    closeModal() {
        this.template.querySelector('[data-id="curtainModal"]').style.width = "0%";
      }
      handleShowModal() {
        this.template.querySelector('[data-id="curtainModal"]').style.width =
          "100%";
      }
}