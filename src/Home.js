import {useState, useEffect} from 'react';
import BlogList from './BlogList';


const Home = () => {

    const [name, setName] = useState('mario')

    const [blogs, setBlogs] = useState(
        [
            { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
            { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
            { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        ]
    );

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog=>blog.id !==id);
        setBlogs(newBlogs) 

    }
    // Use effect is hook that runs whenever a certian change happens
    // The second parameter is used to select what dependencies is hook has. In other words, which parts should the hook look at as its trigger.
    useEffect(()=> {
        console.log('UseEffect hook ran!');
        console.log(name);
    },[name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete} />

        <button onClick={()=>{setName('Luigi')}}>Change name</button>
        <p>{name}</p>

        </div>
     );
}

export default Home;