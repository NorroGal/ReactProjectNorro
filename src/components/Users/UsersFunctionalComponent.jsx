// import s from "./Users.module.css";
// import * as axios from 'axios';
// import userPhoto from '../../assets/images/user.jpg'


// let Users = (props) => {

//     let getUsers = () => {
//         if (props.users.length === 0) {
//             axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//                 debugger;
//                 props.setUsers(response.data.items);
//             });
//         }
//     };

//     return (
//         <div>
//             <button onClick={getUsers}>Get Users</button>
//             {
//                 props.users.map(u => <div key={u.id} className={s.mainContainer}>
//                     <div className={s.first}>
//                         <span>
//                             <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} />
//                         </span>
//                         <div>
//                             {u.followed
//                                 ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
//                                 : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
//                         </div>
//                     </div>
//                     <div className={s.second}>
//                         <span>
//                             <div>
//                                 {u.name}
//                             </div>
//                             <div>
//                                 {u.status}
//                             </div>
//                         </span>
//                         <span>
//                             <div>
//                                 {"u.location.country"}
//                             </div>
//                             <div>
//                                 {"u.location.city"}
//                             </div>
//                         </span>
//                     </div>
//                 </div>)
//             }
//         </div>
//     )
// };

// export default Users;