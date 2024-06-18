import axios from 'axios';
import { useState } from 'react';
import { ToastHeader } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
import { toast } from 'react-toastify';


function ModalCreateUser(props) {
    const { show, setShow } = props

    const handleClose = () => {
        setShow(false)
        setUser({
            username: '',
            email: '',
            password: '',
            role: 'USER',
            userImage: '',
        })
        setPreviewImage('');
    };

    const [previewImage, setPreviewImage] = useState('');
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        role: 'USER',
        userImage: '',

    })
    const handleUploadImage = (e) => {
        if (e.target && e.target.files && e.target.files[0]) {
            setPreviewImage(URL.createObjectURL(e.target.files[0]));
            setUser({
                ...user,
                userImage: e.target.files[0]
            })
        }
    }
    const handSetInputValue = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handSubmitCreateUser = async () => {
        //validate
        const isValidEmail = validateEmail(user.email);
        if (!isValidEmail) {
            toast.error('invalid email');
            return;
        }
        if (!user.password) {
            toast.error('invalid password');
            return;
        }


        const data = new FormData();
        data.append('email', user.email);
        data.append('password', user.password);
        data.append('username', user.username);
        data.append('role', user.role);
        data.append('userImage', user.userImage);

        let res = await axios.post('http://localhost:8081/api/v1/participant', data);
        console.log(">>>check response", res);
        if (res.data && res.data.EC === 0) {
            toast.success(res.data.EM);
            handleClose()
        }
        if (res.data && res.data.EC !== 0) {
            toast.error(res.data.EM);
        }
    }
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose} size='lg' className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name='email'
                                onChange={handSetInputValue}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name='password'
                                onChange={handSetInputValue}
                            // value={user.password}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">User Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name='username'
                                onChange={handSetInputValue}
                            // value={user.name}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Role</label>
                            <select
                                className="form-select"
                                name='role'
                                onChange={handSetInputValue}
                            >
                                <option value={'USER'}>USER</option>
                                <option value={'ADMIN'}>ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <label
                                className='form-label label-upload'
                                htmlFor='labelUpload'

                            >
                                <FcPlus /> Upload File Image
                            </label>
                            <input
                                type='file'
                                hidden id='labelUpload'
                                onChange={(e) => handleUploadImage(e)}
                            />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <span>preview image</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handSubmitCreateUser()} >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalCreateUser;