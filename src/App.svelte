<main>
	<div class="pledges">
		<div class="pledges__title">
			Залоги
		</div>
		<div class="pledges__subtitle">
			<BaseStatus status={'danger'}>
				<span>Залоги</span>
			</BaseStatus>
		</div>
		{#if pledges.items.length}
			<div class="pldeges__table">
				<div class="pledges__table-head">
					<ContentLine 
						title="Результат: " 
						value="{inPledge ? 'Автомобиль в залоге' : 'Автомобиль не в залоге'}"
						danger="{inPledge}"
					/>
					<ContentLine 
						title="Дата проверки: " 
						value="{pledges.check_date}"
					/>
				</div>
				<Divider/>
				<div class="pledges__table-body">
					{#each pledges.items as pledge, id}
						<div>
							<div class="pledges__table-body-el-index">
								{id + 1}
							</div>
							<div class="pledges__table-body-line">
								<ContentLine 
									title="Номер залога: " 
									value="{pledge.plegde_id}"
								/>
								<ContentLine 
									title="Дата возникновения: " 
									value="{pledge.date.start}"
								/>
							</div>
							<div class="pledges__table-body-line">
								<ContentLine 
									title="Статус: " 
									value="{pledge.in_pledge ? 'В залоге' : 'Вышла из залога'}"
								/>
								<ContentLine 
									title="Дата исключения: " 
									value="{pledge.date.end}"
								/>
							</div>
							<div class="pledges__table-body-line">
								<ContentLine 
									title="Тип залогодателя: " 
									value="{pledge.pledger}"
								/>
								<ContentLine 
									title="Тип залогодержателя: " 
									value="{pledge.pledgee}"
								/>
							</div>
							<div class="pledges__table-body-line">
								<ContentLine 
									title="ФИО: " 
									value="{pledge.pledger_name}"
								/>
								<ContentLine 
									title="Наименование: " 
									value="{pledge.pledgee_name}"
								/>
							</div>
						</div>
						<Divider/>
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

	export let pledges: IPledges;

	$: inPledge = pledges.items.some((item) => item.in_pledge);
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

	.pledges__table-body-line {
		display: flex;
		margin-bottom: 5px;
	}
</style>