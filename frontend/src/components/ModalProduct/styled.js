import styled from 'styled-components'

export const Container = styled.div`
    width: 700px;
    padding: 20px;
   
`;

export const ProductArea = styled.div`
    height: 200px;
  
    display: flex;
   


`;
export const ProductButtons = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ProductButton = styled.button`
    border: 0;
    background-color: #009688;
    box-shadow: 4px 5px 0px rgba(0, 0, 0, 0.16);
    color: #FFF;
    font-size: ${props=>props.small ? '13px' : '22px'};
    font-weight: bold;
    padding: ${props=>props.small ? '8px 10px' : '10px 20px'};
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
`;


export const ProductPhoto = styled.img`
    width: 310px;
    border-radius: 10px;
   


`;
export const ProductInfoArea = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
    


`;
export const ProductDetails = styled.div`



`;
export const ProductQuantityArea = styled.div`
    height: 50px;

    display: flex;
    justify-content: space-between;


`;

export const ProductName = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

export const ProductIngredients = styled.div`
    font-size: 14px;
`;

export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    background-color: #009688;
    padding: 10px;
    border-radius: 10px;
`;


export const ProductQtImage = styled.img`

    width: 18px;
    height: auto;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;

`;

export const ProductQtText = styled.div`
    font-size: 22px;
    font-weight: bold;
    color: #FFF;
`;

export const ProductPrice = styled.div`
     background-color: #009688;
     color: #FFF;
     padding: 10px;
     border-radius: 10px;
    font-size: 22px;
    font-weight: bold;

`;



