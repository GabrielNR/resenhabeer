import { api } from 'src/lib/axios'

export interface ListProductResponse {
  products: {
    barcode: string,
    name: string,
    salePrice: number,
    quantity: number,
    expirationDate: Date,
    created_at: Date
  }[]
}

export async function listProduct() {
  const response = await api.get<ListProductResponse>('/list')

  return response.data
}
