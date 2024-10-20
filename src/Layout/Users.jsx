import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {
    const loadedUsers = useLoaderData() 
    const [users , setUsers] = useState(loadedUsers);

    const handleDelete = id =>{
      console.log(id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/users/${id}`, {
            method:"DELETE"
          })
          .then(res=> res.json())
          .then(data => {
            if(data.deletedCount > 0){
               Swal.fire({
                  title: "Deleted!",
                  text: "User has been deleted.",
                  icon: "success"
                });
                // Remove the user from the UI
                const remainingUsers = users.filter(user=> user._id !==id);
                setUsers(remainingUsers);
            };
          })
          
         
        }
      });
    }
    return (
        <div>
            <h1 className="text-5xl text-center">Users Email : {loadedUsers.length}</h1>
            <div className="overflow-x-auto font-raleway text-black w-2/3 mx-auto my-10">
  <table className="table">
    {/* head */}
    <thead className="text-lg text-[#331A15]">
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last LoggedIn</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user => <tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td></td>
            <td><button onClick={()=>handleDelete(user._id)} className=" text-lg bg-[#7e2715] p-2 text-white rounded-md" >X</button></td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;