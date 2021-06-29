<script>
    import { onMount } from "svelte";
    import { taskList } from "/store/task";
    import IconTrashcan from "/res/akar/trashcan.svg";
    import IconCheckbox from "/res/akar/checkbox.svg";
    import IconCheckboxFull from "/res/akar/checkbox-full.svg";
    import IconEdit from "/res/akar/edit.svg";
    import IconCheck from "/res/akar/check.svg";

    export let taskId = -1;
    let nameElem = null;

    let task = $taskList.find((v) => {
        return v.taskId == taskId;
    });

    if (task == undefined) {
        throw new Error(
            `Task with id ${taskId} was not found in taskList store`
        );
    }

    onMount(() => {
        nameElem.focus();
    });

    $: task;
</script>

<div
    class="task
    {task.completed ? 'completed' : ''}
    {task.editable ? 'editable' : ''}"
>
    <div
        class="checkbox"
        on:click={() => {
            if (task.editable) {
                return;
            }
            task.completed = !task.completed;
        }}
    >
        {#if !task.completed}
            <IconCheckbox width="100%" height="100%" />
        {:else}
            <IconCheckboxFull width="100%" height="100%" />
        {/if}
    </div>

    {#if !task.editable}
        <p class="name">{task.name}</p>
    {:else}
        <p
            class="name"
            contenteditable="true"
            bind:innerHTML={task.name}
            bind:this={nameElem}
        />
    {/if}

    <button
        class="edit"
        on:click={() => {
            task.editable = !task.editable;
        }}
    >
        {#if !task.editable}
            <IconEdit width="100%" height="100%" />
        {:else}
            <IconCheck width="100%" height="100%" />
        {/if}
    </button>
    <button
        on:click={() => {
            if (task.editable) {
                return;
            }
            taskList.remove(taskId);
        }}
    >
        <IconTrashcan width="24px" height="24px" />
    </button>
</div>

<style lang="scss">
    .task {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 80%;
        height: 30px;
        padding: 10px;
        border-radius: 4px;
        box-shadow: 0 0 2px 1px hsla(0, 0%, 60%, 0.5);
        background-color: #fefefe;

        button {
            background-color: transparent;
            border: none;
            margin: 2px;
            padding: 0;
        }

        .name {
            margin: 2px 10px;
            flex: 1;
        }
        .edit {
            width: 24px;
            height: 24px;
        }

        .checkbox {
            display: flex;
            width: 24px;
            height: 24px;
            cursor: pointer;
        }

        &.completed {
            .checkbox {
                color: hsl(189deg, 100%, 43%);
            }
        }
        &.editable {
            & > * {
                opacity: 0.3;
            }

            .name,
            & .edit {
                opacity: 1;
            }

            .edit {
                border: 2px solid hsl(0, 0%, 30%);
                border-radius: 5px;
            }

            .name:focus {
                outline: 2px solid black;
                border-radius: 4px;
            }
        }
    }
</style>
