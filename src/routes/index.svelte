<script>
	import '../tailwind.css';
</script>

<div class="mx-auto">
	<section class="flex flex-wrap flex-row shadow-lg flex-grow-0 rounded-lg border-gray-300 py-10 border-2">
		<div class="flex flex-col bg-white w-2/3 rounded-md">
			<h1 class="flex justify-center text-lahs-blue text-4xl font-bold mb-10">Welcome to lahs.plus!</h1>
			<div class="flex justify-center">
				<img src="../static/img/lahs-logo.png" alt="LAHS Logo" width="300" height="300">
			</div>
		</div>
		<section class="flex flex-wrap w-1/3"> 
			<section class="">
				<div class ="flex flex-col bg-lahs-blue border-gray-300 rounded-lg shadow-lg p-6 text-white">
					<details class="my-10">
						<summary class="flex justify-center align-middle text-3xl font-bold p-6 shadow-lg rounded-md">
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar2-check" viewBox="0 0 16 16">
								<path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
								<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
								<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
							</svg>
							<span class="ml-3">Attendance:</span>
							<!-- <svg><use xlink:href="/img/icons.svg#attendance"/></svg> -->
							
						</summary>
						<div class="flex justify-around mt-10 text-2xl font-semibold fill-current">
							<div class="dropdown">
								<button class="dropbtn">
									<svg class="stroke-width-2"><use xlink:href="/img/icons.svg#email"/></svg>
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
									<svg class=""><use xlink:href="/img/icons.svg#phone"/></svg>
									Phone
								</button>
								<div class="dropdown-info">
									<h6 class="text-center text-base phone">650-941-2761</h6>
								</div>
							</div>
						</div>
						<h2 class="flex justify-center text-2xl font-semibold mt-10 mb-10">Other Information:</h2>
						<div class= "flex justify-center mb-10">
							<ul class="text-base text-white">
								<li>Parents must report an absence within 48 hours of an absence.</li>
								<li>Due to technical difficulties with the phone system, they are temporarily accepting Attendance notifications from parents/guardians via email.
									Please send your email to lahs.attendance@mvla.net.</li>
								<li>The message must be sent from the parent/guardian's email account that is already on file with SIS student contact information, and include:
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
						<summary class="flex justify-center align-middle text-3xl font-bold p-6 shadow-lg rounded-md">
							<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
								width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
								preserveAspectRatio="xMidYMid meet">

								<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
								fill="#FFFFFF" stroke="none">
								<path d="M2194 4916 c-113 -26 -231 -105 -284 -191 -18 -29 -27 -34 -77 -40
								-246 -31 -402 -212 -404 -471 -1 -80 -1 -80 -35 -103 -57 -39 -147 -143 -176
								-203 -98 -201 -86 -515 27 -685 37 -56 114 -135 156 -160 26 -15 27 -20 28
								-102 2 -250 146 -423 387 -464 68 -11 75 -15 102 -52 101 -139 281 -215 444
								-187 78 14 112 29 163 73 l35 31 35 -31 c51 -44 85 -59 163 -73 163 -28 343
								48 444 187 27 37 34 41 102 52 241 41 385 213 387 465 1 48 4 88 8 88 16 0
								119 97 158 149 128 170 149 497 45 711 -29 58 -120 162 -176 201 -34 23 -34
								23 -35 103 -2 259 -158 440 -404 471 -50 6 -59 11 -77 40 -11 18 -42 53 -69
								78 -151 142 -406 166 -540 51 l-41 -36 -41 36 c-75 63 -207 89 -325 62z m193
								-212 c14 -8 35 -37 46 -62 l22 -47 0 -1005 0 -1005 -22 -47 c-11 -25 -32 -54
								-46 -63 -83 -54 -250 -7 -307 87 -19 32 -19 32 3 56 39 43 76 55 154 53 88 -2
								121 20 130 85 4 35 1 46 -24 74 -24 27 -38 33 -88 39 -141 15 -270 -37 -341
								-140 -27 -40 -30 -41 -71 -35 -91 12 -177 84 -202 168 -7 23 -13 89 -12 148 1
								126 -10 151 -91 203 -66 42 -124 106 -150 163 -46 106 -46 322 0 428 25 56 80
								116 145 159 91 61 92 62 94 203 2 102 7 134 24 174 40 93 135 150 250 150 40
								0 51 -4 73 -31 22 -26 26 -40 26 -95 0 -56 3 -67 29 -96 24 -27 36 -33 69 -33
								73 0 104 47 104 157 0 77 -28 150 -80 209 l-31 36 22 20 c73 67 209 90 274 47z
								m550 -4 c54 -24 89 -53 108 -91 13 -24 12 -28 -18 -56 -43 -40 -83 -52 -154
								-46 -52 5 -62 3 -87 -18 -18 -16 -29 -37 -33 -65 -4 -35 -1 -46 23 -73 22 -24
								42 -34 87 -42 125 -22 270 38 342 141 15 22 35 40 45 40 42 0 124 -34 159 -66
								63 -56 81 -112 84 -258 2 -141 3 -142 94 -203 65 -43 120 -103 145 -159 46
								-106 46 -322 0 -428 -26 -57 -84 -121 -150 -163 -81 -52 -92 -77 -91 -203 1
								-128 -12 -177 -63 -235 -47 -53 -123 -85 -204 -85 -47 0 -59 4 -79 26 -22 23
								-25 37 -25 95 0 61 -3 72 -28 100 -33 37 -84 43 -126 15 -36 -23 -48 -57 -48
								-138 0 -77 28 -150 81 -210 l31 -36 -31 -26 c-43 -36 -93 -56 -159 -62 -76 -7
								-117 15 -150 81 l-25 50 0 1000 c0 936 1 1003 18 1046 10 26 26 54 36 63 45
								40 135 43 218 6z"/>
								<path d="M1894 3778 c-58 -19 -127 -80 -158 -141 -57 -112 -43 -234 38 -323
								39 -43 48 -49 86 -49 35 0 47 6 72 34 26 29 29 40 25 72 -3 22 -17 53 -31 70
								-52 61 -16 141 68 153 90 14 127 107 67 167 -26 25 -36 29 -83 28 -29 -1 -67
								-6 -84 -11z"/>
								<path d="M3060 3762 c-61 -61 -25 -154 66 -168 84 -12 120 -92 68 -153 -14
								-17 -28 -48 -31 -70 -4 -32 -1 -43 25 -72 25 -28 37 -34 72 -34 38 0 47 6 86
								49 100 110 96 285 -10 390 -54 55 -107 79 -183 84 -59 4 -64 2 -93 -26z"/>
								<path d="M193 4321 c-93 -32 -153 -92 -179 -178 -22 -72 -20 -1784 1 -1908 27
								-155 96 -302 202 -429 35 -42 186 -171 458 -390 l405 -327 0 -405 c0 -444 0
								-448 60 -479 24 -13 88 -15 397 -15 347 0 370 1 400 20 21 13 35 31 42 57 14
								50 15 1149 1 1294 -18 191 -74 351 -176 506 -47 72 -126 156 -445 471 l-388
								383 -3 412 -3 412 -27 51 c-54 102 -155 166 -264 167 l-62 1 -6 65 c-11 109
								-33 159 -95 222 -87 87 -199 112 -318 70z m177 -209 c19 -19 30 -44 35 -73 5
								-36 4 -374 -5 -1349 -1 -104 25 -138 430 -561 201 -209 377 -387 392 -395 34
								-18 43 -18 83 1 36 18 55 51 55 96 0 36 15 18 -422 475 -357 374 -365 384
								-335 457 33 78 125 100 193 46 76 -59 787 -775 830 -836 59 -81 109 -192 136
								-300 22 -86 23 -101 23 -683 l0 -595 -252 -3 -253 -2 0 390 0 390 -32 35 c-18
								19 -214 179 -434 357 -221 178 -423 348 -448 378 -26 30 -67 96 -91 145 -77
								158 -75 131 -75 1122 0 483 4 883 8 889 35 51 119 59 162 16z m335 -356 c63
								-27 65 -38 65 -396 l0 -320 -54 0 c-30 0 -66 -4 -80 -10 l-26 -10 0 366 0 365
								23 9 c30 12 33 12 72 -4z"/>
								<path d="M4710 4323 c-27 -10 -67 -38 -101 -72 -62 -63 -84 -113 -95 -222 l-6
								-65 -62 -1 c-109 -1 -210 -65 -264 -167 l-27 -51 -3 -412 -3 -412 -388 -383
								c-319 -315 -398 -399 -445 -471 -100 -151 -156 -312 -176 -497 -5 -52 -10
								-362 -10 -688 0 -650 0 -646 59 -676 44 -23 747 -24 791 -1 60 31 60 35 60
								479 l0 405 407 328 c338 272 418 342 471 408 74 93 142 226 174 340 l23 80 3
								924 c3 1026 5 989 -63 1068 -74 87 -234 127 -345 86z m170 -200 c14 -9 28 -22
								32 -27 4 -6 8 -406 8 -889 0 -991 2 -964 -75 -1122 -73 -151 -62 -140 -643
								-609 -183 -148 -339 -278 -347 -289 -13 -18 -15 -84 -15 -409 l0 -388 -252 2
								-253 3 0 595 c0 582 1 597 23 683 27 108 77 219 136 300 43 61 754 777 830
								836 68 54 160 32 193 -46 27 -66 8 -100 -136 -248 -265 -273 -271 -279 -271
								-320 0 -47 13 -71 52 -91 63 -32 80 -21 295 201 226 234 264 290 263 385 -9
								975 -10 1313 -5 1349 13 86 99 130 165 84z m-396 -363 l26 -10 0 -365 0 -365
								-26 10 c-14 6 -50 10 -80 10 l-54 0 0 323 c0 354 1 360 60 389 41 21 41 21 74
								8z"/>
								<path d="M3833 1942 c-12 -9 -27 -32 -34 -49 -16 -47 13 -103 62 -121 97 -36
								173 85 100 159 -35 34 -92 39 -128 11z"/>
								</g>
								</svg>
							<span class="ml-3">CHAC and Psychological Services:</span>
						</summary>
						<h3 class="flex justify-center text-2xl mb-10 mt-20 font-bold">Community Health Awareness Council (CHAC)</h3>
						<div class="flex justify-around text-2xl font-semibold fill-current">
							<div class="dropdown">
								<button class="dropbtn">
									<svg class="stroke-width-2"><use xlink:href="/img/icons.svg#email"/></svg>
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
									<svg class=""><use xlink:href="/img/icons.svg#phone"/></svg>
									Phone
								</button>
								<div class="dropdown-info">
									<h6 class="text-center text-base phone">650-965-2020</h6>
								</div>
							</div>
						</div>
						<div class="my-10 mx-5">
							<h4>&emsp;&emsp;All of CHAC's programs are designed to protect young people from high-risk behaviors such as alcohol use,
								illicit drug use, violence, and premature sexual activity, while building personal assets such as school success, valuing diversity, maintaining good health, and 
								the ability to delay gratification; all of which will help insure that they have the greatest chance for success in life. 
								A critical component of CHAC’s work is an “integrated care” model of working with four school districts to support the psychological and emotional well-being of 
								students in K-12. All school programs are provided free of charge to students and their families. CHAC’s school-based on-site counseling services address social, 
								emotional and mental health issues affecting students’ ability to learn. Staff consultation and training services enhance student support and success in the classroom.</h4>
						</div>
					</details>
				</div>
			</section>
		</section>
		
	</section>

	
</div>

<style lang="scss">

	details:hover{
		background-color: #0258ba;
		border-radius: 0.5 rem;
	}

	a:hover{
		text-decoration: underline;
	}

	summary svg{
		width: 1em;
		height: 1em;
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
			transition: 1s;

		}

		.dropbtn svg {
			height: 50px;
			width: 50px;
		}

		.email{
			max-width: 300px;
			overflow-wrap: break-word;
		}

		.phone{
			min-width: 120px;
			
		}

		&:hover .dropdown-info {
			display: block;
			}
	}
	.element {
  			display: none;
		}

	@media (min-width: 768px) {
  		.element {
    	display: block;
  		}
	}
	
</style>
