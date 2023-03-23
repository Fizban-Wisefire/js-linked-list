class Node {

    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
    // ADDS TO FRONT OF LIST OR HEAD
    append(data){
        this.head = new Node(data, this.head)
        this.length = this.length + 1
    }
    // ADDS TO END OF LIST OR TAIL
    prepend(data) {
        let current = this.head
        while (current.next != null){
            current = current.next
        }
        if (current.next === null){
            current.next = new Node(data)
        }
        this.length = this.length + 1
    }
    // RETURNS THE LENGHT OF LIST
    size() {
        console.log(this.length)
    }
    // RETURNS THE FIRST NODE IN LIST
    head() {
        console.log(this.head)
    }
    // RETURNS THE LAST NODE IN LIST
    tail() {
        let current = this.head
        while (current.next != null){
            current = current.next
        }
        if (current.next === null){
            console.log(current)
        }
    }
    // RETURNS NODE AT A SPECIFIED SPOT IN LIST
    at(index) {
        let current = this.head
        let currentIndex = 0
        while(currentIndex < index){
            current = current.next
            currentIndex = currentIndex + 1
        }
        console.log(current)
    }
    // REMOVES AND RETURNS THE LAST NODE IN LIST
    pop(){
        let current = this.head
        while(current.next != null){
            var old = current
            current = current.next
        }
        if(current.next === null){
            old.next = null
            this.length = this.length - 1
        }
    }
    // SEARCHES LIST FOR DATA AND RETURNS SPOT
    search(data) {
        let current = this.head
        let index = 0
        while (index < this.length){
            if(current.data == data){
                console.log(current + ' at ' + index + '.')
                return
            } else {
                index = index + 1
                current = current.next
            }
        } 
        (console.log("NOT IN DATA SET"))
        
    }
    // PRINTS LIST IN READABLE FORMAT
    list(){
        let current = this.head
        while (current.next != null){
            console.log(current)
            current = current.next
        }
        console.log(current)
    }

}


const ll = new LinkedList()
ll.append(5)
ll.append(10)
ll.prepend(20)
ll.prepend(100)
ll.list()
ll.pop()
ll.list()

