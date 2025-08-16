import { program } from "commander";
import { listContacts, getContactById, addContact, removeContact } from "./contacts.js";


program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // listContacts
      const allContacts = await listContacts();
      console.log(allContacts);
      break;

    case "get":
      // ... id
      const oneContact = await getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      // ... name email phone
      const newContact = await addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      // ... id
      const removedContact = await removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
