import List from './List'

const list = new List();

list
  .insert(1)
  .insert(2)
  .insert(3)
  .insert(4)
  .insert(5)
  .print();


list
  .insert(6)
  .print();

list
  .deleteNode(3)
  .print();

list
  .insertAfter(4, 10)
  .print();


const slist = new List();

slist
  .insert(1)
  .deleteNode(1)
  .print();


