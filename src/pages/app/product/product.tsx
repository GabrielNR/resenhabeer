import { Pencil, Search, X } from "lucide-react";
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from '@tanstack/react-query'
import { toast } from "sonner";
import { useEffect, useState } from "react";
import ScanbotSDK from "scanbot-web-sdk/ui";

// import { Calendar } from "src/components/ui/calendar";
// import { Dialog, DialogTrigger } from "src/components/ui/dialog";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "src/components/ui/table";

import { product } from 'src/api/product'
import { listProduct } from 'src/api/listProduct'
import { useNavigate } from "react-router-dom";
import { Pagination } from "src/components/pagination";

const productForm = z.object({
  barcode: z.string(),
  name: z.string(),
  salePrice: z.number(),
  quantity: z.number(),
  expirationDate: z.string(),
})

type ProductForm = z.infer<typeof productForm>

export function Product() {
  const navigate = useNavigate()
  
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ProductForm>()

	const {mutateAsync: products} = useMutation({
    mutationFn: product,
  })

  const {data: result} = useQuery({
    queryKey: ['list'],
    queryFn: listProduct,
  })

  	// Funções 
	async function handleProduct(data: ProductForm) {
    try {
      console.log(data)

      await products({ 
				barcode: data.barcode,
        name: data.name,
        salePrice: Number(data.salePrice),
        quantity: Number(data.quantity),
        expirationDate: new Date()
			})

      toast.success('Cadastro realizado com sucesso')


    } catch (error) {
      toast.error('Cadastro nao realizado')
    }
  }

  // // Codigo de barra
  const [scanResult, setScanResult] = useState<string>("");

  useEffect(() => {
    const init = async () => {
      await ScanbotSDK.initialize({
        licenseKey: "",
        enginePath: "/wasm/"
      });
    };

    init();
  }, []);
  
  const startScanner = async () => {
    const config = new ScanbotSDK.UI.Config.BarcodeScannerScreenConfiguration();
          
    const result = await ScanbotSDK.UI.createBarcodeScanner(config);
        
    if (result && result.items.length > 0) {
      setScanResult(result.items[0].barcode.text);
    }
    
    return result;
  }

  return (
    <>
      <title>Dashboard | Pizza Shop</title>
      
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Cadastro de Produtos</h1>
        
        {/* <form onSubmit={handleSubmit(handleProduct)}> */}
          <div className="grid grid-cols-4 gap-4" >
            <button onClick={startScanner}>Start Scanner</button>
            <Input 
              id="barcode" 
              type="text" 
              placeholder="Código do produto"
              {...register('barcode')}
              value={scanResult}
            />
            <Input 
              id="name" 
              type="text" 
              placeholder="Nome do produto"
              {...register('name')}
            />
            <Input 
              id="salePrice"
              type="text"
              placeholder="Preço produto"
              {...register('salePrice')}
            />
            <Input
              id="quantity"
              type="text"
              placeholder="Quantidade"
              {...register('quantity')}
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {/* <Calendar 
              
            /> */}
            <Button /*disabled={isSubmitting}*/ className="w-full mt-4" type="submit">
              Cadastrar Produto
            </Button>
          </div>
        {/* </form> */}

        <div className="mt-6">
          <h1 className="text-2xl font-bold tracking-tight mb-4">Listagem de Produtos</h1>
          <div className="grid grid-cols-3 gap-4">
            <Input 
              placeholder="Código do produto"
            />
            <Input 
              placeholder="Nome do produto"
            />
            <Button /*disabled={isSubmitting}*/ className="w-full" type="submit">
              Listar Produto
            </Button>
          </div>
            
          <div className="rounded-md border mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Código do Produto</TableHead>
                <TableHead>Nome do produto</TableHead>
                <TableHead className="w-[140px]">Preço da venda</TableHead>
                <TableHead className="w-[180px]">Quantidade</TableHead>
                <TableHead className="w-[140px]">Data de Vencimento</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {result?.products.map((product) => {
                return (
                  <TableRow key={product.barcode}>
                    <TableCell>
                      <Button variant="outline" /*size="xs"*/>
                        <Search className="h-3 w-3" />
                        <span className="sr-only">Detalhes do pedido</span>
                      </Button>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                      {product.barcode}
                    </TableCell>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell className="font-medium">R$ {product.salePrice}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {product.quantity}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {/* {product.expirationDate} */}
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" /*size="xs"*/>
                        <Pencil className="mr-1 h-2 w-2" />
                        Editar
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" /*size="xs"*/>
                        <X className="mr-1 h-2 w-2" />
                        Cancelar
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
          </div>
        </div>

        <Pagination pageIndex={0} totalCount={105} perPage={10}/>
      </div>
    </>
  )
}