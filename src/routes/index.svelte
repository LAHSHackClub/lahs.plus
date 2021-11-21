<script>
	import '../tailwind.css';
</script>

<div class="mx-auto">
	<section class="flex flex-wrap flex-row shadow-lg flex-grow-0 rounded-lg border-gray-300 py-10 border-2">
		<div class="flex flex-col bg-white w-2/3 rounded-md">
			<h1 class="flex justify-center text-lahs-blue text-4xl font-bold mb-10">Welcome to lahs.plus!</h1>
			<div class="flex justify-center">
				<img src="https://lahs.mvla.net/images/footer-logo.png" alt="LAHS Logo" width="300" height="300">
			</div>
		</div>
		<section class="flex flex-wrap w-1/3"> 
			<section class="">
				<div class ="flex flex-col bg-lahs-blue border-gray-300 rounded-lg shadow-lg p-6 text-white">
					<details>
						<summary class="flex justify-center align-middle text-3xl font-bold my-10 p-6 shadow-lg rounded-md">Attendance:</summary>
						<div class="flex justify-around text-2xl font-semibold fill-current">
							<div class="dropdown">
								<button class="dropbtn">
									<svg class="stroke-width-2"><use xlink:href="/img/icons.svg#email"/></svg>
									Email
								</button>
								<div class="dropdown-info">
									<a href="mailto:lahs.attendance@mvla.net" target="__blank"> 
										<h6 class="phone">lahs.attendance@mvla.net</h6>
									</a>
								</div>				
							</div>
							<div class="dropdown">
								<button class="dropbtn">
									<svg class=""><use xlink:href="/img/icons.svg#phone"/></svg>
									Phone
								</button>
								<div class="dropdown-info">
									<h6 class="text-center">650-941-2761</h6>
								</div>
							</div>
						</div>
						<h2 class="flex justify-center text-2xl font-semibold mt-10 mb-10">Other Information:</h2>
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
					</details>
					<details class="info">
						<summary class="flex justify-center align-middle text-3xl font-bold my-10 p-6 shadow-lg rounded-md">CHAC and Psychological Services:</summary>
						<h3 class="flex justify-center text-xl mb-10 mt-20 font-semibold">Community Health Awareness Council (CHAC)</h3>
						<div>
							<h4>&emsp;&emsp;All of CHAC's programs are designed to protect young people from high-risk behaviors such as alcohol use,
								illicit drug use, violence, and premature sexual activity, while building personal assets such as school success, valuing diversity, maintaining good health, and 
								the ability to delay gratification; all of which will help insure that they have the greatest chance for success in life. 
								A critical component of CHAC’s work is an “integrated care” model of working with four school districts to support the psychological and emotional well-being of 
								students in K-12. All school programs are provided free of charge to students and their families. CHAC’s school-based on-site counseling services address social, 
								emotional and mental health issues affecting students’ ability to learn. Staff consultation and training services enhance student support and success in the classroom.</h4>
							<h3 class="text-xl ml-20 mb-4 mt-4 font-semibold">&emsp;&emsp;Other info?</h3>
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
					</details>
				</div>
			</section>
		</section>
		
	</section>

	
</div>

<style lang="scss">

	.info:hover{
		outline: #FFFFFF;
	}

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
		justify-items: center;
		white-space: normal;
		opacity: 1.0;
		
		.dropdown-info {
			display: none;
			position: absolute;
			flex-wrap: wrap;
			box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
			border-radius: 8px;
			z-index: 1;
			opacity: 1.0;
		}

		.dropbtn {
			background: linear-gradient(side, #FFFFFF, lahs-blue);
			white-space: normal;
		}

		.dropbtn svg {
			height: 50px;
			width: 50px;
		}

		.phone{
			max-width: 300px;
			overflow-wrap: break-word;
		}

		&:hover .dropdown-info {
			display: block;
			transition: all 0.5s ease 0.5s;
		}
	}	
</style>
