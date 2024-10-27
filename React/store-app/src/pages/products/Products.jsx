import {useForm} from 'react-hook-form'
import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc} from 'firebase/firestore'
import { db } from '../../firebase/config';
import { useEffect, useState } from 'react';
export const Products = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const [products, setProducts] = useState ([])
    const [edithId, setEdithId] = useState(null)
    const getProducts = async () => {
        const productsCollection = await getDocs(collection(db, 'products'))
        const data = productsCollection.docs.map((doc)=> ({...doc.data(), id: doc.id}))
        console.log(data)
        setProducts(data)
        /*const productsData = productsCollection.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        */
        console.log(productsCollection.docs)
        //console.log(productsData)
    }
    const addProducts= async (data) =>{
        console.log(data)
        console.log(data.name)
        console.log(parseInt(data.stock))
        console.log(parseFloat(data.price))
    let response = await addDoc(collection(db, 'products'),{
        name: data.name, price: parseFloat(data.price), stock: parseInt(data.stock)
    })
        console.log(response)
        reset()
        getProducts()
    }
    const edithProducts = (producto) => {
        console.log("editando un producto")
        console.log(producto)
        setValue('name', producto.name)
        setValue('price', producto.price)
        setValue('stock', producto.stock)
        setEdithId(producto.id)
    }
    const updateProduct =  async (data) => {
         const docRef = doc(db, 'products', edithId)
    await updateDoc(docRef, {
        name: data.name, price: parseFloat(data.price), stock: parseInt(data.stock)
        })
        setEdithId(null)
        reset()
        getProducts();
    }
    const deleteProducts = async (id) => {
        const docRef = (db, 'products', id)
        await deleteDoc(docRef)
        getProducts()
    }
    useEffect(() =>{
        getProducts()
    },[])
  return (
    <>
    <h2>Products</h2>
    <form onSubmit={edithId? handleSubmit(updateProduct):  handleSubmit(addProducts)}>
        <section>
            <label>Nombre del producto</label>
            <input type="text" {...register('name')}required />
        </section>
        <section>
            <label>Precio</label>
            <input type="text" {...register('price')}required />
        </section>
        <section>
            <label>Cantidad</label>
            <input type="text" {...register('stock')}required />
        </section>
        <button type='submit'>{edithId? 'editar' : 'guardar'}</button>
    </form>
    <main>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                </tr>
            </thead>
        </table>
        {
            /*Listar los producstos*/
            products.map((product)=>(
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>
                        <button onClick={() => {edithProducts(product)}}>Edith</button>
                        <button onClick={() =>{deleteProducts(product.id)}}>Delete</button>
                    </td>
                </tr>
            ))
        }
    </main>
    </>
  )
    }