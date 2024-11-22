const userContainer = document.getElementById("user-container")

const getData = async function () {

    const output = await fetch("https://api.github.com/users?per_page=10")
    const parsed = await output.json()
    return parsed

}


getData().then((responses) => {
    console.log(responses);
    responses.forEach(response => {
        const userCard = `
                <div class="user-card">
                    <img src="${response.avatar_url}" alt="${response.login}" class="user-image">
                    <div class="user-name">${response.login}</div>
                    <a href="${response.html_url}">User Profile</a>
                </div>
            `;

        userContainer.innerHTML += userCard;




    })

});
