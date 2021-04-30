import matter from 'gray-matter';

const fixture = '---\nabc:xyz\nABC: XYZ\n---';
console.log('=== start');
try {
  matter(fixture);
} catch (err) {
  console.log(`Error1: ${err.name}`);
}
console.log('===');
try {
  matter(fixture);
} catch (err) {
  console.log(`Error2: ${err.name}`);
}
console.log('=== done');
