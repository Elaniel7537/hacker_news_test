// lista hacker new
export const getHackerNewsRoute = (params: any) => {
  let url = `search_by_date?page=${params.page}`;
  if (params.hitsPerPage) url += `&hitsPerPage=${params.hitsPerPage}`;
  if (params.query) url += `&query=${params.query}`;

  return url;
};
