import React from 'react'
import { Wrapper, CompanyEmail, CompanyId, CompanyName } from '../CompanyItem/CompanyItem.styles'

const CompanyItem = ({ companyEmail, companyName, companyId, selectUser }) => {

    return (
        <Wrapper onClick={() => {
            selectUser(companyEmail);
        }}>
            <CompanyId>Nr ID: {companyId}</CompanyId>
            <CompanyEmail>E-mail: {companyEmail}</CompanyEmail>
            <CompanyName>Nazwa: {companyName}</CompanyName>
        </Wrapper >
    )
}

export default CompanyItem