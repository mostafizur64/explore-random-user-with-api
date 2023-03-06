const randUser = async () => {
    const url = `https://randomuser.me/api/`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.results[0].picture.large);
    showInfoForUser(data.results[0]);
}
const showInfoForUser = (data) => {
    console.log(data);
    console.log(data.picture.large);
    const randomImg = document.getElementById('user-container');
    randomImg.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('div');
    div.innerHTML += `
    <div>
    <img id="random-img" class="img" src="${data.picture.large}" alt="">
    </div>
<button class="bg-cyan-500 rounded mt-3 ml-6">Email</button>
<div class="flex gap-4 mt-4 justify-center">
    <div class="">
        <p>${data.location.street.number}</p>
        <p>Street Address</p>
    </div>
    <div class="">
        <p>${data.location.postcode}</p>
        <p>passCode</p>
    </div>
    <div class="">
        <p>${data.location.street.name}</p>
        <p>Street Name</p>
    </div>
</div>
<div class="text-center mt-4">
    <h4>${data.name.title + ' ' + data.name.first + ' ' + data.name.last}</h4>
    <p>${data.location.city}.${data.location.state}.${data.location.country}</p>
</div>
<div class="text-cyan-400 mt-4">
    <hr>
</div>
<div class="flex justify-between mt-4 px-3">
    <p>${data.phone }</p>
    <p>${data.cell}</p>
</div>

    `;
    randomImg.appendChild(div);

}
const done =()=>{

    randUser();

}

randUser();