import {Component} from '@angular/core'


@Component({
    selector:'app-card',
    templateUrl: './card.component.html',
    styleUrls: [ './card.component.scss']

})

export class CardComponent {
    title ='My Card Title'
    text: string ='Mysample text'

   imgUrl:string='https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'

    getInfo(){
        return 'This is my info'
    }

}