import { api } from 'src/lib/axios'

export interface ProductBody {
  barcode: string
  name: string
  salePrice: number
  quantity: number
  expirationDate: string | Date

}

export async function product({ 
  barcode,
  name,
  salePrice,
  quantity,
  expirationDate 
}: ProductBody) {
  await api.post('/products', { 
    barcode,
    name,
    salePrice,
    quantity,
    expirationDate 
  })
}
