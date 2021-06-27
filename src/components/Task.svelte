<script>
    import { taskList } from "/store/task";
    import IconTrashcan from "/res/akar/trashcan.svg";
    import IconEdit from "/res/akar/edit.svg";
    import IconCheck from "/res/akar/check.svg";

    import { createEventDispatcher } from "svelte";

    export const taskId = 0;

    let taskObj = $taskList.find((v) => {
        return v.taskId == taskId;
    });
</script>

<div>
    <button
        on:click={() => {
            taskObj.completed = !taskObj.completed;
        }}
    >
        <IconCheck />
    </button>
    <p>{taskObj.name}</p>
    <button>
        <IconEdit />
    </button>
    <button>
        <IconTrashcan />
    </button>
</div>
