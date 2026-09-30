// BASE DE DONNEES DES BIENS - Tu modifies ici !
const biens = [
  {type:"vente", prix:85, titre:"Villa 4 pièces - Angré 8ème tranche", desc:"4 chambres, 400m², piscine, titre foncier", image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600", tag:"À VENDRE", budget:"85 000 000 FCFA"},
  {type:"location", prix:0.35, titre:"Appart 3 pièces - Marcory Résidentiel", desc:"3 chambres, sécurisé, parking, 2e étage", image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600", tag:"À LOUER", budget:"350 000 FCFA / mois"},
  {type:"terrain", prix:12, titre:"Terrain 600m² - Songon Kassemblé", desc:"ACD en cours, lotissement approuvé", image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600", tag:"TERRAIN TITRÉ", budget:"12 000 000 FCFA"},
  {type:"vente", prix:120, titre:"Duplex 5 pièces - Bingerville", desc:"5 chambres, jardin, garage 2 voitures", image:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600", tag:"COUP DE COEUR", budget:"120 000 000 FCFA"},
];

const phone = "2250788540740";

function afficher(liste){
  const grid = document.getElementById("gridBiens");
  grid.innerHTML = "";
  liste.forEach(b=>{
    grid.innerHTML += `
      <div class="card" onclick="contactBien('${b.titre}')">
        <img src="${b.image}">
        <div class="card-body">
          <span class="tag ${b.type}">${b.tag}</span>
          <h3 style="margin-top:10px">${b.titre}</h3>
          <div class="price">${b.budget}</div>
          <div style="color:#666;font-size:14px">${b.desc}</div>
        </div>
      </div>`;
  });
}

function filtrer(){
  const type = document.getElementById("filterType").value;
  const budget = document.getElementById("filterBudget").value;
  let f = biens;
  if(type!="all") f = f.filter(b=>b.type==type);
  if(budget=="0-20") f = f.filter(b=>b.prix<=20);
  if(budget=="20-100") f = f.filter(b=>b.prix>=20 && b.prix<=100);
  if(budget=="100+") f = f.filter(b=>b.prix>=100);
  afficher(f);
}

function contactBien(titre){
  const url = `https://wa.me/${phone}?text=${encodeURIComponent("Bonjour Magne Invest, je veux visiter : "+titre)}`;
  window.open(url,"_blank");
}

document.getElementById("formContact").addEventListener("submit", e=>{
  e.preventDefault();
  const nom = document.getElementById("nom").value;
  const besoin = document.getElementById("besoin").value;
  const budget = document.getElementById("budget").value;
  const msg = `Bonjour Magne Invest, je suis ${nom}, ${besoin}, budget: ${budget}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,"_blank");
});

// Au chargement
afficher(biens);
// HORAIRE AUTO MAGNE INVERTI
function checkHoraire() {
  const now = new Date();
  const jour = now.getDay(); // 0=Dimanche
  const heure = now.getHours();
  const statut = document.getElementById('statut-ouvert');
  if (!statut) return;

  let ouvert = false;
  if (jour >= 1 && jour <= 5) { // Lun-Ven
    if (heure >= 8 && heure < 18) ouvert = true;
    if (heure === 18 && now.getMinutes() <= 30) ouvert = true;
  }
  if (jour === 6) { // Samedi
    if (heure >= 9 && heure < 16) ouvert = true;
  }

  if (ouvert) {
    statut.textContent = "● Ouvert maintenant";
    statut.className = "statut ouvert";
  } else {
    statut.textContent = "● Fermé - RDV possible";
    statut.className = "statut ferme-now";
  }
}
checkHoraire();
