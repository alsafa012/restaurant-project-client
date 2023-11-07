import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import ShowMyAddedFoods from './ShowMyAddedFoods';
import PageTitle from '../../Components/PageTitle/PageTitle';

const MyAddedPage = () => {
     const myAddedFood = useLoaderData();
     console.log(myAddedFood);
     const [loggedUserData, setLoggedUserData] = useState([]);
     console.log(loggedUserData);
     const { user } = useContext(AuthContext);
     useEffect(() => {
          if (user) {
               const filterUser = myAddedFood.filter(
                    (person) => person.email === user.email
               );
               setLoggedUserData(filterUser);
          }
     }, [myAddedFood, user]);
     return (
          <div className='container mx-auto'>
               <PageTitle title="My Added Foods"></PageTitle>
               <h2 className='font-bold text-3xl lg:text-5xl text-center my-3'>Total Added Food: {loggedUserData.length}</h2>
               <div>
                    {
                        loggedUserData.map(data=><ShowMyAddedFoods key={data._id} data={data}></ShowMyAddedFoods>) 
                    }
               </div>
          </div>
     );
};

export default MyAddedPage;