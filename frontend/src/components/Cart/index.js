import React, { useState } from 'react';
import { CartArea, CartHeader, CartBody, CartIcon, CartText } from './styled';
import { useSelector } from 'react-redux'




export default () => {

    const products = useSelector(state=> state.cart.products);
    const [show, setShow] = useState(false);

    const handleCartClick = () => {
        setShow(!show);
    }
    return (
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src="/assets/cart.png" />
                <CartText>Meu carrinho ({products.length})</CartText>
                {show &&
                    <CartIcon src='/assets/down.png' />
                }
            </CartHeader>
            <CartBody show={show}>
                ...
            </CartBody>
        </CartArea>
    )
}