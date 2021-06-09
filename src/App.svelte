<script>
    import { taskList } from "./store/task";
    import Task from "./Task.svelte";
</script>

<!--
    NOTE:
    Figma draft for this project: https://www.figma.com/file/202wVymAjtrTw5gWXtkxwo/Svelte-Todo?node-id=0%3A1
-->

<header>
    <button />
</header>
<div class="list">
    {#each $taskList as task (task.id)}
        <Task taskId={task.id} name={task.name} />
    {/each}
</div>

<style lang="scss">
</style>
