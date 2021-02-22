<script context="module" lang='ts'>
	import { getContext, setContext } from 'svelte';
	import type { AppState, Context } from '../context';
	import {initAppContext} from '../globalState';

	const appContextKey = Symbol('App context key');
	export const getAppContext=()=>
		getContext(appContextKey) as Context<AppState>;


</script>

<script lang="ts">

	import Groups from './Groups.svelte';
	import Header from './header/Header.svelte';

	const appContext = initAppContext();
	setContext(appContextKey,appContext);

	const {store} = appContext;

</script>

<style type="text/scss" global>
  @import "../styles/global.scss";
</style>

<Header>

</Header>

<main class="wp-main">
	<div class='wp-app-summary'>
		{@html $store.summaryMarkup}
	</div>
	
	<Groups></Groups>

</main>

