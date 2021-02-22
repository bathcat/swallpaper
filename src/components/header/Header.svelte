<script lang="ts">
	import Repository from './Repository.svelte';
	import Logo from './Logo.svelte';
</script>

<header>
	<Logo class='wp-header-logo'/>
	<Repository class='wp-header-repo'/>
</header>

<style type="text/scss" global>
	header{
		border-bottom-width: 1px;
		border-bottom-color: var(--gray);
		border-bottom-style: solid;

		height:3rem;
		z-index: 10;

		display:flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		padding: 0 0 0 2rem;
		margin-bottom: 1rem;
	}

	.wp-header-logo{
		flex:10;
	}

	.wp-header-repo{
		flex:1;
	}

</style>

