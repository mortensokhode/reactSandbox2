import React from 'react';
import {TEXTOBJECT} from '../constantExports/globalConstants'; 
import { StyledIngress, StyledIngressHeader, StyledIngressText } from "../styles/styledHeaderElements";

function IngressH2line({ text }) {
    return (
        <StyledIngressHeader>
            <span className='IngressHeading'>{text.headline}</span>
        </StyledIngressHeader>
    )
  }

function IngressH3line({ text }) {
    return (
        <StyledIngressText>
            <span className='IngressText'>{text.ingressParagraph}</span>
        </StyledIngressText>
    )
  }

const IngressBox = () => {
    return (
        <StyledIngress>
            <IngressH2line text={TEXTOBJECT} />
            <IngressH3line text={TEXTOBJECT} />
        </StyledIngress>
)
};

export default IngressBox;
