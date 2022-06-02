import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setMail] = useState('');
    const [gender, setGender] = useState('male');
    const [users, setUsers] = useState([])

    function saveUser() {
        console.warn(name, age, email, gender)
        let data = {name, age, email, gender}
        fetch('http://127.0.0.1:8000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    useEffect(() => {
        fetch('http://127.0.0.1:8000/users')
            .then(val => val.json())
            .then(res => setUsers(res))
    }, [users])

    return (
        <div className="App">
            <h1> Post API </h1>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} name='name'/><br/><br/>
            <input type='number' value={age} onChange={(e) => setAge(e.target.value)} name='age'/><br/><br/>
            <input type='email' value={email} onChange={(e) => setMail(e.target.value)} name='email'/><br/><br/>
            <input type='text' value={gender} onChange={(e) => setGender(e.target.value)} name='gender'/><br/><br/>
            <button type={"button"} onClick={saveUser}>Save New User</button>
            <h1>Get Users</h1>


                <table border={'1'}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Gender</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((item) =>

                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                        </tr>

                    )
                    }
                    </tbody>

                </table>

        </div>
    );
}
export default App;
