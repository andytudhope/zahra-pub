export function formatDescription(text: string): string {
    return text
      .split('\n\n')
      .map(paragraph => `<p>${paragraph}</p>`)
      .join('');
  }