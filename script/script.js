const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// card template: da aggiungere con un ciclo per ogni oggetto dell'array teamMembers

/*
<div class="row d-flex">
    <div class="w-25">
        <img src="" class="card-img-top" alt="...">
    </div>
    <div class="col-sm-6 col-md-4 mb-3 mb-sm-0">
        <div class="card">
            <div class="card-body">
                <h5 id="name" class="card-title text-uppercase">Special title treatment</h5>
                <p id="role" class="card-text">With supporting text below as a natural lead-in to additional
                    content.</p>
                <a id="email" class="py-1">Go somewhere</a>
            </div>
        </div>
    </div>
</div>
*/



addCard();

function addCard() {
  const ourTeam = document.getElementById("our-team");
  let teamCards = "";
  //
  for(let member of teamMembers) {
    teamCards += 
    `
    <div class="col-sm-6 col-md-6 col-lg-4">
      <div class="d-flex">
        <div>
          <img src="./${member.img}" class="card-img-top" alt="${member.name}">
        </div>
        <div>
          <div class="card">
            <div class="card-body">
              <h5 id="name" class="card-title text-uppercase">${member.name}</h5>
              <p id="role" class="card-text">${member.role}</p>
              <a id="email" class="py-1">${member.email}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
  //
  ourTeam.innerHTML = teamCards;
}
