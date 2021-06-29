import { writable } from 'svelte/store';

let idCount = 0;

export function createTask(props) {
    let obj = {
        taskId: idCount++,
        name: "Unnamed task",
        completed: false,
        editable: false
    };

    return { ...obj, ...props };
}

function createTaskListStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        set,
        update,
        add: (props) => {
            update(arr => {
                arr.push(createTask(props));
                return arr;
            })
        },
        remove: (taskId) => {
            update(arr => {
                return arr.filter((v) => {
                    return v.taskId !== taskId;
                })
            });
        }
    }
}

export const taskList = createTaskListStore();