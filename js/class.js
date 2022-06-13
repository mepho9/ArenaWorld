const main = document.querySelector(".main")
const classPage = document.title
const classes={
    "Warrior":{
        pv:100,
        attack:20,
        agility:10,
        defence:15,
        describe:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corporis sed accusamus obcaecati omnis debitis harum inventore labore natus rem, eius animi, error repellat soluta consectetur non rerum deleniti quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates modi unde impedit magni, cupiditate possimus ea quae provident animi, minus facilis consectetur aspernatur optio iure nulla, cumque iusto iste? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit sequi ducimus cum, ipsa quas minus placeat! Nam, autem incidunt similique atque sapiente omnis corrupti et, consectetur labore temporibus magni tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consectetur velit maxime, dolorum id assumenda recusandae expedita aspernatur maiores quas delectus est dolores molestias exercitationem omnis sed impedit. Animi, perferendis.`,
        image:"./images/sam1.png",
        skills:"./images/skillsTreeWarrior.png",
        trailer:"https://www.youtube.com/embed/HwQgvh2VgTs?autoplay=1&mute=1"
    },
    "Assassin":{
        pv:80,
        attack:15,
        agility:20,
        defence:15,
        describe:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corporis sed accusamus obcaecati omnis debitis harum inventore labore natus rem, eius animi, error repellat soluta consectetur non rerum deleniti quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates modi unde impedit magni, cupiditate possimus ea quae provident animi, minus facilis consectetur aspernatur optio iure nulla, cumque iusto iste? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit sequi ducimus cum, ipsa quas minus placeat! Nam, autem incidunt similique atque sapiente omnis corrupti et, consectetur labore temporibus magni tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consectetur velit maxime, dolorum id assumenda recusandae expedita aspernatur maiores quas delectus est dolores molestias exercitationem omnis sed impedit. Animi, perferendis.`,
        image:"./images/assa1.png",
        skills:"./images/skillsTreeAssassin.png",
        trailer:"https://www.youtube.com/embed/er5HGTlfuXY?autoplay=1&mute=1"
    },
    "Elf":{
        pv:75,
        attack:25,
        agility:35,
        defence:10,
        describe:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corporis sed accusamus obcaecati omnis debitis harum inventore labore natus rem, eius animi, error repellat soluta consectetur non rerum deleniti quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates modi unde impedit magni, cupiditate possimus ea quae provident animi, minus facilis consectetur aspernatur optio iure nulla, cumque iusto iste? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit sequi ducimus cum, ipsa quas minus placeat! Nam, autem incidunt similique atque sapiente omnis corrupti et, consectetur labore temporibus magni tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consectetur velit maxime, dolorum id assumenda recusandae expedita aspernatur maiores quas delectus est dolores molestias exercitationem omnis sed impedit. Animi, perferendis.`,
        image:"./images/elf.png",
        skills:"./images/skillsTreeelf.webp",
        trailer:"https://www.youtube.com/embed/qm4aGj_DvRE?autoplay=1&mute=1"
    },
    "Mage":{
        pv:70,
        attack:15,
        agility:20,
        defence:15,        
        describe:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corporis sed accusamus obcaecati omnis debitis harum inventore labore natus rem, eius animi, error repellat soluta consectetur non rerum deleniti quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates modi unde impedit magni, cupiditate possimus ea quae provident animi, minus facilis consectetur aspernatur optio iure nulla, cumque iusto iste? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit sequi ducimus cum, ipsa quas minus placeat! Nam, autem incidunt similique atque sapiente omnis corrupti et, consectetur labore temporibus magni tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consectetur velit maxime, dolorum id assumenda recusandae expedita aspernatur maiores quas delectus est dolores molestias exercitationem omnis sed impedit. Animi, perferendis.`,
        image:"./images/wizard.png",
        skills:"./images/skillsTreewizard.webp",
        trailer:"https://www.youtube.com/embed/eWCmDX21EIM?autoplay=1&mute=1"
    }
}


document.querySelector("h1").innerText = classPage

main.insertAdjacentHTML("afterbegin", `
    <div class="myContainer">
    <div class="image">
        <img src="${classes[classPage].image}" alt="image">

    </div>
    <div class="describe">
        <p><strong>PV : <span id="pv">${classes[classPage].pv}</span></strong>
        <p><strong>Attack:  <span id="attack">${classes[classPage].attack}</span></strong>
        <p><strong>Agility: <span id="agility">${classes[classPage].agility}</span></strong>
        <p><strong>Defence:  <span id="defence">${classes[classPage].defence}</span></strong>
        <p id="describe">${classes[classPage].describe}</p>
    </div>
    <div id="skillsTree">
        <img src="${classes[classPage].skills}" class="rotating" alt="image tree skills">
    </div>
    </div>
    <div id="trailer">
    <iframe width="901" height="507" src="${classes[classPage].trailer}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
`)
