export const FetchPizzas = () => {
    return fetch('pizzas.json')
    .then((response) => response.json())
    .then((jsonResponse) => {
        jsonResponse.map((pizza) => pizza["qty"] = 0)
        return jsonResponse})
    .catch((error) => console.error(error));
}