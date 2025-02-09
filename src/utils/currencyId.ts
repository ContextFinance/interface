import { Currency, CAVAX, Token } from 'context-exchange-sdk'

export function currencyId(currency: Currency): string {
  if (currency === CAVAX) return 'AVAX'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
