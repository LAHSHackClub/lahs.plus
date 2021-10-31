<script>
	import { select_multiple_value } from 'svelte/internal';
import '../tailwind.css';
</script>

<div class=" mx-auto">
	<div class="flex flex-wrap">
		<div class="flex flex-grow bg-white border-2 border-gray-300 rounded-lg shadow-lg p-10 justify-center">
			<h1 class="text-4xl font-semibold">Welcome to lahs.plus!</h1>
		</div>
	</div>

	<div class="flex flex-wrap">
		<div class ="flex flex-grow flex-col bg-lahs-blue border-gray-300 rounded-md shadow-md p-11 text-white">
			<h1 class="flex justify-center text-3xl font-bold m-10">Attendance:</h1>
			<div class="flex justify-around text-2xl font-semibold fill-current">
				<div class="dropdown">
					<button class="dropbtn">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z"/></svg>
						Phone
					</button>
					<div class="dropdown-info">
						<h4 class="text-center m-1"> 650-941-2761</h4>
					</div>
				  </div>
				<div class="dropdown">
					<button class="dropbtn">
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/></svg>
						Email
					</button>
					<div class="dropdown-info">
						<a href="mailto:lahs.attendance@mvla.net" target="__blank">
							<h4 class="text-center m-1">lahs.attendance@mvla.net</h4>
						</a>
					</div>				
				</div>
			</div>
			<h1 class="flex justify-center text-2xl font-semibold mt-20 mb-10">Other Information:</h1>
			<div class= "flex justify-center">
				<ul class="text-2xl text-white">
					<li>Parents must report an absence within 48 hours of an absence.</li>
					<li>Due to technical difficulties with the phone system, they are temporarily accepting Attendance notifications from parents/guardians via email.
						Please send your email to lahs.attendance@mvla.net.</li>
					<li>The message must be sent from the parent/guardian's email account that is already on file with SIS student contact information, and include:
						<ul class="ml-10 mt-2">
							<li>Student first and last name</li>
							<li>Guardian name</li>
							<li>Dates or class periods absent</li>
							<li>Reason for the absence</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="flex flex-wrap">
		<div class ="flex flex-grow flex-col bg-white border-gray-300 rounded-md shadow-md p-11 text-white">
			<h1 class="flex justify-center text-3xl text-lahs-blue font-bold m-10">CHAC and Psychological Services:</h1>
		</div>
	</div>
</div>

<style lang="css">

	li {
    font-size: 14px;
	margin-top: 5px;
    margin-left: 10px;
    list-style-type: disc;
 	}

	.dropdown {
		position: relative;
		display: inline-block;
	}
	.dropdown-info {
		display: none;
		position: absolute;
		min-width: 180px;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		border-radius: 8px;
		z-index: 1;
	}

	.dropdown:hover .dropdown-info {
		display: block;
		transition: all 0.5s ease 0s;
	}
	.dropdown:hover .dropbtn {
		background: linear-gradient(side, #FFFFFF, lahs-blue);
	}
</style>