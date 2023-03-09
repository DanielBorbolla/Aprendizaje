import { useNavigate, Form, useActionData, redirect } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'
import { agregarCliente } from '../data/Clientes'


export async function action({ request }) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  const email = formData.get("email")
  //Validación
  const errores = []
  if (Object.values(datos).includes('')) {
    errores.push('Todos los campos son requeridos')
  }
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if (!regex.test(email)) {
    errores.push('ingrese un email válido')
  }
  if (errores.length > 0) {
    return errores
  }
  await agregarCliente(datos)
  return redirect('/')
}
function NuevoCliente() {
  const errores = useActionData()
  console.log(errores)
  const navigate = useNavigate()
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Nuevo Cliente</h1>
      <p className="mt-3">llena todos los campos para agregar nuevo cliente</p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        > Volver</button>
      </div>
      <div className="px-5 py-10 bg-white shadow rounded-md md:w-3/4 mx-auto mt-20">
        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form
          method="post"
          noValidate


        >
          <Formulario />

          <input
            type="submit"
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-xl'
            value="Registrar Cliente" />

        </Form>

      </div>
    </>
  )
}

export default NuevoCliente
