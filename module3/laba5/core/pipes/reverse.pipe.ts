import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform{
    transform(value: Array<any>, options: any, isAddingPointInTheEnd: boolean, isAddingTwoPointInTheEnd: boolean) {
        console.log(options)
        if(!value) return;

        if(options.isAddingPointInTheEnd){
            value = value.map(item => item+"!")
        }
        if (options.isAddingTwoPointInTheEnd){
            value = value.map(item => item+"??")
        }
        return value.reverse();
    }
}