class Node {
	constructor(data){
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor(){
		this.head = null;
	}

	// add node with data to linked list at the end 
	add(data) {
		if (!this.head) {
			this.head = new Node(data);
			return this;
		}

		let ptr = this.head;

		while(ptr.next) {
			ptr = ptr.next;
		}

		ptr.next = new Node(data);
		return this;
	}

	find(data) {
		let ctr = this.head;
		while(ctr && ctr.data !== data) {
			ctr = ctr.next;
		}
		return ctr;
	}

	addHead(data) {
		if (!this.head) {
			this.head = new Node(data);
			return this;
		}
		let ptr = new Node(data);
		ptr.next = this.head;
		this.head = ptr;
		return this;
	}

	// delete node with given data
	deleteNode(data) {
		if (!this.head) {
			return this;
		}

		if (this.head.data === data) {
			this.head = this.head.next;
			return this;
		}

		let ctr = this.head;
		while(ctr && ctr.next && ctr.next.data !== data) {
			ctr = ctr.next;
		}
		if (ctr && ctr.next) {
			ctr.next = ctr.next.next;
		}

		return this;
	}

	// print the linked list
	print() {
		let ptr = this.head;
		let result = "";
		while(ptr) {
			result += (ptr.data + "->");
			ptr = ptr.next;
		}
		console.log(result);
		return this;
	}

	// reverse the linked list
	reverse() {
		let prev, curr, next;
		curr = this.head;
		while(curr) {
			next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}

		this.head = prev;
		return this;
	}

	// reverse the linked list k nodes at a time
	reverseK(k) {
		let reverse = (head, k) => {
			let prev, curr, next;
			let count = 0;
			curr = head;
			while(curr && count < k) {
				next = curr.next;
				curr.next = prev;
				prev = curr;
				curr = next;
				count++;
			}

			if (next) head.next = reverse(next, k);
			return prev;
		};

		this.head = reverse(this.head, 4);
		return this;
	}
}


let list = new LinkedList();

// functional goodness
list.add(1)
	.add(2)
	.add(3)
	.add(4)
	.add(5)
	.add(6)
	.add(7)
	.add(8)
	.add(9)
	.print()
	.reverseK(3)
	.print()
	.addHead(10)
	.print()
	.deleteNode(3)
	.print()
	.deleteNode(10)
	.print()
	.deleteNode(9)
	.print();

console.log(list.find(6));



