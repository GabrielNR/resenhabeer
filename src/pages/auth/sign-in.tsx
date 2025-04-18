// Imports
import { useForm } from 'react-hook-form'
import { z } from 'zod'
// import { toast } from 'sonner'
// import { useNavigate } from "react-router-dom"
// import { useMutation } from '@tanstack/react-query'

import { Button } from "src/components/ui/button"
import { Input } from "src/components/ui/input"
import { Label } from "src/components/ui/label"
import { Link } from "react-router-dom"

// import { signIn } from 'src/api/sign-in'


// Schema e Types
const signInForm = z.object({
  email: z.string().email(),
	password: z.string()
})

type SignInForm = z.infer<typeof signInForm>

// Função Principal
export function SignIn() {
	// const navigate = useNavigate()

	const {
    register,
    // handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

	// Mutation
	// const {mutateAsync: authenticate} = useMutation({
  //   mutationFn: signIn,
  // })

	// Funções 
	// async function handleSignIn(data: SignInForm) {
    // try {
      // await authenticate({ 
			// 	email: data.email,
			// 	password: data.password 
			// })

		// 	toast.success('Autenticação concluida')

		// 	navigate('/')
    // } catch (error) {
    //   toast.error('Credenciais invalidas')
    // }
  // }

	return (
	  <>

			<title>Login | Pizza Shop</title>
			<div className="p-8">
				<Button variant="ghost" asChild className="absolute right-8 top-8">
					<Link to="/sign-up" className="">
						Novo Cadastro
					</Link>
				</Button> 
				
				<div className="w-[350px] flex flex-col justify-center gap-6">
					<div className="flex flex-col gap-2 text-center">
						<h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
						<p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
					</div>

					<form 
						// onSubmit={handleSubmit(handleSignIn)}
						className="space-y-4"
					>

						<div className="space-y-2">
							<Label htmlFor="email">Seu e-mail</Label>
							<Input id="email" type="email" {...register('email')}/> 
						</div>

						<div className="space-y-2">
							<Label htmlFor="password">Sua senha</Label>
							<Input id="password" type="password" {...register('password')}/> 
						</div>

						<Button disabled={isSubmitting} className="w-full" type="submit">
							Acessar painel
						</Button>
					</form>
				</div>
			</div>
		</>
  )
}