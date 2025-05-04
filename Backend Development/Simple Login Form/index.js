async function test() {
    try {
        let response = await fetch("http://localhost:3000/", { method: "GET" });
        let text = await response.text();
        console.log(text);  // Display response text from the server
    } catch (error) {
        console.error("Error occurred:", error);
    }
}
test();