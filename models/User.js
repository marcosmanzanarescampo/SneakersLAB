// models/User.js
function estDateValide(dateStr) {
    const date = new Date(dateStr);
    return !isNaN(date.getTime());
  }

export class User {
    constructor(id, name, firstName, dateNaissance, email, password, profilPic, userExpertise, dateInscription, bio, status) {
      this.id = id;
      this.name = name;
      this.firstName = firstName;
      this.dateNaissance = dateNaissance;
      this.email = email;
      this.password = password;
      this.userExpertise = userExpertise;
      this.password = password;
      this.profilPic = profilPic; 
      this.dateInscription = dateInscription;
      this.bio = bio; 
      this.status = status;
    }
  
    // Validation
    estValide() {
      if (!this.nome || this.nome.trim() === '') {
        return { valide: false, erreur: "Nom de l'utilisateur pas valide" };
      }
      if (!this.firstName || this.firstName.trim() === '') {
        return { valide: false, erreur: "Nom de l'utilisateur pas valide" };
      }      
      if (!estDateValide(this.dateNaissance)) {        
        return { valide: false, erreur: "Date de naissance de l'utilisateur pas valide" };
      }
      if (!this.email || this.email.trim() === '') {
        return { valide: false, erreur: "Email de l'utilisateur pas valide" };
      }
      if (!this.password || this.password.trim() === '') {
      return { valide: false, erreur: "Mot de passe de l'utilisateur pas valide" };
      }
      if (!this.userExpertise || this.userExpertise.trim() === '') {
        return { valide: false, erreur: "Expertise l'utilisateur pas valide" };
      }
      if (!estDateValide(this.dateInscription)) {        
        return { valide: false, erreur: "Date d'inscription de l'utilisateur pas valide" };
      }
      if (!this.bio || this.bio.trim() === '') {
        return { valide: false, erreur: "Bio de l'utilisateur pas valide" };
      }
      if (!this.status || this.status.trim() === '') {
        return { valide: false, erreur: "Status l'utilisateur pas valide" };
      }
          
      return { valide: true };
    }
  }
  