// import { MonthRevenueCard } from './components/month-revenue-card'
// import { MonthOrdersAmountCard } from './components/month-orders-amount-card'
// import { DayOrdersAmountCard } from './components/day-orders-amount-card'
// import { MonthCanceledOrdersAmountCard } from './components/month-canceled-orders-amount-card'
// import { RevenueChart } from './components/revenue-chart'
// import { PopularProductsChart } from './components/popular-products-chart'

import { DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle } from "src/components/ui/card";
import { RevenueChart } from "./components/revenue-chart";
import { PopularProductsChart } from "./components/popular-products-chart";

export function Dashboard() {
  return (
    <>
      <title>Dashboard | Pizza Shop</title>
      
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4" >
          <Link to="/products">
            <Card className="h-36">
              <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold">
                  Cadastro de Produtos 
                </CardTitle>
                {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
              </CardHeader>
            </Card>
          </Link>
          <Card className="h-36">
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-semibold">
                Vendas 
              </CardTitle>
              {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
          </Card>
          <Card className="h-36">
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-semibold">
                Realizar Venda 
              </CardTitle>
              {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
          </Card>
          <Card className="h-36">
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-semibold">
                Entrada e Saída
              </CardTitle>
              {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
          </Card>
            


          {/* <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard /> */}
          
        </div>

        <div>
          <h6>Em Desenvolvimento</h6>
          <div className="grid grid-cols-9 gap-4">
            <RevenueChart />
            <PopularProductsChart />
          </div>
        </div>
      </div>
    </>
  )
}