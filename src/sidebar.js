import { Outlet, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./action";
import { Chat } from "./chatbot";

const Layout = () => {

    const { current_user } = useSelector(state => state)
    // console.log("Get Data", current_user)

    const [autoData, setData] = useState([]);

    const usenavigate = useNavigate('');

    const dispatch = useDispatch()

    const LoadDetail = (data) => {
        console.log(data);
        dispatch(setCurrentUser(data))
        usenavigate("/profile");
    }

    useEffect(() => {

        fetch("https://panorbit.in/api/users.json").then((res) => {
            return res.json();
        }).then((resp) => {
            setData(resp);
        }).catch((err) => {
            console.log(err.message);
        })

    }, [usenavigate]);

    return (
        <>


            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse">
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">

                        <ul id="collapseExample1" className="collapse show list-group list-group-flush">
                            <li className="list-group-item py-1">
                                <a href="/profile" className="text-reset active">Profile</a>
                            </li>
                            <li className="list-group-item py-1">
                                <a href="/posts" className="text-reset">Posts</a>
                            </li>
                            <li className="list-group-item py-1">
                                <a href="/gallery" className="text-reset">Gallery</a>
                            </li>
                            <li className="list-group-item py-1">
                                <a href="/todo" className="text-reset">ToDo</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



            <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light fixed-top">

                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>

                    <ul className="navbar-nav ms-auto d-flex flex-row">

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">

                                <img src={current_user.profilepicture} className="rounded-circle" height="40" alt={current_user.profilepicture} loading="lazy" />
                                <p className="user-name-list">{current_user.name}</p>

                            </a>



                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" style={{ textAlign: 'center' }}>
                                    <img src={current_user.profilepicture} className="view-profile" alt={current_user.profilepicture} loading="lazy" />
                                    <p className="listOut"><span className="userName">{current_user.name}</span><br /><span className="userMail">{current_user.email}</span></p>

                                </a></li>
                                {autoData.users &&
                                    <>
                                        {
                                            (autoData.users).map((data, i) =>
                                                <li><button className='list-out-user' onClick={() => { LoadDetail(data) }}>
                                                    <div className="col-2">
                                                        <img className='user-pic-list' alt={data.profilepicture} src={data.profilepicture} />
                                                    </div>
                                                    <div className="col-10" style={{ textAlign: 'start', marginLeft: '5rem' }}>
                                                        <span className='user-name-list'>{data.name}</span>
                                                    </div>
                                                </button></li>
                                            )
                                        }
                                    </>}
                                <li className="mt-3" style={{ textAlign: 'center' }}><button className="logout"><a className="dropdown-item signout" href="./">Sign out</a></button></li>
                            </ul>

                        </li>
                    </ul>
                </div>

            </nav>

            <Chat />
            <Outlet />
        </>
    )
};

export default Layout;

