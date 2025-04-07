
import { Pencil, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "src/components/ui/button";
import { Card, CardHeader, CardTitle } from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import { TableBody, TableCell, TableHead, TableHeader, TableRow, Table } from "src/components/ui/table";

export function Sales() {
  return (
    <>
      <title>Dashboard | Pizza Shop</title>
      
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Frente de Caixa</h1>

        <div className="grid grid-cols-3 gap-4" >
          <Input 
            placeholder="Código do produto"
          />
          <Input 
            placeholder="Nome do produto"
          />
          <Button /*disabled={isSubmitting}*/ className="w-full" type="submit">
            Cadastrar Produto
          </Button>  
        </div>

        {/* alguma outra coisa aqui */}

        <div className="rounded-md border mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[140px]">Código do Produto</TableHead>
                <TableHead>Nome do produto</TableHead>
                <TableHead className="w-[140px]">Preço da venda</TableHead>
                <TableHead className="w-[180px]">Quantidade</TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 1 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    {/* <TableCell>
                      <Button variant="outline" size="xs">
                        <Search className="h-3 w-3" />
                        <span className="sr-only">Detalhes do pedido</span>
                      </Button>
                    </TableCell> */}
                    <TableCell className="font-mono text-xs font-medium">
                      821e78f7asdhdf128h
                    </TableCell>
                    <TableCell className="font-medium">
                      Bolachinha Bono
                    </TableCell>
                    <TableCell className="font-medium">R$ 5,00</TableCell>
                    <TableCell className="text-muted-foreground">
                      <Input placeholder=""/>
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
    </>
  )
}