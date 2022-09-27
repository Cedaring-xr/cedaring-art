import React, { useState, useRef, useEffect } from 'react';
import TodoList from '../components/TodoList';
import CardInfo from '../components/CardInfo';
import art from '../Assets/artwork.json';
import { v4 as uuidv4 } from 'uuid';
import { useTransition, animated } from 'react-spring';
import { gsap } from 'gsap';

export default function ReactPrac() {
    const [todos, setTodos] = useState([]);
    const [items, setItems] = useState([]);
    const todoNameRef = useRef();
    const transition = useTransition(items, {
        from: { x: -500, y: 350, opacity: 0 },
        enter: (item) => async (next) => {
            await next({ y: item.y, opacity: 1, delay: item.delay }); //back to back animation chain
            await next({ x: -100 });
        },
        leave: { x: 500, y: 200, opacity: 0 }
    });

    const LOCAL_STOREAGE_KEY = 'todoApp.todos';

    useEffect(() => {
        const storedTodos = JSON.parse(
            localStorage.getItem(LOCAL_STOREAGE_KEY)
        );
        if (storedTodos) setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STOREAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function toggleTodo(id) {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }

    function handleAddTodo(e) {
        console.log(todoNameRef);
        const name = todoNameRef.current.value;
        if (name === '') return;
        setTodos((prevTodos) => {
            return [
                ...prevTodos,
                { id: uuidv4(), name: name, complete: false }
            ];
        });
        todoNameRef.current.value = null;
    }

    function handleClearTodos() {
        const newTodos = todos.filter((todo) => !todo.complete);
        setTodos(newTodos);
    }



    // gsap.from('.tutorial-block', { duration: 3, x: '-100%', ease: 'bounce'})

    

    return (
        <>
            <div className="todo-container">
                <TodoList todos={todos} toggleTodo={toggleTodo} />
                <input type="text" ref={todoNameRef} />
                <button onClick={handleAddTodo}>Add Todo</button>
                <button onClick={handleClearTodos}>
                    Clear Completed Todos
                </button>
                <div>
                    {todos.filter((todo) => !todo.complete).length} left todo
                </div>
            </div>
            <div className="content-block">
                <button
                    onClick={() => {
                        setItems((v) =>
                            v.length
                                ? []
                                : [
                                      { y: 100, delay: 0 },
                                      { y: 120, delay: 100 },
                                      { y: 140, delay: 200 }
                                  ]
                        );
                    }}
                >
                    {items.length ? 'un-mount' : 'mount'}
                </button>
                {transition((style, item) =>
                    item ? (
                        <animated.div
                            style={style}
                            className="spring-container"
                        >
                            <h1>react-spring</h1>
                        </animated.div>
                    ) : (
                        ''
                    )
                )}
            </div>
            <div className='tutorial-block'>
                <CardInfo /> 
            </div>
        </>
    );
}
