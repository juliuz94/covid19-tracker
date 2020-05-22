import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css'

export default function CountryPicker({ onChange }) {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [ setFetchedCountries ]);
    
    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => onChange(e.target.value)}>
                    <option value="">Global</option>
                    {fetchedCountries.map(country => <option value={country} key={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
