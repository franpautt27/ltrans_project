import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px){
        height: 1300px;
    }
    @media screen and (max-width:480px){
        height: 1300px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

   

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 340px;
    padding-bottom: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        
    }

    @media screen and (max-width: 768px){
        margin-left: 100px;
        margin-right: 100px;
    }
    @media screen and (max-width: 550px){
        margin: 0;
    }
`

export const ServicesIcon = styled.img`
    height:160px;
    width: 100%;
    margin-bottom: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

`

export const ServicesH1 = styled.h1`
    font-size:2.5rem;
    color: #68A4C4;
    margin-bottom: 64px;

    @media screen and (max-width: 960px){
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
    text-align: center;
`

export const ServicesP = styled.p`
    font-size: 0.8rem;
    text-align: center;
    margin-bottom: 10px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 10px;
`