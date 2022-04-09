import {useForm, SubmitHandler} from 'react-hook-form'
import {IProduct} from "../type/product"
import {useNavigate} from "react-router-dom"

type AddProductProps = {
    onAdd: (product: IProduct)=> void
}
type TInputs = {
    name: String,
    price: number,
    img: String
}
const AddProduct = (props: AddProductProps) => {
    const {register, handleSubmit, formState:{errors} } = useForm<TInputs>()
    const Navigate = useNavigate();
    const onSubmit: SubmitHandler<TInputs> = (data) =>{
        props.onAdd(data)
        Navigate('/admin/products')
    }
  return (
    <div>
        <h2 className='text-2xl font-[600] text-center py-5'>Add Product</h2>
        <form className="mt-8 space-y-6 w-3/5 mx auto" onSubmit={handleSubmit(onSubmit)}>
            <div className='rounded-md shadow-sm -space-y-px'>
                <label className="sr-only">Product Name</label>
                <input type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Tên sản phẩm" {...register('name')} />
            </div>
            <div className='rounded-md shadow-sm -space-y-px'>
                <label className="sr-only">Product Images</label>
                <input type="file" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Tên sản phẩm" {...register('img')} />
            </div>
            <div className='rounded-md shadow-sm -space-y-px'>
                <label className="sr-only">Product Price</label>
                <input type="number" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Tên sản phẩm" {...register('price')} />
            </div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#6F4E37] hover:bg-stone-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Thêm
             </button>
        </form>
    </div>
  )
}

export default AddProduct