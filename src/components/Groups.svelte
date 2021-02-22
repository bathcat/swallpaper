<script lang='ts'>
	import { getAppContext } from './App.svelte';
	import Group from './Group.svelte';
	const {store} = getAppContext();
</script>

<div class="wp-group-list ">
	{#each $store.groups.map(g=>g.id) as groupID}
		<Group {groupID}></Group>
	{/each}
</div>
