import { get, writable } from 'svelte/store';

interface Club {
	name: string;
	description: string;
	id: number;
}
const clubStore = writable({
	clubs: [],
	selectedClub: null,
	selectedClubId: null,
	selectedClubName: null,
	selectedClubDescription: null
});
export const fetchClubs = async (): Promise<Club[]> => {
	const resp = await fetch('http://localhost:8000/cache/club-info.json');
	const clubs = await resp.json();
	const loadedClubs = clubs.map((club, id: number) => {
		return {
			name: club.Name[0].content,
			description: club['Club Description'][0].content,
			id: id
		};
	});

	clubStore.update((clubs) => {
		return {
			clubs: loadedClubs,
			selectedClub: loadedClubs[0],
			selectedClubId: loadedClubs[0].id,
			selectedClubName: loadedClubs[0].name,
			selectedClubDescription: loadedClubs[0].description
		};
	});

	return loadedClubs;
};
export async function fetchClub(id: number): Promise<Club> {
	const clubs = await fetchClubs();
	return clubs[id];
}
// To get id we need to get the index of the club and then reutrn the id for that club and then we can use it in the Club component to render the list of them all in in clubs.
export const getClubById = (id: number): Club => {
	const clubs = get(clubStore).selectedClub;
	return clubs.id === id ? clubs : clubs[id];
};
//Gets the id of the selected club from the index of the club in the array
export const getClubId = (clubs: Club[], selectedClub: Club): number => {
	return clubs.indexOf(selectedClub);
};
