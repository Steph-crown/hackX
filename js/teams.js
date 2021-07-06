const allTeams = [
    {
        teamIndex: "TEAM-1",
        teamName: "Optimisers",
        teamSector: "Real Estate",
        teamLead: "Tiwanijesu Sulaiman",
        teamMembers: [ "Tiwanijesu Sulaiman", "Obafunmilayo Lijadu", "Olumide Nwosu", "John Shodipo", "Isaac Adewunmi" ]
    },
    {
        teamIndex: "TEAM-2",
        teamName: "Learnovate",
        teamSector: "Education",
        teamLead: "Kamaldeen Adebayo",
        teamMembers: [ "Kamaldeen Adebayo", "Felix Chinemerem", "Samuel Bamgbola", "Abdulahi Adekunle", "Demola Owodunni" ]
    },
    {
        teamIndex: "TEAM-3",
        teamName: "DigiHealth",
        teamSector: "Health",
        teamLead: "Nusaybah Fuad-Gafar",
        teamMembers: [ "Nusaybah Fuad-Gafar", "Raji ademola", "Maryam Awesu", "Fawas Kareem", "Moboluwaji Popoola" ]
    },
    {
        teamIndex: "TEAM-4",
        teamName: "414",
        teamSector: "Logistics",
        teamLead: "Osemudiamen Itua",
        teamMembers: [ "Osemudiamen Itua", "Ayomide Aderonmu", "Hakeem Lawal", "Iteoluwakishi Babatunde", "Bukunmi Shonde" ]
    },
    {
        teamIndex: "TEAM-5",
        teamName: "Fierce Devs",
        teamSector: "Health",
        teamLead: "Iwinosa Igbinosa",
        teamMembers: [ "Iwinosa Igbinosa", "Joshua Paul", "Daniel Azuka", "Josiah Ben", "Fele Omolola" ]
    },
    {
        teamIndex: "TEAM-6",
        teamName: "Smart Minds",
        teamSector: "Health",
        teamLead: "Gbemisola Kotoye",
        teamMembers: [ "Gbemisola Kotoye", "Adewale David", "Anne Nwaugha", "emmanuel ugbotor" ]
    },
    {
        teamIndex: "TEAM-7",
        teamName: "404",
        teamSector: "Health",
        teamLead: "Motunrayo Ilawole",
        teamMembers: [ "Motunrayo Ilawole", "Ndubuisi Isaac", "Emmanuel Oni", "Michael Jeremy" ]
    },
    {
        teamIndex: "TEAM-8",
        teamName: "Innovation Geeks",
        teamSector: "Health",
        teamLead: "Boluwaji Akinsefunmi",
        teamMembers: [ "Boluwaji Akinsefunmi", "Adeyemi Esther", "Ogboye Omonor Emelda", "Etienne Essenoh" ]
    },
    {
        teamIndex: "TEAM-9",
        teamName: "Noob",
        teamSector: "Education",
        teamLead: "Sebastine Odeh",
        teamMembers: [ "Sebastine Odeh", "Atobiloye Hiqmat", "Boluwatife Ade-ojo", "Salaudeen Kehinde" ]
    },
    {
        teamIndex: "TEAM-10",
        teamName: "Neptune",
        teamSector: "Education",
        teamLead: "Miracle Ogunleye",
        teamMembers: [ "Miracle Ogunleye", "Okeke Johnpaul", "Eniola Alex", "Egbedokun Olayinka", "Adekomi Adeyinka" ]
    }
]

// DOM ELEMENTS
let TeamIndex, TeamName, TeamSector, TeamLead, TeamMembers, fName, gotTeam;
TeamIndex = document.querySelector('.team-index');
TeamName = document.querySelector('.team-name');
TeamSector = document.querySelector('.sector');
TeamLead = document.querySelector('.lead');
TeamMembers = document.querySelector('.tList');
mainMain = document.querySelector('.dataContainer');
fName = localStorage.getItem("fullName");


// THIS ADDS THE MEMBERS TO THE TEAM TO THE FRONTEND
let addList = (index, length) => {
    var a = 0;
    do {
        //console.log(a);
        //console.log(allTeams[index].teamMembers[a]);
        TeamMembers.innerHTML += `<li style="margin: 6px 0;">${allTeams[index].teamMembers[a]}</li>`;
        a++;
    }
    while (a < length);
}

let getTeamDetails = (fullname) => {
    //console.log(fullname);
    for(var i = 0; i < allTeams.length; i++) {
        //console.log(allTeams[i]);
        for(var j = 0; j < allTeams[i].teamMembers.length; j++) {
            //console.log(`searched ${j} in ${i} `);
            if(fullname === allTeams[i].teamMembers[j]) {
                //console.log(`got a match at ${i}, array found at ${allTeams[i]}`);
                let big = allTeams[i];
                let index = i;
                let length = allTeams[i].teamMembers.length;
                //console.log(allTeams[i]);
                gotTeam = true;
                TeamIndex.innerHTML = ` ${big.teamIndex}`;
                TeamName.innerHTML = `<span style="font-weight: bold;">Team </span> ${big.teamName}`;
                TeamSector.innerHTML = `<span style="font-weight: 700;">Sector: </span> ${big.teamSector}`;
                TeamLead.innerHTML = `<span style="font-weight: 700;">Team Lead: </span> ${big.teamLead}`;
                addList(index, length);
            } 
        }
    }
    if(gotTeam !== true) {
        mainMain.innerHTML = "<h1>Sorry, You are not part of a Team</h1>";
        mainMain.style.display = "flex";
        mainMain.style.alignItems = "center";
        mainMain.style.justifyContent = "center";
        mainMain.style.fontFamily = "Poppins";
        mainMain.style.height = "200px";
    }
}    
getTeamDetails(fName);