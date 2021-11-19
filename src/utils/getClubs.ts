export async function getClubs() {
	const resp = await fetch('http://localhost:8000/cache/club-info.json');
	const json = await resp.json();
	return json;
}
interface Club {
	name: string;
	description: string;
	id: number;
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
	return clean_club_array;
}
async function combineClubNameAndDescription(): Promise<Club[]> {
	const club_name = await getClubName();
	const club_description = await getClubDescription();
	var club_array: Club[] = [];
	club_array = Array(club_name.length);
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
