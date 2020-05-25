inlets = 1
outlets = 1
setinletassist(0, 'sequence')
setoutletassist(0, 'new sequence')

function list() {
	const sequenceRaw = arrayfromargs(messagename, arguments)
	post(sequenceRaw)
	const sequence = parseSequence(sequenceRaw)
	varySequence(sequence)
	//post(sequence)
	outlet(0, generateSequence(sequence))
}

function varySequence(sequence) {
	const index = Math.floor(Math.random() * (sequence.length - 1))
	const item = sequence[index]
	
	const index2 = (index + 1) % sequence.length
	const item2 = sequence[index2]
	
	const index3 = (index + 2) % sequence.length
	const item3 = sequence[index2]
	
	sequence[index] = item2
	sequence[index2] = item3
	sequence[index3] = item
}

function parseSequence(sequence) {
	return sequence.map(function(item) {
		if (item === 'x') return null
		else if (typeof item === 'number') return item
		else return item.split('-')
	})
}

function generateSequence(sequence) {
	return sequence.map(function(item) {
		if (!item) return 'x'
		else if (typeof item === 'number') return item
		else return item.join('-')
	})
}