
import { useState } from 'react'
import './App.css'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useForm } from "react-hook-form";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const { register,
     handleSubmit,
      formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log("Данные формы:", data);
    // Здесь можно добавить логику для обработки данных формы
  };

  return (
    <>
    
    <div className='min-h-screen flex items-center justify-center bg-gray-200' >
      <div className='w-full max-w-md rounded-lg shadow-lg p-10 bg-white'>
        <h1 className='text-2xl font-bold text-center mb-2 '>Вход в аккаунт</h1>
        <p className='text-center text-[14px] mb-[32px] font-light'>Please login to continue to your account.</p>

      

       
          <p className='text-[14px] mb-2'>Email</p>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-3'>
          <input type="email"
          {...register("email", {
            required: "Введите ваш Email", 
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Неверный формат  Email"
            }
          })}
           placeholder='Введите ваш Email'
            className={`p-2 pr-3 w-full border-2 border-gray-300 rounded-[10px] outline-none focus:border-[#367AFF] transition duration-200
              ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#367AFF]'}
              
              `}
             />
               {errors.email && (
        <p className="text-red-500 text-sm mt-1  ">{errors.email.message}</p>
      )}
      </div>
                      

          

          <div className='relative'>
          <p className='text-[14px] mb-2'>Пароль</p>
          <input type={showPassword ? "text" : "password"}

          {...register("password", {
  required: "Пароль обязателен",
  pattern: {
    value: /^[A-Za-z0-9!@#$%^&*()_+=-]{8,}$/,
    message: "Минимум 8 символов, только английские буквы и цифры"
  }
})}
           placeholder='Введите ваш пароль'
            className={`p-2 w-full pr-10 border-2 border-gray-300 rounded-[10px] outline-none
             focus:border-[#367AFF] transition duration-200
                           ${errors.password ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#367AFF]'}

             `} />
          {errors.password &&
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

             <button 
             type="button" 
             onClick={() => setShowPassword(!showPassword)}
             className="absolute right-3 top-[40px]">

            {showPassword ? (
              <EyeSlashIcon className='w-5 h-5 text-gray-500'/>
            ) : (<EyeIcon className='w-5 h-5 text-gray-500' /> )
            }
             </button>
             
          </div>
          


      <div className='flex justify-between items-center mt-3 mb-4'>
        <div className="flex items-center ">     
    <input 
    id="default-checkbox"
    type="checkbox" 
    className="w-4 h-4 accent-blue-600 rounded focus:ring-0 cursor-pointer"/>

    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Запомнить меня</label>
            </div>
      

        
      <button className="text-sm text-[#367AFF] underline underline-offset-4 font-semibold">
        Забыли пароль?
      </button>

    
      </div>


          
    

            <div className='w-full mt-3'>
          <button type='submit' className='bg-[#367AFF] px-2 py-3 text-white font-semibold text-[18px] w-full rounded-[10px] hover:bg-[#386fdf] mb-5 mt-3'>Войти</button>
            </div>
            </form>

              <hr className="my-3" />

    {/* Нет аккаунта */}
    <div className="text-center text-sm">
      <span className="text-gray-600 text-sm">Нет аккаунта? </span>
      <button className="text-[#367AFF] underline font-semibold text-sm underline-offset-4" >Зарегистрироваться</button>
    </div>
            
      </div>
    </div>

 </>
  )
}

export default App
