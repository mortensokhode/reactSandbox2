import React from 'react';
import { StyledIngress, StyledIngressHeader, StyledIngressBody, StyledIngressDetails } from "../styles/styledHeaderElements";


const IngressBox = (props) => {
    console.log("cardSide:", props.cardSide)
    return (
        <StyledIngress>
            <StyledIngressHeader>{props.product.title}</StyledIngressHeader>  
            <div className='IngressText'>
                {(props.cardSide === "front") ?  
                                                <StyledIngressBody>
                                                    Price: ${props.product.price} <br />
                                                    <img src={props.product.img} alt="Product image" className="responsiveTinyImg" />
                                                </StyledIngressBody>
                                            :
                                                <StyledIngressBody>
                                                    Id: {props.product.id} <br />
                                                    Description: <StyledIngressDetails>{props.product.description}</StyledIngressDetails> 
                                                    Amount sold: {props.product.count}                    
                                                </StyledIngressBody>
                }
            </div>
        </StyledIngress>
)
};

export default IngressBox;
// {headline, ingressText}

// cardSide, {id, title, img, price, description, category, rate, count}
