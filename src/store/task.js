import { writable } from 'svelte/store';

let idCount = 0;

function createTaskListStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        set,
        update,
        add: (name) => {
            update(arr => {
                return arr.push(
                    {
                        id: idCount++,
                        name: name,
                        completed: false
                    }
                )
            })
        },
        remove: (id) => {
            update(arr => {
                return arr.filter((v) => {
                    return v.id != id;
                })
            });
        }
    }
}

export const taskList = createTaskListStore();