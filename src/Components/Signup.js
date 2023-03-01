import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './Signup.css'
import { Context } from "./Context";

const Signup = () => {

    const { items, setItems } = useContext(Context);

    //Initialization 

    const [formValues, setformValues] = useState('');
    const [formError, setformError] = useState({});
    const [isNext, setisNext] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        return () => {
            setformValues(items);
        };
    }, [items]);


    //Setting up form value from input field using handle change

    const handleChange = e => {
        const { name, value } = e.target;
        setformValues({ ...formValues, [name]: value });
    }

    //Validating form field 

    const validate = (values) => {
        //console.log("Values", values);
        const error = {};
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if (!values.firstname) {
            error.firstname = "Name is required"
        }

        if (!values.email) {
            error.email = "Email is required"
        }
        else if (!regex.test(values.email)) {
            error.email = "This is not valid email format"
        }

        if (!values.dob) {
            error.dob = "Date of Birth is required"
        }

        if (!values.username) {
            error.username = "Username is required"
        }

        if (!values.password) {
            error.password = "Password is required"
        } else if (values.password.length > 8) {
            error.password = "Password must not be exceed more than 8 characters"
        } else if (values.password.length < 4) {
            error.password = "Password must not be less than 4 characters"
        }

        return error;
    }



    // Handling click event using onClick Handler and navigate to the next component

    const onClickHandler = (e) => {
        e.preventDefault();
        setformError(validate(formValues));
        setItems(formValues)
        setisNext(true);
    }

    useEffect(() => {
        if (Object.keys(formError).length === 0 && isNext) {
            navigate('/address');
        }
    }, [formError]);

    return (
        <div>
            <form onSubmit={onClickHandler}>
                <h3>Register</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Name"
                        name='firstname'
                        value={items.firstname}
                        onChange={handleChange}
                    />
                </div>
                <p >{formError.firstname}</p>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text"
                        className="form-control"
                        placeholder="name@example.com"
                        name='email'
                        value={formValues.email}
                        onChange={handleChange} />
                </div>
                <p >{formError.email}</p>

                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type='date'
                        name='dob'
                        className="form-control"
                        placeholder="Enter Birth Date"
                        value={formValues.dob}
                        onChange={handleChange} />
                </div>
                <p >{formError.dob}</p>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text"
                        name='username'
                        className="form-control"
                        placeholder="Username"
                        value={formValues.username}
                        onChange={handleChange} />
                </div>
                <p >{formError.username}</p>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name='password'
                        value={formValues.password}
                        onChange={handleChange} />
                </div>
                <p >{formError.password}</p>

                <div className='next_btn'>
                    <button type="submit" className="btn btn-primary btn-lg float-right" >Next</button>

                </div>

            </form>

        </div>
    )
}

export default Signup