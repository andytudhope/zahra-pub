const fs = require('fs');
const path = require('path');

// Read the books data
const booksFile = fs.readFileSync(path.join(__dirname, '../src/lib/books.ts'), 'utf8');

// Extract the books array using regex
const booksMatch = booksFile.match(/export const books: Book\[] = (\[[\s\S]*?\]);/);
const booksData = eval(booksMatch[1].replace(/export const books: Book\[] = /, ''));

// Create search index
const searchIndex = booksData.map(book => ({
  id: book.id,
  title: book.title,
  description: book.description.replace(/<[^>]*>/g, ''), // Remove HTML tags
  category: book.category
}));

// Write the search index to a JSON file
fs.writeFileSync(
  path.join(__dirname, '../public/search-index.json'),
  JSON.stringify(searchIndex, null, 2)
);

console.log('Search index generated successfully!');