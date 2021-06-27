import { writable } from 'svelte/store';

let idCount = 0;

export function createTask(props) {
    return Object.assign({
        taskId: idCount++,
        name: "Unnamed task",
        completed: false,
        description: ""
    }, props);
}

function createTaskListStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        set,
        update,
        add: (name) => {
            update(arr => {
                arr.push(
                    createTask({
                        name: name
                    })
                );
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