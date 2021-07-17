<script>
	import { api, queryBuilder } from './server'
	import TextField from "./Components/TextArea.svelte";
	import Select from "./Components/Select.svelte";
	import { algorithmOptions, operationOptions } from "./Models/SelectOptions.ts"
	import Text from "./Components/Text.svelte";

	let pureText = '';
	let operatedText = '';
	let selectedAlgorithm = undefined;
	let selectedOperation = undefined;

	const textParser = (text) => {
		if (text) {
			return (`${text.slice(0, text.length - 1)}do`)
		}
		return '';
	};

	const cypherText = async () => {
		const data = {
			text: pureText,
			algorithm: selectedAlgorithm.value
		}

		const res = await fetch(queryBuilder(selectedOperation.value), {
			method: "POST",
			mode: "no-cors",
			cache: "no-cache",
			body: JSON.stringify(data)
		})

		operatedText = await res.json()

		console.log(operatedText)

		return res.json()
	}
</script>

<main>
	<h1>Cypher!</h1>
	<p>Por favor, selecione se deseja cifrar ou decifrar um texto.
		<br>
		Em seguida, selecione o algoritmo de cifragem, digite o texto e clique em 'Cifrar/Decifrar'.
	</p>
	<div class="select-wrapper">
		<label>
			<Select
				label="Selecione a operação"
				options={operationOptions}
				bind:selectedValue={selectedOperation}
			/>
		</label>
		<label>
			<Select
				label="Selecione o algoritmo"
				options={algorithmOptions}
				bind:selectedValue={selectedAlgorithm}
			/>
		</label>
	</div>
	<div class="text-wrapper">
		<TextField
			bind:value={pureText}
			label={`Digite um texto para ${selectedOperation?.text.toLowerCase()}`}
		/>
		<Text text={operatedText} label={`Texto ${textParser(selectedOperation?.text.toLowerCase())}  (${selectedAlgorithm?.text})`} />
	</div>

	<button on:click={cypherText}>{selectedOperation?.text}</button>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		margin-bottom: 1rem;
	}

	p {
		font-weight: 300;
		text-align: center;
		margin-bottom: 2rem;
	}

	.select-wrapper {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

	.text-wrapper {
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}

	button {
		margin-top: 2rem;
		min-width: 100px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>