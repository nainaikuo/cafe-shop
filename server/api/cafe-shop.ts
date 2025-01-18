export default defineEventHandler(async (event) => {
  try {
    const { city } = getQuery(event);
    const apiUrl = "http://cafenomad.tw/api/v1.2/cafes/";
    const apiPath = city ? `${apiUrl}${city}` : apiUrl;

    const response = await fetch(apiPath);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cafes:", error);
  }
});
