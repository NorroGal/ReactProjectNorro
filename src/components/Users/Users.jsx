import React from 'react';
import s from "./Users.module.css";
import userPhoto from '../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage } onClick={(e) => { props.onPageChanged(p) }}>{p}</span>       //про класснейм - если текущая страница равна 'p', то отрисуй нам класс 'selectedPage'
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={s.mainContainer}>
                <div className={s.first}>
                    <span>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
                        </NavLink>
                    </span>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgres.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id);
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgres.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id);
                            }}>Follow</button>}
                    </div>
                </div>
                <div className={s.second}>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {"u.location.country"}
                        </div>
                        <div>
                            {"u.location.city"}
                        </div>
                    </span>
                </div>
            </div>)
        }
    </div>
}

export default Users;



