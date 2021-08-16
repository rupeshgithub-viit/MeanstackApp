import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {Contact} from '../contact.service';
// import { Contact } from './contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {

  contacts: Array<any> = []
  // contact: Contact;
  first_name: any = '';
  last_name: any = '';
  phone: any = '';

  constructor(private contactService: ContactService) { }

  addContact() {
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone

    }
    this.contactService.addContact(newContact)
      .subscribe(contact => {
        this.contacts.push(contact);
      });
  }


  deleteContact(id: any) {
    var contacts = this.contacts;
    this.contactService.deleteContact(id)
      .subscribe(data => {
        console.log(data);
        // if(data['n']==1)
        // {
        //   for(var i =0; i<contacts.length; i++){
        //     if(contacts[i]._id == id){
        //       contacts.splice(i,1)
        //     }
        //   }
        // }
      })
  }

  ngOnInit(): void {
    this.contactService.getContacts()
      .subscribe(contacts => console.log(contacts)
        // this.contacts = contacts
      );

  }

  // fname: string="first name"


  // form = new FormGroup({
  //   first_name: new FormControl('',[Validators.required]),
  //   last_name: new FormControl('',[Validators.required]),

  //   phone: new FormControl('',[Validators.required]),


  // })
  // form = new FormGroup({

  // fnames: new FormControl('', [Validators.required, Validators.minLength(3)]),
  // lnames: new FormControl('', [Validators.required, Validators.minLength(3)]),

  // email: new FormControl('', [Validators.required, Validators.email]),
  // pass: new FormControl('', [Validators.required, Validators.pattern(this.pwdPattern)] ),
  // confpass: new FormControl('', [Validators.required])
  // });

}
