
import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Custom.scss';
import user1 from './pictures/user1.png';
import user2 from './pictures/user2.png';
import user3 from './pictures/photos-13323vsWmKApDZJIh 1.png';




const reviews =[
  { id: 1, name: 'Nick Name',photo: user1},
  { id: 2, name: 'Alex Pringles',photo : user2},
  { id: 3, name: 'John Signa',photo: user3 },
];




const users = [
  { id: 1, name: 'Nick Name',photo: user1},
  { id: 2, name: 'Alex Pringles',photo : user2},
  { id: 3, name: 'John Signa',photo: user3 },
  { id: 1, name: 'Nick Name',photo: user1},
  { id: 2, name: 'Alex Pringles',photo : user2},
  { id: 3, name: 'John Signa',photo: user3 },
  { id: 1, name: 'Nick Name',photo: user1},
  { id: 2, name: 'Alex Pringles',photo : user2},
  { id: 3, name: 'John Signa',photo: user3 },
  
];

const NewCustomers = () => {
  return (
    <div className='pictures'>
      <h1>NewCustomers</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.photo} alt='' />
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

// export default NewCustomers;

// const PendingReviews extends NewCustomers {
  
// }


function App(){
return(
<NewCustomers/>
)
}
export default App

