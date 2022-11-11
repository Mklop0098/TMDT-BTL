import React, {useState, useEffect} from "react";
import axios from 'axios'

export const getProductById = (id) => {
    const [user, setUser] = useState();
    useEffect(() => {
        const fetchData = () => {
            return axios.get(`https://hcmut-e-commerce.herokuapp.com/api/product/detail/${id}`)
                .then((response) => setUser(response.data))
        }
        fetchData();
    }, [])

    return user
}

export const getAllProduct = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            return axios.get("https://hcmut-e-commerce.herokuapp.com/api/product/getall")
                .then((response) => setUser(response.data))
        }
        fetchData();
    }, [])
    return user
}

export const fetchPosts = () => axios.get("https://hcmut-e-commerce.herokuapp.com/api/product/getall")