export async function getClubName() {
	const resp = await fetch('http://localhost:8000/cache/club-info.json');
	const json = await resp.json();
	console.log(json);
	const data = json.data;
	const club_array = [];
	for (let i = 0; i < json.length; i++) {
		const club = json[i].Name[0].content;
		club_array.push(club);
	}
	console.log(club_array);

	return club_array;
}
