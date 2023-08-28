import { Injectable } from '@angular/core';

interface IModal {
  id: string,
  visible: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  private modals: IModal[] = [];

  register(id: string) {
    this.modals.push({
      id: id,
      visible: false
    })

    // console.log(this.modals);
  }

  // to avoid memory leak by removing same id modals
  unRegister(id: string) {
    this.modals = this.modals.filter(el => el.id !== id)
  }

  isModalOpen(id: string) : boolean {
    // ? is optional chaining
    return !!this.modals.find(el => el.id === id)?.visible
    // return true;
  }

  toggleModal(id: string) {
    const modal = this.modals.find(el => el.id === id);

    if(modal) {
      modal.visible = !modal.visible;
    }
    // this.visible = !this.visible;
  }

}
