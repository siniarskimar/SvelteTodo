<script>
    import { taskList } from "/store/task";
    import IconCheck from "/res/akar/check.svg";
    import IconPlus from "/res/akar/plus.svg";

    import Task from "/components/Task.svelte";
</script>

<!--
    NOTE:
    Figma draft for this project: https://www.figma.com/file/202wVymAjtrTw5gWXtkxwo/Svelte-Todo?node-id=0%3A1
-->

<header id="top">
    <button class="addTask">
        <IconPlus width="30" height="30" />
    </button>
</header>
<div class="list">
    {#each $taskList as task (task.id)}
        <Task {...task} />
    {/each}
</div>

<style lang="scss">
    #top {
        display: grid;
        min-height: 50px;
        justify-items: right;
        padding: 5px;

        box-shadow: 0 1px 2px 2px hsla(0, 0%, 0%, 0.25);

        .addTask {
            border: dashed hsl(0, 0%, 85%) 1px;
            background-color: transparent;
        }
    }
    .list {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
    }
</style>
