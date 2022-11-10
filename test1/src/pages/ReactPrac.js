import React, { useState, useRef, useEffect } from 'react';
import TodoList from '../components/TodoList';
import CardInfo from '../components/CardInfo';

import { v4 as uuidv4 } from 'uuid';
import { useTransition, animated } from 'react-spring';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import backLayer from '../Assets/images/parallax/backLayer2.png';
import midLayer from '../Assets/images/parallax/midLayer2.png';
import frontLayer from '../Assets/images/parallax/frontLayer2.png';

gsap.registerPlugin(ScrollTrigger);



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

// parallax stuff
    gsap.to('#prlx-back', {
        scrollTrigger: {
            scrub : 1
        },
        y: 600
    })
    gsap.to('#prlx-mid', {
        scrollTrigger: {
            scrub : 1
        },
        y: 450
    })
    gsap.to('#prlx-front', {
        scrollTrigger: {
            scrub : 1
        },
        y: 300
    })
    gsap.to('.parallax-text', {
        scrollTrigger: {
            scrub: 1
        },
        y: 1200,
        x: 400,
        rotation: 30
    })
    gsap.to('.parallax-nav', {
        scrollTrigger: {
            scrub: 1
        },
        y: 800,
        x: -400,
        rotation: -40
    })

    
    return (
        <>
            {/* <div>
                <div className='parallax-box'>
                    <img src={backLayer} className='parallax-img' id='prlx-back'/>
                    <a href="/"><h1 className='parallax-text'>Cedaring.Art</h1></a>
                    <img src={midLayer} className='parallax-img' id='prlx-mid'/>
                    <nav className='parallax-nav'>
                        <ul>
                            <li className='nav-item'><a href='/artwork'>Artwork</a></li>
                            <li className='nav-item'><a href='/blog'>Writing</a></li>
                            <li className='nav-item'><a href='climbing'>Climbing</a></li>
                        </ul>
                    </nav>
                    <img src={frontLayer} className='parallax-img' id='prlx-front'/>
                </div>
            </div> */}
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
