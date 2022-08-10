import "./App.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ListFood from "./components/FoodCart/ListFood";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FoodCartItems from "./components/FoodCart/FoodCartItems";

const TODO_APP_STORAGE_KEY = "TODO_APP";

function App() {
    const notify = () =>
        toast.success("Thêm món thành công!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    const notify1 = () =>
        toast("Bớt món thành công!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    const notify2 = () =>
        toast.error("Xóa món thành công!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    const { Foods } = FoodCartItems;
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storageTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
        if (storageTodoList) {
            setCartItems(JSON.parse(storageTodoList));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(cartItems));
    }, [cartItems]);

    const onAdd = (food) => {
        const exist = cartItems.find((x) => {
            // console.log(x);
            return x.id === food.id;
        });
        // console.log(typeof exist);
        // console.log(exist);
        // console.log(Foods);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === food.id
                        ? { ...exist, quantity: exist.quantity + 1 }
                        : x
                )
            );
            notify();
        } else {
            setCartItems([...cartItems, { ...food, quantity: 1 }]);
            // console.log(food);
            notify();
            console.log(cartItems);
        }
    };
    const onRemove = (food) => {
        const exist = cartItems.find((x) => x.id === food.id);
        if (exist.quantity === 1) {
            setCartItems(cartItems.filter((x) => x.id !== food.id));
            notify1();
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === food.id
                        ? { ...exist, quantity: exist.quantity - 1 }
                        : x
                )
            );
            notify1();
        }
    };
    const onDelete = (food) => {
        // const exist = cartItems.find((x) => x.id === food.id);
        setCartItems(cartItems.filter((x) => x.id !== food.id));
        notify2();
    };
    return (
        <div className="App">
            <div className="header">
                <Navbar />
            </div>
            <div className="container">
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route exact path="/">
                            <ListFood Foods={Foods} onAdd={onAdd} />
                        </Route>
                        <Route exact path="/cart">
                            <Cart
                                cartItems={cartItems}
                                onAdd={onAdd}
                                onRemove={onRemove}
                                onDelete={onDelete}
                                countCartItems={cartItems.length}
                            />
                        </Route>
                        <Route exact path="/about" component={About}></Route>
                        <Route
                            exact
                            path="/contact"
                            component={Contact}
                        ></Route>
                    </Switch>
                </Router>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;
