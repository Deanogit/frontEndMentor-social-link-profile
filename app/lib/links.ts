import links from '@/app/data/links.json';

export async function getAllLinks() {
  // This is where you'd write code to fetch the list
  // of models from a database. We're mocking that with
  // our JSON array of data in links.json for now.
  return links;
}
