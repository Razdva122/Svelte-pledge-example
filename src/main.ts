import App from './App.svelte';

export interface IPledges {
	source: { _id: string, state: 'OK' | 'ERROR' | 'PROGRESS'}[],
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

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		pledges: {
			source: [{
				_id: 'pledge',
				state: 'OK'
			}],
			check_date: '26.05.2020',
			items: [
				{
					plegde_id: '2019-004-133594-105',
					in_pledge: true,
					pledger: 'Физическое лицо',
					pledger_name: 'Скрыто ч.3 статьи 103.3',
					date: {
						start: '21.10.2019',
						end: 'по настоящее время',
					},
					pledgee: 'Юридическое лицо',
					pledgee_name: 'Скрыто ч.3 статьи 103.3',
				},
				{
					plegde_id: '2019-004-133594-105',
					in_pledge: true,
					pledger: 'Физическое лицо',
					pledger_name: 'Скрыто ч.3 статьи 103.3',
					date: {
						start: '21.10.2019',
						end: 'по настоящее время',
					},
					pledgee: 'Юридическое лицо',
					pledgee_name: 'Скрыто ч.3 статьи 103.3',
				},
			],
		}
	}
});

export default app;