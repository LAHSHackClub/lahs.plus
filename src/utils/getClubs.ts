export async function getClubs() {
	const resp = await fetch('http://localhost:8000/cache/club-info.json');
	const json = await resp.json();
	return json;
}

export async function getClubName() {
	const json = await getClubs();
	const data = json.data;
	const club_array = [];
	for (let i = 0; i < json.length; i++) {
		const club = json[i].Name[0].content;
		club_array.push(club);
	}

	return club_array;
}

export async function getClubDescription() {
	const json = await getClubs();
	const data = json.data;
	const club_array = [];
	for (let i = 0; i < json.length; i++) {
		const club = json[i]['Club Description'][0].content;
		club_array.push(club);
	}
	return club_array;
}
export async function cleanCombinedArray() {
	//remove undefined
	const club_array = await combineClubNameAndDescription();
	const clean_club_array = club_array.filter((c) => c !== undefined);
	const reversed = await clean_club_array.reverse();
	return reversed;
}
async function combineClubNameAndDescription() {
	const club_name = await getClubName();
	const club_description = await getClubDescription();
	const club_array = Array(club_name.length);
	for (let i = 0; i < club_name.length; i++) {
		const club = {
			name: club_name[i],
			description: club_description[i],
			id: i
		};
		club_array.push(club);
	}
	return club_array;
}

export async function getClubNameAndDescription() {
	const club = await combineClubNameAndDescription();
	return club;
}
