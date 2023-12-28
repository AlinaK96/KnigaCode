import React, {useState, useEffect} from "react"
import axios from "axios";

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import CategoryList from "../blocks/video/CategoryList";
import Input from "../UI/input/Input";
import BookItem from "../blocks/rightPage/BookItem";


const Book = () => {
    const BOOK_URL = 'http://172.30.9.164/book/category/get'

    const [bookCategory, setBookCategory] = useState([])
    const [errMsg, setErrMsg] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bookCategory = await axios.get(BOOK_URL);
                setBookCategory(bookCategory.data);
            } catch (error) {
                if(error.bookCategory?.status === 404){
                    setErrMsg('Ничего не найдено');
                }
                console.error(error);
            }
        };
        fetchData();
        }, []);


    return (
        <>
            <Header content='Книга' />
            <div className="content">
                <div className="book">
                    <div className="leftPage">
                        <Input 
                            type='search'
                            placeholder='Поиск...'
                            className='search'
                        />
                        
                        {bookCategory.length === 0 ? 
                            <p><i>Здесь пока ничего нет</i></p> :
                            <CategoryList category={bookCategory} sublink='book'/>
                        }
                    </div>
                    <div className="rightPage">
                        {/* <BookItem  /> */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Book;
