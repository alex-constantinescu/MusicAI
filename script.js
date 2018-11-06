const scales = {
    ionian: [2, 2, 1, 2, 2, 2, 1],
    dorian: [2, 1, 2, 2, 2, 1, 2],
    phrygian: [1, 2, 2, 2, 1, 2, 2],
    lydian: [2, 2, 2, 1, 2, 2, 1],
    mixolydian: [2, 2, 1, 2, 2, 1, 2],
    aeolian: [2, 1, 2, 2, 1, 2, 2],
    locrian: [1, 2, 2, 1, 2, 2, 2]
};

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

function scaleToNotes(scale) {
    let i = 0;
    return_notes = scale.map(interval => {
        let return_note = notes[i];
        i += interval;
        return return_note;
    });

    return_notes.push(notes[i]);

    return return_notes;
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

function playNotesArpeggiated(notes, interval) {
    let notes_audio = notes.map(getAudio);

    for (let i = 0; i < notes_audio.length; i++) {
        setTimeout(() => notes_audio[i].play(), interval * i);
    }
}

function notesToString(chord) {
    return chord.join(' ');
}

function main() {
    let scale = scales.dorian;
    let scale_notes = scaleToNotes(scale);
    console.log(notesToString(scale_notes));
    playNotesArpeggiated(scale_notes, 200);
}