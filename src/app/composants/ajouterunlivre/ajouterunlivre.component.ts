import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BibliothequeService } from 'src/app/services/bibliotheque.service';


@Component({
  selector: 'app-ajouterunlivre',
  templateUrl: './ajouterunlivre.component.html',
  styleUrls: ['./ajouterunlivre.component.css']
})
export class AjouterunlivreComponent implements OnInit {

  constructor(private bibliothequeService: BibliothequeService, private router: Router) { }

  ngOnInit(): void {
  }

  saveLivre(livre: any) {
    let data = livre.value
    console.log(data); console.log("les données ont été enregistrées");
    this.bibliothequeService.EnregUnlivre(data).subscribe(data => {
      this.router.navigate(['/livres']);
    })
  }

}
