const notes = ['C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5'];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getAudio(note) {
    return new Audio(`notes/Piano.pp.${note}.mp3`);
}

function playChord(notes) {
    notes.map(getAudio).map(a => a.play());
}

function getRandomChord(n) {
    let note_indeces = [];

    for (let i = 0; i < n; i++) {
        do {
            note_index = getRandomInt(notes.length);
        } while (note_indeces.indexOf(note_index) !== -1);
        note_indeces.push(note_index);
    }

    note_indeces.sort();
    return note_indeces.map(note_index => notes[note_index]);
}

function playChordArpeggiated(notes, interval) {
    let notes_audio = notes.map(getAudio);

    for (let i = 0; i < notes_audio.length; i++) {
        setTimeout(() => notes_audio[i].play(), interval * i);
    }
}

function chordToString(chord) {
    return chord.join(' ');
}

function main() {
    chords = {
        Dm7: ['D4', 'F4', 'A4', 'C5'].reverse(),
        Cmaj7: ['C4', 'E4', 'G4', 'B4', 'C5']
    }

    //playChordArpeggiated(chords.Cmaj7, 200);
    //setTimeout(() => playChordArpeggiated(chords.Dm7, 250), 1500);

    let chord = getRandomChord(3);
    playChordArpeggiated(chord, 150);
    console.log(chordToString(chord));
}