import styled from "styled-components";
import iphoneFrame from '../../assets/iphoneFrame.png'


export const MobileFrame = styled.div`
    margin: 0 auto;
    padding:0;
    box-sizing: border-box;
    width: 301px;
    height: 600px;
    z-indez: 10;
    background-color: white;
    background-image: url(${iphoneFrame});
    background-size: 299px 600px;
    background-repear:no-repeat;
    border-radius: 42px
`
export const InstaFrame = styled.div`
    
    .top{
       
        display: flex;
        justify-content: space-between;

        p{
            margin: 1.3rem 0 0 2rem;
            font-weight: 400;
        }
        span{
            margin: 1.3rem 2rem 0 0;
        }
        svg{
            width:15px;
            height:15px;
        }
    }

    .superior{

        display: flex;
        justify-content: space-between;
        margin: 1.3rem 0 0 2rem;

            span{

                margin: 0 2rem 0 0;

                svg{
                    width:23px;
                    height:23px;
                }
            }
        }
        .story{
            margin-top: 1.5rem;

            img{
                padding:0.1rem
            }
    
            .main{
                margin-left:1.3rem;
            }
        }

        .user{
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;

            .user-details{

                display: flex;

                img{
                    margin-left:1.5rem;
                    width:30px;
                    height:30px;
                    
                }
                p{
                    font-size: 13px;
                    font-weight: bold;
                    padding: 7px;
                    margin: 0;
                }

            }
            .dots{
                margin: 0 2rem 0 0;
                font-weight: bolder;
                font-size: 18px;
            }
        }

        .post{

            img{
                margin: 13px 0 0 16px;
            }

            .subs{
                margin: -3px 0 0 20px;
            }

        .save{
            margin: -5px 0 0 8.5rem;
            }
        }

        .bottom{

            img{
                width: 248px;
                margin-left: 1.5rem;
            }
        }

        
`