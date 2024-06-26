import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, getUser, updateUser } from "../../store/reducers/userReducer";
import { User } from "../../interfaces";

export default function Admin() {
  const getData: any = useSelector((state) => state);  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  });
  const addNewUser = () => {
    let newUser = {
        name : "D"
    }
    dispatch(addUser(newUser));
  }
  const deleteUser1 = (id:number) => {
    dispatch(deleteUser(id));
  }
  const updateUSer1 = (id:number) =>{
    const newName = prompt("New Name : ");
    if(newName){
        const update = {
            id,
            name : newName
        };
        dispatch(updateUser({id,user:update}));
    }
  }
  return (
    <div>
      Admin
      {getData.user.user.map((user: User) => (
        <li key={user.id}>{user.name} <button onClick={()=>deleteUser1(user.id)}>Delete</button> <button onClick={()=>updateUSer1(user.id)}>Sửa</button></li>
      ))}
      <button onClick={addNewUser}>Add User</button>
    </div>
  );
}
