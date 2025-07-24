---------------------
|  Todo Task Filter |
---------------------

This is a simple JavaScript project that filters and displays a list of to-do items based on their completion status.

---------------
| Description |
---------------

The script does the following:

1. Stores a list of Bengali to-do tasks in an array.
2. Filters the tasks into:
   ✅ Completed Tasks
   ⏳ Ongoing Tasks
3. Displays each group in a readable format in the terminal.



----------------
| How It Works |
----------------

The core logic uses JavaScript’s .filter() and .forEach() methods:

const completedTasks = todos.filter(todo => todo.done === true);
const ongoingTasks = todos.filter(todo => todo.done === false);

----------------
| Requirements |
----------------

Node.js (install from https://nodejs.org)

--------------
| How to Run |
--------------
Clone the repository: git clone https://github.com/Mehedi-Ahmed/ToDo.git

Run the code using Node.js: node todo.js



----------
| Author |
----------
Mehedi Ahmed

