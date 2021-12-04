<script>
	import '../tailwind.css';
</script>

<div class="mx-auto">
	<section
		class="flex flex-wrap flex-row shadow-lg flex-grow-0 rounded-lg border-gray-300 dark:border-gray-800 py-10 border-2"
	>
		<div class="flex flex-col  w-2/3 rounded-md">
			<h1 class="flex justify-center text-lahs-blue text-4xl font-bold mb-10">
				Welcome to lahs.plus!
			</h1>
			<div class="flex justify-center">
				<img src="../static/img/lahs-logo.png" alt="LAHS Logo" width="300" height="300" />
			</div>
		</div>
		<section class="flex flex-wrap w-1/3">
			<section class="">
				<div class="flex flex-col bg-lahs-blue border-gray-300 rounded-lg shadow-lg p-6 text-white">
					<details class="my-10">
						<summary
							class="flex justify-center align-middle text-3xl font-bold p-6 shadow-lg rounded-md"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								fill="currentColor"
								class="bi bi-calendar2-check"
								viewBox="0 0 16 16"
							>
								<path
									d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
								/>
								<path
									d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"
								/>
								<path
									d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"
								/>
							</svg>
							<span class="ml-3">Attendance:</span>
						</summary>
						<div class="flex justify-around mt-10 text-2xl font-semibold fill-current">
							<div class="dropdown">
								<button class="dropbtn">
									<svg class="stroke-width-2"><use xlink:href="/img/icons.svg#email" /></svg>
									Email
								</button>
								<div class="dropdown-info">
									<a href="mailto:lahs.attendance@mvla.net" target="__blank">
										<h6 class="email text-base">lahs.attendance@mvla.net</h6>
									</a>
								</div>
							</div>
							<div class="dropdown">
								<button class="dropbtn">
									<svg class=""><use xlink:href="/img/icons.svg#phone" /></svg>
									Phone
								</button>
								<div class="dropdown-info">
									<h6 class="text-center text-base phone">650-941-2761</h6>
								</div>
							</div>
						</div>
						<h2 class="flex justify-center text-2xl font-semibold mt-10 mb-10">
							Other Information:
						</h2>
						<div class="flex justify-center mb-10">
							<ul class="text-base text-white">
								<li>Parents must report an absence within 48 hours of an absence.</li>
								<li>
									Due to technical difficulties with the phone system, they are temporarily
									accepting Attendance notifications from parents/guardians via email. Please send
									your email to lahs.attendance@mvla.net.
								</li>
								<li>
									The message must be sent from the parent/guardian's email account that is already
									on file with SIS student contact information, and include:
									<ul class="text-5 mt-2">
										<li>Student first and last name</li>
										<li>Guardian name</li>
										<li>Dates or class periods absent</li>
										<li>Reason for the absence</li>
									</ul>
								</li>
							</ul>
						</div>
					</details>
					<details class="info my-10">
						<summary
							class="flex justify-center align-middle text-3xl font-bold p-6 shadow-lg rounded-md"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								fill="currentColor"
								class="bi bi-clipboard"
								viewBox="0 0 16 16"
							>
								<path
									d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
								/>
								<path
									d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
								/>
							</svg>
							<span class="ml-3">CHAC and Psychological Services:</span>
						</summary>
						<h3 class="flex justify-center text-2xl mb-10 mt-20 font-bold">
							Community Health Awareness Council (CHAC)
						</h3>
						<div class="flex justify-around text-2xl font-semibold fill-current">
							<div class="dropdown">
								<button class="dropbtn">
									<svg class="stroke-width-2"><use xlink:href="/img/icons.svg#email" /></svg>
									Email
								</button>
								<div class="dropdown-info">
									<a href="mailto:info@chacmv.org" target="__blank">
										<h6 class="email text-base">info@chacmv.org</h6>
									</a>
								</div>
							</div>
							<div class="dropdown">
								<button class="dropbtn">
									<svg class=""><use xlink:href="/img/icons.svg#phone" /></svg>
									Phone
								</button>
								<div class="dropdown-info">
									<h6 class="text-center text-base phone">650-965-2020</h6>
								</div>
							</div>
						</div>
						<div class="my-10 mx-5">
							<h4>
								&emsp;&emsp;All of CHAC's programs are designed to protect young people from
								high-risk behaviors such as alcohol use, illicit drug use, violence, and premature
								sexual activity, while building personal assets such as school success, valuing
								diversity, maintaining good health, and the ability to delay gratification; all of
								which will help insure that they have the greatest chance for success in life. A
								critical component of CHAC’s work is an “integrated care” model of working with four
								school districts to support the psychological and emotional well-being of students
								in K-12. All school programs are provided free of charge to students and their
								families. CHAC’s school-based on-site counseling services address social, emotional
								and mental health issues affecting students’ ability to learn. Staff consultation
								and training services enhance student support and success in the classroom.
							</h4>
						</div>
					</details>
				</div>
			</section>
		</section>
	</section>
</div>

<style lang="scss">
	details[open] summary ~ * {
		animation: sweep 0.5s ease-in-out;
	}

	@keyframes sweep {
		0% {
			opacity: 0;
			margin-left: -10px;
		}
		100% {
			opacity: 1;
			margin-left: 0px;
		}
	}

	details:hover {
		background-color: #0258ba;
		border-radius: 0.5 rem;
	}

	a:hover {
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
		opacity: 1;

		.dropdown-info {
			display: none;
			position: absolute;
			flex-wrap: wrap;
			box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
			border-radius: 8px;
			z-index: 1;
			opacity: 1;
		}

		.dropdown-info h6 {
			margin: 0.25em;
		}
		.dropbtn {
			background: linear-gradient(side, #ffffff, lahs-blue);
			white-space: normal;
			transition: 1s;
		}

		.dropbtn svg {
			height: 50px;
			width: 50px;
		}

		.email {
			max-width: 300px;
			overflow-wrap: break-word;
		}

		.phone {
			min-width: 120px;
		}

		&:hover .dropdown-info {
			display: block;
		}
	}
</style>
