<script>
	import '../tailwind.css';
</script>

<div class=" mx-auto">
	<div class="flex flex-wrap">
		<div class="flex flex-grow bg-white border-2 border-gray-300 rounded-lg shadow-lg p-10 justify-center">
			<h1 class="text-4xl font-semibold">Welcome to lahs.plus!</h1>
		</div>
	</div>

	<div class="flex flex-wrap">
		<div class ="flex flex-grow flex-col bg-lahs-blue border-gray-300 rounded-md shadow-md p-7 text-white">
			<h1 class="flex justify-center text-3xl font-bold m-10">Attendance:</h1>
			<div class="flex justify-around text-2xl font-semibold fill-current">
				<button class="phone">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z"/></svg>
					Phone
				</button>
				<div class="dropdown">
					<h3> 650-941-2761</h3>
				</div>
				<button class="hover:bg-cyan">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/></svg>
					<a href="mailto:lahs.attendance@mvla.net" target="_blank">Email</a>
				</button>
			</div>
		</div>
	</div>

</div>

<style lang="css">
	/* .dropdown{
		display: none;
	}
	.phone:hover .dropdown {display: block;} */
</style>