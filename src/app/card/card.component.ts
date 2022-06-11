import {Component, OnInit} from '@angular/core'


@Component({
    selector:'app-card',
    templateUrl: './card.component.html',
    styleUrls: [ './card.component.scss']

})

export class CardComponent implements OnInit {
    title ='My Card Title'
    text: string ='Mysample text'
    
    disabled = false 
    textbtn = 'Enabled' 

   imgUrl:string='https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'

   
   ngOnInit(){
       setTimeout( () => {
        const t=this; 
        t.imgUrl =   'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png' 
        t.disabled = true
        t.textbtn = 'Disabled'
       },3000)
   }

    getInfo():string{
        return 'This is my info'
    }

    changeTitle(){
        this.title='This title has been changed'
    }

}