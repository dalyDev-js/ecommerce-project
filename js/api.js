export async function fetchData() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  if (response.status === 200) {
    return data;
  } else {
    throw new Error("Failed to fetch data");
  }
}
