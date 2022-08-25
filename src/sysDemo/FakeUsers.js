import React,{useState,useEffect} from "react";

const demoUsers = [
    {
        id:"1",
        name:"Robin",
    },
    {
        id:"2",
        name:"Dennis",
    },
];

function getFakeUsers() {
    return new Promise((resolve) => 
        setTimeout(() => resolve(demoUsers),2000)
    );
}


function FakeUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getFakeUsers();
            setUsers(data);
        };
        fetchUsers();
    },[]);

    function handleUpdateName(item,name) {
        const newUsers = users.map((user) => {
            if (user.id === item.id) {
                return {
                    id:user.id,
                    name:name,
                };
            } else {
                return user;
            }
        });

        setUsers(newUsers);
    }

    return (
        <div>
            <h1>Drive State from Props in React</h1>
            <List list={users} onUpdateName={handleUpdateName} />
        </div>
    );
}

function List({list,onUpdateName}) {
    return (
        <ul>
            {list.map((item) => (
                <Item key={item.id} item={item} onUpdateName={onUpdateName}/>
            ))}
        </ul>
    );
}

function Item({item,onUpdateName}) {
    const [name, setName] = useState(item.name);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return (
        <li>
            <span>{item.name}</span>
            <input type="text" value={name} onChange={handleNameChange} />
            <button type="button" onClick={() => onUpdateName(item,name)}>
                Update
            </button>
        </li>
    );
}

export default FakeUsers;

