class TodoList {
    // your code here
    constructor(){
        this.todos = [];
    }
    addTodo(text){
        this.todos.push({text: text, done: false});
        console.log(`Added: ${text}`);
    }
    completeTodo(text){
        const todo = this.todos.find(todo => todo.text === text);
        todo.done = true;
        console.log(`Completed: ${text}`);
    }
    removeTodo(text){
        this.todos = this.todos.filter(todo => todo.text !== text);
        console.log(`Removed: ${text}`);
    }
    getRemaining(){
        const notDone = this.todos.filter(todo => todo.done === false).length;
        console.log(notDone);
    }
    displayAll(){
        this.todos.forEach(todo => {
            const status = todo.done ? "x" : " ";
            console.log(`[${status}] ${todo.text}`);
        });
    }

}

const myList = new TodoList();
myList.addTodo("Buy milk");
myList.addTodo("Study JS");
myList.addTodo("Sleep Early");
myList.removeTodo("Sleep Early")
myList.completeTodo("Buy milk");
myList.getRemaining();
myList.displayAll();