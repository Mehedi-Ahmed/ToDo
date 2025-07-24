const todos = [{
        title: "Ghum theke uthte hobe",
        done: true
    },
    {
        title: "Office jete hobe",
        done: false
    },
    {
        title: "Basay aste hobe",
        done: true
    },
    {
        title: "Ostad er class korte hobe",
        done: true
    },
    {
        title: "Quiz dite hobe",
        done: false
    },
    {
        title: "Assignment complete korte hobe",
        done: true
    }

];

//step 2: filter into completed and ongoing tasks`
const completedTasks = todos.filter((todo) =>
    todo.done ===
    true);
const ongoingTasks = todos.filter((todo) =>
    todo.done ===
    false);

//step 3: display tasks
console.log("✅ Done:");
completedTasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.title}`);
});

console.log("\n⏳ Ongoing Tasks:");
ongoingTasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.title}`);
});