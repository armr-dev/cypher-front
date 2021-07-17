export const api = "https://cypher-api-go.herokuapp.com"
// export const api = "http://localhost:8080"

export const queryBuilder = (query) => {
  return `${api}/${query}`;
}