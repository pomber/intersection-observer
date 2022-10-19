<button on:click aria-roledescription="Add threshold"
	><svg
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M12 6v6m0 0v6m0-6h6m-6 0H6"
		/></svg
	></button
>

<style>
	button {
		width: 20px;
		height: 20px;
		border: none;
		color: white;
		font-size: 10px;
		margin: 0;
		padding: 0;
		cursor: pointer;
		user-select: none;
		border: 1px solid hsl(261deg 55% 60%);
		background: hsl(215deg 28% 17%);
		border-radius: 4px;
		transform: translate(140%, -50%);
		position: absolute;
		right: 0;
		top: 50%;
	}
	button:hover {
		background: hsl(215deg 28% 30%);
	}
	svg {
		width: 14px;
		height: 14px;
		display: block;
		margin: 0 auto;
		stroke: currentColor;
		fill: currentColor;
	}
</style>
