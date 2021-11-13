<script>
	import { select_multiple_value } from 'svelte/internal';
import '../tailwind.css';
import About from './about.svelte';
</script>

<div class=" mx-auto">
	<div class="flex flex-wrap">
		<div class="flex flex-grow flex-col bg-white border-2 border-gray-300 rounded-lg shadow-lg p-10">
			<h1 class="flex justify-center text-4xl font-semibold mb-10">Welcome to lahs.plus!</h1>
			<div  class="flex justify-center">
				<img src="https://lahs.mvla.net/images/footer-logo.png" alt="LAHS Logo" width="250" height="250">
			</div>
		</div>
	</div>

	<!-- Get better svgs -->
	<div class="flex flex-wrap">
		<div class ="flex flex-grow flex-col bg-lahs-blue border-gray-300 rounded-lg shadow-lg p-11 text-white">
			<h1 class="flex justify-center text-3xl font-bold m-10">Attendance:</h1>
			<div class="flex justify-around text-2xl font-semibold fill-current">
				<div class="dropdown">
					<button class="dropbtn">
						<svg><use xlink:href="/img/icons.svg#phone"/></svg>
						Phone
					</button>
					<div class="dropdown-info">
						<h4 class="text-center m-1"> 650-941-2761</h4>
					</div>
				  </div>
				<div class="dropdown">
					<button class="dropbtn">
						<svg><use xlink:href="/img/icons.svg#email"/></svg>
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
				<ul class="text-1xl text-white">
					<li>Parents must report an absence within 48 hours of an absence.</li>
					<li>Due to technical difficulties with the phone system, they are temporarily accepting Attendance notifications from parents/guardians via email.
						Please send your email to lahs.attendance@mvla.net.</li>
					<li>The message must be sent from the parent/guardian's email account that is already on file with SIS student contact information, and include:
						<ul class="text-5 ml-10 mt-2">
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
			<div class="text-lahs-blue">
				<h2 class="flex justify-center text-xl mb-10 mt-20 font-semibold">Community Health Awareness Council (CHAC)</h2>
				<div class="ml-20 mr-20">
					<h3 class="ml-20 mr-20">&emsp;&emsp;All of CHAC's programs are designed to protect young people from high-risk behaviors such as alcohol use,
						illicit drug use, violence, and premature sexual activity, while building personal assets such as school success, valuing diversity, maintaining good health, and 
						the ability to delay gratification; all of which will help insure that they have the greatest chance for success in life. 
						A critical component of CHAC’s work is an “integrated care” model of working with four school districts to support the psychological and emotional well-being of 
						students in K-12. All school programs are provided free of charge to students and their families. CHAC’s school-based on-site counseling services address social, 
						emotional and mental health issues affecting students’ ability to learn. Staff consultation and training services enhance student support and success in the classroom.</h3>
				   <h2 class="text-xl ml-20 mb-2 mt-2 font-semibold">&emsp;&emsp;Other info?</h2>
				   <ul class="ml-24 text-base font-semibold">
					   <li>
						   Email:
						   <a href="mailto:info@chacmv.org" target="_blank">info@chacmv.org</a>
					   </li>
					   <li>
						   Phone: (650) 965-2020
					   </li>
				   </ul>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	a:hover{
		text-decoration: underline;
	}

	li {
		margin-top: 5px;
		margin-left: 50px;
		list-style-type: disc;
 	}

	.dropdown {
		position: relative;
		display: inline-block;
		
		.dropdown-info {
			display: none;
			position: absolute;
			min-width: 180px;
			box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
			border-radius: 8px;
			z-index: 1;
		}

		.dropbtn {
			background: linear-gradient(side, #FFFFFF, lahs-blue);
		}

		.dropbtn svg {
			height: 70px;
			width: 70px;
		}

		&:hover .dropdown-info {
			display: block;
			transition: all 0.5s ease 0s;
		}
	}
</style>
