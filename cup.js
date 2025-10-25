// Your cups data
    const cups = [
        { name: "Cozy Critter Mugs", image: "c1.jpg", link: "c1-details.html" },
        { name: "Mug & Snug", image: "c2.jpg", link: "c2-details.html" },
        { name: "Panda & Pals Cups", image: "c3.webp", link: "c3-details.html" },
        { name: "Pawfect Sip Cups", image: "c4.webp", link: "c4-details.html" },
        { name: "Cuppy Friends", image: "c5.jpg", link: "c5-details.html" },
        { name: "Bear Hug Mugs", image: "c6.jpg", link: "c6-details.html" },
        { name: "Snuggle Sips", image: "c7.webp", link: "c6-details.html" },
        { name: "Kawaii Sips", image: "c8.webp", link: "c7-details.html" }
    ];

    const searchInput = document.getElementById("search");
    const suggestionsContainer = document.getElementById("search-suggestions");

    searchInput.addEventListener("input", function () {
        const query = this.value.toLowerCase();
        suggestionsContainer.innerHTML = ""; // clear old results

        if (query) {
            const filtered = cups.filter(cup => cup.name.toLowerCase().includes(query));
            filtered.forEach(cup => {
                const item = document.createElement("div");
                item.classList.add("suggestion-item");
                item.innerHTML = `
                    <img src="${cup.image}" alt="${cup.name}">
                    <span>${cup.name}</span>
                `;
                item.addEventListener("click", () => {
                    window.location.href = cup.link;
                });
                suggestionsContainer.appendChild(item);
            });
        }
    });

