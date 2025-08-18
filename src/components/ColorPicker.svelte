<script lang="ts">
	type FinishKey = 'natural' | 'honey' | 'espresso' | 'white' | 'black';

	type Finish = {
		name: string;
		preview: string; // hex
	};

	const finishes: Record<FinishKey, Finish> = {
		natural: { name: 'Natural Clear', preview: '#D2B48C' },
		honey: { name: 'Honey Stain', preview: '#CD853F' },
		espresso: { name: 'Espresso', preview: '#3C2415' },
		white: { name: 'White Paint', preview: '#F8F8FF' },
		black: { name: 'Black Stain', preview: '#2F2F2F' }
	};

	// Selected key (typed)
	let selectedFinish = $state<FinishKey>('natural');

	// Make the object iterable for {#each}
	const finishList = Object.entries(finishes) as [FinishKey, Finish][];
</script>

<div class="space-y-6">
	<div class="rounded-xl bg-white p-6 shadow-lg">
		<h4 class="text-navy mb-4 text-lg font-bold">Available Finishes</h4>

		<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
			{#each finishList as [key, finish] (key)}
				<button
					onclick={() => (selectedFinish = key)}
					class={`group rounded-lg p-2 text-center transition 
						${selectedFinish === key ? 'ring-2 ring-gold' : 'ring-1 ring-gray-200 hover:ring-gray-300'}`}
					aria-pressed={selectedFinish === key}
					title={finish.name}
				>
					<div
						class="mx-auto mb-2 h-12 w-12 rounded-md border-2 border-gray-200"
						style:background-color={finish.preview} >
					<span class="text-navy text-xs font-medium block">{finish.name}</span>
                    </div>
				</button>
			{/each}
		</div>

		<p class="mt-4 text-sm text-gray-600">
			Selected: <span class="font-semibold">{finishes[selectedFinish].name}</span>
			<span class="ml-2 text-xs text-gray-500">({finishes[selectedFinish].preview})</span>
		</p>
	</div>
</div>
