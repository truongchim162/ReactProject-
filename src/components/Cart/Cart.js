import React from "react";
import Button from "@atlaskit/button";
import Avatar from "@atlaskit/avatar";
import { useCallback, useState } from "react";
import { ToastContainer } from "react-toastify";
import Modal, {
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalTitle,
    ModalTransition,
} from "@atlaskit/modal-dialog";

const Cart = ({ onAdd, onRemove, onDelete, cartItems, countCartItems }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);

    const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
    const itemsFoods = cartItems.reduce((a, c) => a + c.quantity, 0);

    return (
        <div className="cart-container">
            <h1>Thực đơn đã chọn</h1>
            <div className="return-listfood">
                <a href="/fs-reactjs#/">Quay về mục chọn món</a>
            </div>
            <div>
                {cartItems.length === 0 && (
                    <div className="cart-notify">
                        <div>Bạn chưa chọn món nào!</div>
                        <a href="/fs-reactjs#/">Chọn ngay</a>
                    </div>
                )}
                {cartItems.map((Foods) => (
                    <div key={Foods.id} className="cart-food">
                        <div className="cart-food__avatar">
                            <Avatar
                                appearance="square"
                                size="medium"
                                src={Foods.img}
                            />
                        </div>
                        <div className="cart-food__name">{Foods.name}</div>
                        <div className="cart-food-money">
                            {Foods.price * Foods.quantity} ₫
                        </div>

                        <div className="cart-food__button">
                            <Button
                                className="btn-choose"
                                onClick={() => onRemove(Foods)}
                            >
                                -
                            </Button>

                            <Button className="btn-disable" isDisabled="true">
                                {Foods.quantity}
                            </Button>
                            <Button
                                className="btn-choose"
                                onClick={() => onAdd(Foods)}
                            >
                                +
                            </Button>
                            <Button
                                className="btn-choose"
                                onClick={() => onDelete(Foods)}
                            >
                                X
                            </Button>
                        </div>
                    </div>
                ))}
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
            <div className="cart-total">
                <div className="cart-total__quantity">
                    Số lượng món
                    <Button>
                        {countCartItems !== 0 ? countCartItems : "0"}
                    </Button>
                </div>
                <div className="cart-total__quantity_detail">
                    Số lượng dĩa
                    <Button>{itemsFoods !== 0 ? itemsFoods : "0"}</Button>
                </div>
                <div className="cart-total__money">
                    Tổng tiền<Button>{itemsPrice} ₫</Button>
                </div>
                <div></div>
                <div className="cart-total__timeremaning">
                    Thời gian chờ{" "}
                    <Button>{(itemsFoods * 1.5).toFixed(0)}:00 Phút</Button>
                </div>
                <div className="cart-total__button">
                    <div>
                        <Button appearance="primary" onClick={openModal}>
                            Chốt đơn
                        </Button>

                        <ModalTransition>
                            {isOpen && (
                                <Modal onClose={closeModal}>
                                    <ModalHeader>
                                        <ModalTitle>
                                            Đặt món thành công
                                        </ModalTitle>
                                    </ModalHeader>
                                    <ModalBody>
                                        Hãy quay lại nhận đồ ăn của bạn sau{" "}
                                        {(itemsFoods * 1.5).toFixed(0)} phút
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button appearance="subtle">
                                            Cen Xồ
                                        </Button>
                                        <Button
                                            appearance="primary"
                                            onClick={closeModal}
                                            autoFocus
                                        >
                                            Biết rồi
                                        </Button>
                                    </ModalFooter>
                                </Modal>
                            )}
                        </ModalTransition>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
