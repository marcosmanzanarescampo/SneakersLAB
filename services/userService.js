// services/userService.js
import { userRepository } from '../repositories/userRepository.js';
import { Auteur } from '../models/User.js';

export const userService = {
  getAllUsers() {
    try{
      // Récuperation de tous les utilisateurs de la BBDD
      return userRepository.findAllUsers();
    }
    catch(error){
      throw new Error('Error || userService || getAllUsers:' + error);
    }
  },
  
//   getAuteurById(id) {
//     try{    
//     // Récuperation d'un auteur de la BBDD par son id
//     return auteurRepository.findAuteurById(id);
//     }
//     catch(error){
//       console.log('Error || auteurService || getAllAuteurs:' + error);
//       throw new Error('Error || auteurService || getAllAuteurs' + error);
//     }
//   },

//   createAuteur(auteurData) {
//     try{
//       const nouveauAuteur = new Auteur(
//         null, // ID sera généré par la base de données
//         auteurData.nom,
//         auteurData.prenom,
//         auteurData.date_naissance || null,        
//         auteurData.nationalite
//       );
  
//       // Validation via la méthode du modèle
//       const validation = nouveauAuteur.estValide();
//       if (!validation.valide) {
//         throw new Error(validation.erreur);
//       }
  
//       // Sauvegarde via repository
//       return auteurRepository.createAuteur(nouveauAuteur);    
//     }
//     catch(error){
//       console.log('Error || auteurService || createAuteur:' + error);
//       throw new Error('Error || auteurService || createAuteur' + error);
//     }
//   },

//   deleteAuteur(id){
//     try{
//       // Suppresion d'un auteur avec id = id
//       return auteurRepository.deleteAuteur(id);
//     }
//     catch(error){
//       console.log('Error || auteurService || deleteAuteur:' + error);
//       throw new Error('Error || auteurService || deleteAuteur:' + error);
//     }
//   },

//   updateAuteur(auteurData, id) {
//     try{
//       const nouveauAuteur = new Auteur(
//         null, // ID sera généré par la base de données
//         auteurData.nom,
//         auteurData.prenom,
//         auteurData.date_naissance || null,        
//         auteurData.nationalite
//       );
  
//       // Validation via la méthode du modèle
//       const validation = nouveauAuteur.estValide();
//       if (!validation.valide) {
//         throw new Error(validation.erreur);
//       }
  
//       // Sauvegarde via repository
//       return auteurRepository.updateAuteur(nouveauAuteur, id);     
//     }
//     catch(error)
//     {
//       console.log('Error || auteurService || updateAuteur:' + error);
//       throw new Error('Error || auteurService || updateAuteur:' + error);
//     }
//   }
};
