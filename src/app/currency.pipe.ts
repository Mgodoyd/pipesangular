import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number, currencySymbol: string = '$'): string {
    // Formatea el número como moneda con el símbolo personalizado
    const formattedValue = `${currencySymbol}${value.toFixed(2)}`;
    return formattedValue;
  }
}
