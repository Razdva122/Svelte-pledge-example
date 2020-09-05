import Pledges from './Pledges.svelte';

export interface IPledges {
	source: { _id: string, state: 'OK' | 'ERROR' | 'PROGRESS'},
	check_date: string,
	items: {
		plegde_id: string,
		in_pledge: boolean,
		pledger: string,
		pledger_name: string,
		date: {
			start: string,
			end: string,
		},
		pledgee: string,
		pledgee_name: string,
	}[],
}

export default Pledges;