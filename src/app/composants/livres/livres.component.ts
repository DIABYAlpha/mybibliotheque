import { Component, OnInit } from '@angular/core';
import {BibliothequeService} from 'src/app/services/bibliotheque.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {

  livres : any = [];
  pages : any  = [1,2,3];
//Methode de rechercher par catégories(genre)-----------
  genre : any = ["Fantastique","Policier","Harlequin","Manga"]

  lupdate = {
    id : "",
    titre:"",
    auteur:"",
    genre :"",
    image :"",
    price:""
  }

  // message d'erreur si aucun livre trouvé
  errorState: boolean = false;
  errorMessage: any;

  // eventsSubscription = pour observer l'événement recherche de livres depuis le composant app (navbar)
  constructor(private bibliothequeService : BibliothequeService ) { }

  ngOnInit(): void {
    this.books();
    this.pagination(0);  
  }

  books() {

    // livres non filtrés
      this.bibliothequeService.getbooks().subscribe(data =>{
        this.livres= data;
        console.log(this.books);
      })
    
  }

  deleteLivre(id: any) {
    console.log(id);
    this.bibliothequeService.delete(id).subscribe(() => {
      console.log("livres with id : "+id + "deleted");
      this.books()
    })
  }


  edit(l:any) {
    this.lupdate.id=l._id
    this.lupdate.titre=l.titre
    this.lupdate.auteur=l.auteur
    this.lupdate.genre=l.genre
    this.lupdate.image=l.image
    this.lupdate.price=l.price
  }

  miseJourL() {
    console.log(this.lupdate);
    
    this.bibliothequeService.edit(this.lupdate).subscribe(() => {
      this.books();
      console.log('Vos modifications ont été effectuées');
      
    } )
  }

  
  pagination(l:any) { console.log(l);
  
    this.bibliothequeService.onpagination(l).subscribe(data=> {
      this.livres= data
      
  
    })
  }

  findByGenre(g:any) {
    this.bibliothequeService.findbycat(g).subscribe(data=>{
      this.livres = data
    })
  }

  findbyprice(f:any){
    this.bibliothequeService.keyprice(f.min,f.max).subscribe(data=>{
      this.livres = data
      
    })
  }


  findbykeyword(f:any){
    this.bibliothequeService.getkeyword(f.keyword).subscribe(data=>{
      if (data == "") {        
        this.errorState = true;
        this.errorMessage = "Aucun livre trouvé"
      }

      this.livres = data
      console.log(f.keyword);
      
    })
  }


}
