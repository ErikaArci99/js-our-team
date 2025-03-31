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


// funzione che mi crea la singola card del membro
const createMemberCard = (member) => {
    const card = `<div class="col-12 col-md-6 col-lg-4">
                <div class="team-card bg-black d-flex">
                    <div class="card-img width-img">
                        <img class="img-fluid" src="./${member.img}" alt="">
                    </div>
                    <div class="card-text d-flex flex-column justify-content-between my-2 mx-3">
                        <span class="text-light fs-4 fw-bold">${member.name}</span>
                        <span class="text-light">${member.role}</span>
                        <span class="text-info">${member.email}</span>
                    </div>
                </div>
            </div>`;
}

// ciclo array members
for (let i = 0; i < teamMembers.length; i++){
    createMemberCard(teamMembers[i])
}