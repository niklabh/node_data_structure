import Node from './Node'

export default class List {
  constructor(){
    this.head = null;
  }

  insert(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let pointer = this.head;
      while (pointer && pointer.next) {
        pointer = pointer.next;
      }
      pointer.next = new Node(data);
    }
    return this;
  }

  insertHead(data){
    const pointer = this.head;
    this.head = new Node(data);
    this.head.next = pointer;
    return this;
  } 

  traverse(predicate, context) {
    let pointer = this.head;
    while (pointer) {
      predicate.call(context, pointer.data);
      pointer = pointer.next;
    }
  }

  print(){
    this.traverse(data => {
      process.stdout.write(data + '');
      process.stdout.write('->')
    })
    process.stdout.write('null')
    process.stdout.write('\n')
  }

  deleteNode(data) {
    if (this.head && this.head.data === data) {
      this.head = null;
    } else {
      let pointer = this.head;
      let previous = this.head;
      while (pointer && pointer.data !== data) {
        previous = pointer;
        pointer = pointer.next;
      }
      previous.next = pointer.next;
    }
    return this;
  }

  insertAfter(data, insertData) {
    let pointer = this.head;
    while (pointer && pointer.data !== data) {
      pointer = pointer.next;
    }
    const temp = pointer.next;
    pointer.next = new Node(insertData);
    pointer.next.next = temp;
    return this;
  }
}