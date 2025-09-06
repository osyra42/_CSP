function performSearch() {
    const query = document.getElementById("searchQuery").value;
    if (query) {
        window.location.href = `https://www.perplexity.ai/search?q=${encodeURIComponent(query)}`;
    } else {
        alert("Please enter a search query!");
        document.getElementById("searchQuery").classList.add("error");
    }
}