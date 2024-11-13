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


addCard();

function addCard() {
  const ourTeam = document.getElementById("our-team");
  let teamCards = "";
  //
  for(let member of teamMembers) {
    teamCards += `
    <div class="col-sm-12 col-md-6 col-lg-4">
      <div>
        <div class="card border-0">
            <div class="card-body d-flex">
                <div>
                    <img src="./${member.img}" class="card-img-top" alt="${member.name}">
                </div>
                <div class="p-2 bg-black">
                  <h5 id="name" class="card-title text-uppercase text-light">${member.name}</h5>
                  <p id="role" class="card-text text-light">${member.role}</p>
                  <a id="email" class="py-1">${member.email}</a>
                </div>  
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
  //
  ourTeam.innerHTML = teamCards;
}
