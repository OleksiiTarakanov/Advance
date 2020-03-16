var generator = sequence(10, 3);
generator(); // 10
generator(); // 13
var generatorTwo = sequence(7, 1);
generatorTwo(); // 7
generator(); // 16
generatorTwo(); // 8
generatorTwo(); // 9
function sequence(startNumber, step) {
 startNumber+step
 step+=step
}