const fs = require('fs');
const path = require('path');

function readBooksFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Match the export const {something}Books array
  const booksMatch = content.match(/export const \w+Books: Book\[] = (\[[\s\S]*?\]);/);
  if (!booksMatch) return [];
  
  try {
    // Remove TypeScript types before evaluating
    const cleanedContent = booksMatch[1].replace(/: Book/g, '');
    return eval(cleanedContent);
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error);
    return [];
  }
}

// Get all book data files
const dataDir = path.join(__dirname, '../src/lib/books/data');
const bookFiles = fs.readdirSync(dataDir)
  .filter(file => file.endsWith('.ts'));

// Combine all books from different files
const allBooks = [];
bookFiles.forEach(file => {
  const filePath = path.join(dataDir, file);
  const books = readBooksFromFile(filePath);
  allBooks.push(...books);
});

// Create search index
const searchIndex = allBooks.map(book => ({
  id: book.id,
  title: book.title,
  description: book.description.replace(/<[^>]*>/g, ''), // Remove HTML tags
  category: book.category,
}));

// Write the search index to a JSON file
fs.writeFileSync(
  path.join(__dirname, '../public/search-index.json'),
  JSON.stringify(searchIndex, null, 2)
);

console.log(`Search index generated with ${searchIndex.length} books!`);
console.log('Files processed:', bookFiles.join(', '));