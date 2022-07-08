import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BibliothequeService {


  // LULU
  // filtersReceiver:any;
  // LULU

  constructor(private http : HttpClient ) { }

  getbooks(){
    return this.http.get('http://localhost:3000/livres');
  }

  EnregUnlivre (livre: any) {
    return this.http.post('http://localhost:3000/livres', livre)

  }

  delete(id: any) {
    return this.http.delete('http://localhost:3000/livres/'+id)
  }

  edit(l:any){
    return this.http.put("http://localhost:3000/livres/"+l.id, l)
  }

  saveLivre(le:any){
    return this.http.post("http://localhost:3000/livres", le)
  }


  findbycat(g:any){
    return this.http.get("http://localhost:3000/livresBygenre?genre="+g)
  }

  // Methode rechercher par prix
  keyprice(min:any, max:any){
    return this.http.get(`http://localhost:3000/livresByPrice?min=${min}&max=${max}`)
  }


  // Methode rechercher par mots-clés 

  getkeyword(motcle:any){
    return this.http.get("http://localhost:3000/livresByKeyword?motCles="+motcle)
  }



  onpagination (page:any) {

    return this.http.get(`http://localhost:3000/livres?_page=${page}&_limit=${3}`)
    
  }

// get books filtered from navbar
// getFilteredBooks(){
//   let motcle: any;
//   this.getkeyword(motcle).subscribe(data =>{
//     this.filtersReceiver = data;
//     console.log(this.filtersReceiver);
//   })
// }


}
