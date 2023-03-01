import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './addresss.css'
import { Context } from "./Context";

import axios from "axios"

function Address() {

    const { items_cont, setitems_cont } = useContext(Context)
    const { items_state, setitems_state } = useContext(Context)
    const { items_city, setitems_city } = useContext(Context)
    const { items_add, setitems_add } = useContext(Context)

    //Initialization

    const [country, setcountry] = useState(''); //List of countries
    const [statelist, setstates] = useState('');
    const [citylist, setcitylist] = useState('')

    const [_countryValue, set_countryValue] = useState(''); //Selected country
    const [_stateValue, set_stateValue] = useState('');
    const [_cityValue, set_cityValue] = useState('');

    const [add_Input, set_add_input] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();


    

    //Fetching Countries, states, cities
    useEffect(() => {
        (async function getcountry() {
            try {
                // Fetch data
                const rescountry = await axios.get("http://localhost:8000/countries");
                setcountry(rescountry.data.data)
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, []);

    useEffect(() => {
        if (!_countryValue) return;
        (async function stateData() {
            try {
                const resState = await axios.get('http://localhost:8000/states/' + _countryValue)
                const CountryState = resState.data.data;
                setstates(CountryState);
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, [_countryValue]);

    useEffect(() => {
        if (!_stateValue) return;
        (async function cityData() {
            try {
                const resCity = await axios.get('http://localhost:8000/cities/' + _stateValue)
                const StateCity = resCity.data.data;
                setcitylist(StateCity);

            }
            catch (error) {
                console.log(error);
            }
        })();
    }, [_stateValue]);

    
    const AddHandler = (e) => {
        set_add_input(e.target.value);
        setitems_add(e.target.value)
    }

    const CountryHandler = (e) => {
        set_countryValue(e.target.value);
        const cn = e.target[e.target.selectedIndex].text
        setitems_cont(cn);
    }

    const StateHandler = async (e) => {
        set_stateValue(e.target.value)
        const sn = e.target[e.target.selectedIndex].text
        setitems_state(sn);
    }


    const cityHandler = (e) => {
        set_cityValue(e.target.value)
        const ctn = e.target[e.target.selectedIndex].text
        setitems_city(ctn);
    }

    

    useEffect(() => {
        return () => {
          set_add_input(items_add) 
        };
    }, [items_add]);


    const onChangeHandle = () => {
        //console.log("Previous Page")
        navigate('/')
    }

    const onChangeNext = () => {
        if (_countryValue != '' && _stateValue != '' && _cityValue != '' && add_Input != '') {
            navigate('/Preview')
        }
        else {
            setErrorMessage('*All the fields are mandetory');
        }
    }

    return (
        <div>
            <form>
                <h3>Address Info</h3>
                <div >
                    <label htmlFor="floatingTextarea2">Address</label>
                    <input className="form-control"
                        placeholder="Enter Your address"
                        name='address'
                        value={items_add}
                        onChange={AddHandler}>
                    </input>
                </div>


                <div className='margin'>
                    <label>Country</label>
                    <select placeholder='Select'
                        className="btn dropdown dropdown-toggle margin-left border-dark"
                        name="country"

                        value={country.country_name}
                        onChange={CountryHandler}>
                        <option>Select your Country</option>

                        {country.map && country.map((getcon, index) => {
                            return <option key={index} value={getcon.Country_Code} name={getcon.country_name}>
                                {getcon.country_name}
                            </option>
                        })}
                    </select>
                </div>

                <div className='margin'>
                    <label className='state'>State</label>
                    <select
                        className="btn dropdown dropdown-toggle margin-left border-dark"
                        name="state"
                        onChange={StateHandler}
                        value={statelist.state_name}>
                        <option>Select your State</option>
                        {statelist.map && statelist.map((getsta, index) => {
                            return <option key={index} value={getsta.State_Code} name={getsta.state_name}>
                                {getsta.state_name}
                            </option>
                        })}
                    </select>
                </div>

                <div>
                    <label className='margin'>City</label>
                    <select
                        className="btn dropdown dropdown-toggle margin-left border-dark"
                        name="cities"
                        onChange={cityHandler}
                        value={citylist.city_name}>
                        <option>Select your City</option>
                        {citylist.map && citylist.map((getcty, index) => {
                            return <option key={index} value={getcty.State_Code} name={getcty.city_name}>
                                {getcty.city_name}
                            </option>
                        })}

                    </select>
                </div>

                {errorMessage && <div className='error'> <p>{errorMessage}</p> </div>}
                <div className="btncls">
                    <button type='button' className="btn btn-primary btn-lg float-right" onClick={onChangeHandle}>Previous</button>
                    <button type='button' className="btn btn-primary btn-lg float-right" onClick={onChangeNext} >Next</button>
                </div>
            </form>

        </div>
    )
}

export default Address
