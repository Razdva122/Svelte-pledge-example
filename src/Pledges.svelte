<svelte:options tag="pledges-block" immutable={true} />

<main>
	<div class="pledges">
		<div class="pledges__title">
			Залоги
		</div>
		<div class="pledges__subtitle">
			<pledges-base-status status={'info'}>
				<span>Залоги</span>
			</pledges-base-status>
		</div>
		{#if pledges.items.length}
			<div class="pldeges__table">
				<div class="pledges__table-head">
					<pledges-content-line
						title="Результат: " 
						value="{inPledge ? 'Автомобиль в залоге' : 'Автомобиль не в залоге'}"
						danger="{inPledge}"
					/>
					<pledges-content-line
						title="Дата проверки: " 
						value="{pledges.check_date}"
					/>
				</div>
				<pledges-divider/>
				<div class="pledges__table-body">
					{#each pledges.items as pledge, id}
						<div>
							<div class="pledges__table-body-el-index">
								{id + 1}
							</div>
							<div class="pledges__table-body-line">
								<pledges-content-line
									title="Номер залога: " 
									value="{pledge.plegde_id}"
								/>
								<pledges-content-line
									title="Дата возникновения: " 
									value="{pledge.date.start}"
								/>
							</div>
							<div class="pledges__table-body-line">
								<pledges-content-line
									title="Статус: " 
									value="{pledge.in_pledge ? 'В залоге' : 'Вышла из залога'}"
								/>
								<pledges-content-line
									title="Дата исключения: " 
									value="{pledge.date.end}"
								/>
							</div>
							<div class="pledges__table-body-line">
								<pledges-content-line
									title="Тип залогодателя: " 
									value="{pledge.pledger}"
								/>
								<pledges-content-line
									title="Тип залогодержателя: " 
									value="{pledge.pledgee}"
								/>
							</div>
							<div class="pledges__table-body-line">
								<pledges-content-line
									title="ФИО: " 
									value="{pledge.pledger_name}"
								/>
								<pledges-content-line
									title="Наименование: " 
									value="{pledge.pledgee_name}"
								/>
							</div>
						</div>
						<pledges-divider/>
					{/each}
				</div>
			</div>
		{/if}
		<div class="pledges__additional-info">
			<p class="pledges__additional-info-text">
				Проверка выполняется по реестру залогов в Федеральной нотариальной палате. Отсутствие данных в реестре не
				означает, что автомобиль не заложен владельцем. Возможна ситуация, когда банк не подал данные в реестр
				залогов или они не успели в нем появиться.
			</p>
			<p class="pledges__additional-info-text">
				Рекомендуем заказать у нотариуса заверенную выписку из реестра залогов. В случае, если после покупки
				выяснится, что автомобиль числится в залоге, суд будет на вашей стороне. Нотариально заверенный документ
				докажет, что вы добросовестный покупатель.
			</p>
		</div>
	</div>
</main>

<script lang="ts">
	import BaseStatus from './BaseStatus.svelte';
	import Divider from './Divider.svelte';
	import ContentLine from './ContentLine.svelte';

	import type { IPledges } from './main';

	export let pledges: IPledges = {
			source: {
				_id: 'pledge',
				state: 'OK'
			},
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
		};

	$: inPledge = pledges.items.some((item) => item.in_pledge);
	let pledgeStatus: 'neutral' | 'danger' | 'progress' | 'error';
	$: { 
		if (pledges.items.length) {
			pledgeStatus = inPledge ? 'danger' : 'neutral';
		} else {
			pledgeStatus = pledges.source.state === 'PROGRESS' ? 'progress' : 'error';
		}
	};
</script>

<style>
	.pledges {
		padding: 10px;
		border: 2px solid cornflowerblue;
		min-width: 600px;
		max-width: 1000px;
	}

	.pledges__title {
		font-size: 22px;
		font-weight: 500;
		margin-bottom: 5px;
	}

	.pledges__subtitle {
		margin-bottom: 10px;
	}

	.pledges__additional-info {
		margin: 10px;
		padding: 10px;
		font-size: 12px;
		border: .1rem dashed #d8d8d8;
	}

	.pledges__additional-info-text {
		font-size: 12px;
	}

	.pledges__table-head {
		display: flex;
	}

	.pledges__table-body-el-index {
		margin-bottom: 20px;
	}

	pledges-content-line {
		width: 100%;
	}

	.pledges__table-body-line {
		display: flex;
		margin-bottom: 5px;
	}
</style>