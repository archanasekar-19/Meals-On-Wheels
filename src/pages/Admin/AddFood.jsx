// import { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { StoreContext } from '../../context/StoreContext';
// import './AddFood.css';


// const AddFood = ({ addFoodSubmit }) => {
//   const [foodId, setFoodId] = useState('');
//   const [foodName, setFoodName] = useState('');
//   const [foodImage, setFoodImage] = useState('');
//   const [foodPrice, setFoodPrice] = useState('');
//   const [foodDesc, setFoodDesc] = useState('');
//   const [foodCategory, setFoodCategory] = useState('');

//   const navigate = useNavigate();

//   const {addFoodItem} = useContext(StoreContext);

//   const submitForm = (e) => {
//     e.preventDefault();

//     const newFoodItem = {
//       food_id: foodId,
//       food_name: foodName,
//       food_image: foodImage,
//       food_price: foodPrice,
//       food_desc: foodDesc,
//       food_category: foodCategory,
//     };

//     addFoodItem(newFoodItem);

//     toast.success('Food Item Added Successfully');

//     return navigate('/');
//   };

//   return (
//     <section className='section'>
//       <div className='container m-auto max-w-2xl py-24'>
//         <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
//           <form onSubmit={submitForm}>
//             <h2 className='text-3xl text-center font-semibold mb-6'>Add Food Item</h2>

//             <div className='mb-4'>
//               <label
//                 htmlFor='food_id'
//                 className='block text-gray-700 font-bold mb-2'
//               >
//                 Food ID
//               </label>
//               <input
//                 type='text'
//                 id='food_id'
//                 name='food_id'
//                 className='border rounded w-full py-2 px-3 mb-2'
//                 placeholder='Food ID'
//                 required
//                 value={foodId}
//                 onChange={(e) => setFoodId(e.target.value)}
//               />
//             </div>

//             <div className='mb-4'>
//               <label className='block text-gray-700 font-bold mb-2'>
//                 Food Name
//               </label>
//               <input
//                 type='text'
//                 id='food_name'
//                 name='food_name'
//                 className='border rounded w-full py-2 px-3 mb-2'
//                 placeholder='Food Name'
//                 required
//                 value={foodName}
//                 onChange={(e) => setFoodName(e.target.value)}
//               />
//             </div>

//             <div className='mb-4'>
//               <label
//                 htmlFor='food_image'
//                 className='block text-gray-700 font-bold mb-2'
//               >
//                 Food Image
//               </label>
//               <input
//                 type='text'
//                 id='food_image'
//                 name='food_image'
//                 className='border rounded w-full py-2 px-3 mb-2'
//                 placeholder='Food Image URL'
//                 required
//                 value={foodImage}
//                 onChange={(e) => setFoodImage(e.target.value)}
//               />
//             </div>

//             <div className='mb-4'>
//               <label
//                 htmlFor='food_price'
//                 className='block text-gray-700 font-bold mb-2'
//               >
//                 Food Price
//               </label>
//               <input
//                 type='number'
//                 id='food_price'
//                 name='food_price'
//                 className='border rounded w-full py-2 px-3 mb-2'
//                 placeholder='Food Price'
//                 required
//                 value={foodPrice}
//                 onChange={(e) => setFoodPrice(e.target.value)}
//               />
//             </div>

//             <div className='mb-4'>
//               <label
//                 htmlFor='food_desc'
//                 className='block text-gray-700 font-bold mb-2'
//               >
//                 Food Description
//               </label>
//               <textarea
//                 id='food_desc'
//                 name='food_desc'
//                 className='border rounded w-full py-2 px-3'
//                 rows='4'
//                 placeholder='Food Description'
//                 value={foodDesc}
//                 onChange={(e) => setFoodDesc(e.target.value)}
//               ></textarea>
//             </div>

//             <div className='mb-4'>
//               <label
//                 htmlFor='food_category'
//                 className='block text-gray-700 font-bold mb-2'
//               >
//                 Food Category
//               </label>
//               <input
//                 type='text'
//                 id='food_category'
//                 name='food_category'
//                 className='border rounded w-full py-2 px-3 mb-2'
//                 placeholder='Food Category'
//                 required
//                 value={foodCategory}
//                 onChange={(e) => setFoodCategory(e.target.value)}
//               />
//             </div>

//             <div>
//               <button
//                 className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
//                 type='submit'
//               >
//                 Add Food Item
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default AddFood;


import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StoreContext } from '../../context/StoreContext';
import './AddFood.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddFood = ({ addFoodSubmit }) => {
  const navigate = useNavigate();
  const { addFoodItem } = useContext(StoreContext);
  const validationSchema = Yup.object().shape({
    food_id: Yup.string().required('Food ID is required'),
    food_name: Yup.string().required('Food Name is required'),
    food_image: Yup.string().required('Food Image URL is required'),
    food_price: Yup.number().required('Food Price is required').positive('Food Price must be positive'),
    food_desc: Yup.string().required('Food Description is required'),
    food_category: Yup.string().required('Food Category is required'),
  });

  return (
    <section className='section'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <Formik
            initialValues={{
              food_id: '',
              food_name: '',
              food_image: '',
              food_price: '',
              food_desc: '',
              food_category: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              addFoodItem(values);
              toast.success('Food Item Added Successfully');
              setSubmitting(false);
              navigate('/');
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <h2 className='text-3xl text-center font-semibold mb-6'>Add Food Item</h2>

                <div className='mb-4'>
                  <label htmlFor='food_id' className='block text-gray-700 font-bold mb-2'>Food ID</label>
                  <Field type='text' id='food_id' name='food_id' className='border rounded w-full py-2 px-3 mb-2' placeholder='Food ID' />
                  <ErrorMessage name='food_id' component='div' className='text-red-500 text-sm' />
                </div>

                <div className='mb-4'>
                  <label htmlFor='food_name' className='block text-gray-700 font-bold mb-2'>Food Name</label>
                  <Field type='text' id='food_name' name='food_name' className='border rounded w-full py-2 px-3 mb-2' placeholder='Food Name' />
                  <ErrorMessage name='food_name' component='div' className='text-red-500 text-sm' />
                </div>

                <div className='mb-4'>
                  <label htmlFor='food_image' className='block text-gray-700 font-bold mb-2'>Food Image</label>
                  <Field type='text' id='food_image' name='food_image' className='border rounded w-full py-2 px-3 mb-2' placeholder='Food Image URL' />
                  <ErrorMessage name='food_image' component='div' className='text-red-500 text-sm' />
                </div>

                <div className='mb-4'>
                  <label htmlFor='food_price' className='block text-gray-700 font-bold mb-2'>Food Price</label>
                  <Field type='number' id='food_price' name='food_price' className='border rounded w-full py-2 px-3 mb-2' placeholder='Food Price' />
                  <ErrorMessage name='food_price' component='div' className='text-red-500 text-sm' />
                </div>

                <div className='mb-4'>
                  <label htmlFor='food_desc' className='block text-gray-700 font-bold mb-2'>Food Description</label>
                  <Field as='textarea' id='food_desc' name='food_desc' className='border rounded w-full py-2 px-3' rows='4' placeholder='Food Description' />
                  <ErrorMessage name='food_desc' component='div' className='text-red-500 text-sm' />
                </div>

                <div className='mb-4'>
                  <label htmlFor='food_category' className='block text-gray-700 font-bold mb-2'>Food Category</label>
                  <Field type='text' id='food_category' name='food_category' className='border rounded w-full py-2 px-3 mb-2' placeholder='Food Category' />
                  <ErrorMessage name='food_category' component='div' className='text-red-500 text-sm' />
                </div>

                <div>
                  <button
                    className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                    type='submit'
                    disabled={isSubmitting}
                  >
                    Add Food Item
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default AddFood;

