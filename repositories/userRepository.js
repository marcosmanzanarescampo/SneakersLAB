// repositories/userRepository.js
import { openDB } from '../config/database.js';
import { Auteur } from '../models/User.js';

const bd = await openDB();

export const userRepository = {
  async findAllUsers() {

    try{
      let stmt = await bd.prepare(`
         SELECT *
         FROM users
      `);
   
      const rows = await stmt.all(); 
   
      return rows.map(row => new User(
        row.id,
        row.name,
        row.firstName,
        row.dateNaissance,
        row.email,
        row.password,    
        row.profilPic,
        row.userExpertise,
        row.dateInscription,
        row.bio,
        row.status
      )); 
    }
    catch{
      return { success: false, data: [], message: "Error || userRepository || findAllUsers:" + error };
    };  
  },
  
  // async findAuteurById(id) {
  //     try{
  //       const stmt = await bd.prepare(`
  //       SELECT A.id, A.nom, A.prenom, A.date_naissance, A.nationalite
  //        FROM auteur AS A
  //        WHERE id = ?;
  //       `);
  //       const result = await stmt.get(id);
  
  //      // Transformation en instances de classe
  //       return new Auteur(
  //           result.id,
  //           result.nom,
  //           result.prenom,
  //           result.data_naissance,
  //           result.nationalite    
  //       ); 
  //     }
  //     catch{
  //       return { success: false, data: id, message: "Error || auteurRepositoryService || findAuteurById:" + error };
  //     }      
  // },

  // async createAuteur(auteur) {
  //   try{
  //     const stmt = await bd.prepare(`
  //       INSERT INTO auteur (nom, prenom, date_naissance, nationalite)
  //       VALUES (?, ?, ?, ?)
  //     `);
  
  //     const result = await stmt.run(
  //       auteur.nom,
  //       auteur.prenom,
  //       auteur.data_naissance,
  //       auteur.nationalite  
  //     );
  
  //     return { success: true, data: auteur, message: "" };
  //   }
  //   catch(error){
  //     return { success: false, data: [], message: "Error || auteurRepository || createAuteur:" + error };
  //   }
  // },

  // async deleteAuteur(id){
  //   try{
  //     let stmt = await bd.prepare(`
  //        DELETE 
  //        FROM auteur
  //        WHERE id = ?
  //     `);
   
  //     const rows = await stmt.run(id); 

  //     return { success: true, data: id, message: "" };
  //   }
  //   catch{
  //     return { success: false, data: [], message: "Error || auteurRepository || deleteAuteur:" + error };
  //   }; 
  // },
  
  // async updateAuteur(auteur, id) {
  //   try{
  //     const stmt = await bd.prepare(`
  //       UPDATE auteur SET nom = ?, prenom = ?, date_naissance = ?, nationalite = ?
  //       WHERE id = ?
  //     `);
  
  //     const result = await stmt.run(
  //       auteur.nom,
  //       auteur.prenom,
  //       auteur.data_naissance,
  //       auteur.nationalite,
  //       id
  //     );
  
  //     return { success: true, data: auteur, message: "" };

  //   }
  //   catch(error){
  //     return { success: false, data: [], message: "Error || auteurRepository || updateAuteur:" + error };
  //   }
  // }
};