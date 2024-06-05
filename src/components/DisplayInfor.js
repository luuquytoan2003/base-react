import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';



const DisplayInfor = (props) => {
    const { listUser } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }

    console.log(">>> call me render")

    useEffect(() => {
        if (listUser.length === 0) {
            alert("me");
        }
        console.log(">>> call me useEffect")
    }, []);
    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => { handleShowHideListUser() }}>
                    {isShowHideListUser ? "Hide" : "Show"} List Users
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {
                        listUser.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => { props.handeDeleteUser(user.id) }}>delete</button>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })
                    }
                </>
            }
        </div>
    )
}

export default DisplayInfor;