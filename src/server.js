export const api = "https://cypher-api-go.herokuapp.com"

export const queryBuilder = (query) => {
  return `${api}/${query}`;
}