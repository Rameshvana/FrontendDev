let searchInput = document.getElementById('searchInput');
let serchcontainer = document.getElementById('searchResults');
let spinner = document.getElementById('spinner');

function Createresults(eachobject) {

    let {
        title,
        link,
        description
    } = eachobject;

    let anchorEl = document.createElement('a');
    anchorEl.href = link;
    anchorEl.textContent = title;
    anchorEl.target = '_blank';
    anchorEl.classList.add('result-title');
    serchcontainer.appendChild(anchorEl);

    let brEl = document.createElement('br');
    serchcontainer.appendChild(brEl);

    let anchorEllink = document.createElement('a');
    anchorEllink.href = link;
    anchorEllink.textContent = link;
    anchorEllink.target = '_blank';
    anchorEllink.classList.add('result-url');
    serchcontainer.appendChild(anchorEllink);

    let brEl1 = document.createElement('br');
    serchcontainer.appendChild(brEl1);

    let anchorEldescri = document.createElement('a');
    anchorEldescri.href = link;
    anchorEldescri.textContent = description;
    anchorEldescri.target = '_blank';
    anchorEldescri.classList.add('link-description');
    serchcontainer.appendChild(anchorEldescri);

    let br123 = document.createElement('br');
    serchcontainer.appendChild(br123);

}

function displayresult(search_results) {

    spinner.classList.toggle('d-none');
    for (let eachobject of search_results) {
        Createresults(eachobject);
    }
}

searchInput.addEventListener('keydown', function() {
    if (event.key === 'Enter') {
        serchcontainer.textContent = '';
        let searchInputval = searchInput.value;
        spinner.classList.toggle('d-none');
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputval;

        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(status) {
                let {
                    search_results
                } = status;
                displayresult(search_results);
            });
    }
})