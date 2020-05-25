inlets = 1
outlets = 1
setinletassist(0,'sequence, bang')
setoutletassist(0,'items')

var sequence = []

function msg_int(i) {
	const item = sequence[i]
	if (!item) return
	
	item.forEach(function(n) {
		outlet(0, n)
	})
}

function set(sequenceRaw) {
	post('setting sequence: ' + sequenceRaw)
	sequence = parseSequence(sequenceRaw)
}

function parseSequence(sequence) {
	return sequence.split(' ').map(function(item) {
		if (item === 'x') return null
		else return item.split('-')
	})
}

function generateSequence(sequence) {
	return sequence.map(function(item) {
		if (!item) return 'x'
		else return item.join('-')
	}).join(' ')
}