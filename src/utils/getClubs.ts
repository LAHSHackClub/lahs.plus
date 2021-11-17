async function getClubs() {
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
